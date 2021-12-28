export const initialState = { lang: "en" };

export const langReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG_EN":
      if (state.lang !== "en") {
        return { lang: "en" };
      }
      return state;
    case "CHANGE_LANG_JP":
      if (state.lang !== "jp") {
        return { lang: "jp" };
      }
      return state;
    default:
      return state;
  }
};
