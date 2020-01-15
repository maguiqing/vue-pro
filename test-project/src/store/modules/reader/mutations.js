import * as type from './mutation-type';


const mutation = {
  [type.SET_BACKGROUND_COLOR](state, bgIndex) {
      state.bgIndex = bgIndex
  }
}

export default mutation
