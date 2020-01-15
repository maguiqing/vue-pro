const str = window.localStorage;
const state = {
  bgIndex: str.getItem("bgIndex") || 0
};
export default state;
