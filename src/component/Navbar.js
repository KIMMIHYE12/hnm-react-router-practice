import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M",
    "HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const goToLoginPage = () => {
    authenticate === true ? setAuthenticate(false) : navigate("/login");
  };

  const goToMainPage = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`header ${isMobile ? "fixed" : ""}`}>
      <nav className={isMobile ? "mobile_nav" : "desktop_nav"}>
        <div className='top_menu'>
          <div className='search_bar'>
            <button>
              <img src='/images/ico_search.svg' alt='돋보기 모양의 찾기 버튼' />
            </button>
            <input
              type='text'
              onKeyPress={(event) => search(event)}
              placeholder='제품 검색'
            />
          </div>
          <div className='login_button'>
            <button onClick={goToLoginPage} className='btn_login'>
              <img
                className='ico_main'
                src={
                  authenticate === false
                    ? "/images/ico_login.svg"
                    : "/images/ico_logout.svg"
                }
                alt='로고인 아이콘'
              />
              <div>{authenticate === false ? "로그인" : "로그아웃"}</div>
            </button>
          </div>
        </div>
        <div className='nav_content'>
          <img
            width={60}
            src='/images/logo.svg'
            onClick={goToMainPage}
            alt='H&M 로고이미지'
          />
          {isMobile ? (
            <div className='hamburger_menu' onClick={handleMenuToggle}>
              <img
                src={
                  menuOpen === true
                    ? "/images/btn_menu_close.svg"
                    : "/images/btn_menu_open.svg"
                }
                alt={menuOpen === true ? "메뉴닫기 버튼" : "메뉴열기 버튼"}
              />
            </div>
          ) : (
            <div className='nav_container'>
              <ul className='menu_list'>
                {menuList.map((menu) => (
                  <li>{menu}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      {isMobile && menuOpen && (
        <div className='nav_container nav_mb'>
          <ul className='menu_list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
