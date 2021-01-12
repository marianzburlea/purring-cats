import * as constant from './vote.constant'

export const initVoteListAction = list => ({
  type: constant.INIT_VOTE,
  payload: { list }
})

export const updateVoteAction = (imageId, voteId) => ({
  type: constant.UPDATE_VOTE,
  payload: { imageId, voteId }
})
