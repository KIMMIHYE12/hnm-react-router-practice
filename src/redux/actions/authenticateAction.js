function login(id, password) {
  return (dispatch, getState) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, password, authenticate: true },
    });
  };
}

function changeLogin(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { authenticate: false } });
  };
}

export const authenticateAction = { login, changeLogin };
