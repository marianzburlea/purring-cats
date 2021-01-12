import * as constant from './list.constant'

const initialState = []

export const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.INIT_LIST:
      return action.payload.list

    default:
      return state
  }
}
