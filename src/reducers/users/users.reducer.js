export const USERS_INITIAL = {
  loading: false,
  user: null,
  token: null,
  repositories: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "LOGIN":
      return {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
        loading: false,
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
