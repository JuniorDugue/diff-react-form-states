export default function loginReducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "login":
      return {
        ...state,
        loading: true,
      };

    case "logout":
      return {
        ...action.value,
      };

    case "reset":
      return {
        ...action.value,
      };

    case "success":
      return {
        ...action.value,
        loggedIn: true,
      };

    default:
      return state;
  }
}
