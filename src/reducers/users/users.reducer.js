export const USERS_INITIAL = {
  user: null,
  token: null,
  repositories: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
      };
    case "CHECK_SESSION":
      return {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    case "GET_REPOSITORIES":
      return {
        ...state,
        repositories: [...action.payload],
      };
    default:
      return { ...state };
  }
};
