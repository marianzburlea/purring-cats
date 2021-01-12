import * as constant from './list.constant'

export const initListAction = list => ({
  type: constant.INIT_LIST,
  payload: { list }
})
