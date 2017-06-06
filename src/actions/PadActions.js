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