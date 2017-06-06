export const UPDATE_USER_SEQ = 'UPDATE_USER_SEQ'
export const SET_TO_INITIAL = 'SET_TO_INITIAL'
export const UPDATE_SEQ = 'UPDATE_SEQ'
export const SET_TO_STRICT = 'SET_TO_STRICT'

export const updateUserSeq = (piece) => ({
    type: UPDATE_USER_SEQ,
    payload: piece
})

export const setToInitial = () => ({
    type: SET_TO_INITIAL
})

export const updateSeq = () => ({
    type: UPDATE_SEQ
})

export const setToStrict = () => ({
    type: SET_TO_STRICT
})