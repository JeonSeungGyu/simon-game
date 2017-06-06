export const LIGHTEN_PAD = 'LIGHTEN_PAD'
export const LIGHTEN_OFF_PAD = 'LIGTEN_OFF_PAD'
export const START_MUSIC = 'START_MUSIC'
export const END_MUSIC = 'END_MUSIC'

export const lightenPad = (position) => ({
    type: LIGHTEN_PAD,
    payload: position
})

export const lightenOffPad = (position) => ({
    type: LIGHTEN_OFF_PAD,
    payload: position
})

export const startMusic = () => ({
    type: START_MUSIC
})

export const endMusic = () => ({
    type: END_MUSIC
})

// -------------------UserActions.js--------------------------

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