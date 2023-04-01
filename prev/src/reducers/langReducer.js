export const initialState = { lang: "en" };

export const langReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG_EN":
      return { ...state, lang: "en" };
    case "CHANGE_LANG_JP":
      return { ...state, lang: "jp" };
    default:
      return state;
  }
};
