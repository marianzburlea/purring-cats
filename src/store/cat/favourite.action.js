import * as constant from './favourite.constant'

export const initFavouriteListAction = list => ({
  type: constant.INIT_FAVOURITE,
  payload: { list }
})

export const updateFavouriteAction = (imageId, favouriteId) => ({
  type: constant.UPDATE_FAVOURITE,
  payload: { imageId, favouriteId }
})
