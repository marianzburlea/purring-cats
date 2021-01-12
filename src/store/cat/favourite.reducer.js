import * as constant from './favourite.constant'

const initialState = []

export const favouriteReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.INIT_FAVOURITE:
      return action.payload.list

    case constant.UPDATE_FAVOURITE:
      return action.payload.favouriteId
        ? [...state, {
          image_id: action.payload.imageId,
          id: action.payload.favouriteId
        }]
        : state.filter(fav => fav.image_id !== action.payload.imageId)

    default:
      return state
  }
}
