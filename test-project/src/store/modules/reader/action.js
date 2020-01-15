import * as type from './mutation-type'

const str = window.localStorage;

export const setOptions = ({commit, getters}, {name, value}) => {
  switch (name) {
    case 'bgIndex':
    commit(type.SET_BACKGROUND_COLOR, value);
    str.setItem('bgIndex', value);
    break;
    default:
      return;


  }
}
