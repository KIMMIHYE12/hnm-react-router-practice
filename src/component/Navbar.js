import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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

  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className='header'>
      <div className='login_button'>
        <button onClick={goToLoginPage} className='btn_login'>
          <img
            className='ico_main'
            src='/images/ico_login.svg'
            alt='로고인 아이콘'
          />
          <div>로그인</div>
        </button>
      </div>
      <div className='nav_section'>
        <img width={60} src='/images/logo.svg' alt='H&M 로고이미지' />
      </div>
      <div className='nav_container'>
        <ul className='menu_list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search_bar'>
          <button>
            <img src='/images/ico_search.svg' alt='돋보기 모양의 찾기 버튼' />
          </button>
          <input type='text' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
