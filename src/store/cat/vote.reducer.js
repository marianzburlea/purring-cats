import * as constant from './vote.constant'

const initialState = []

export const voteReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.INIT_VOTE:
      return action.payload.list

    case constant.UPDATE_VOTE:
      return action.payload.voteId
        ? [...state, {
          image_id: action.payload.imageId,
          id: action.payload.voteId
        }]
        : state.filter(fav => fav.image_id !== action.payload.imageId)

    default:
      return state
  }
}
