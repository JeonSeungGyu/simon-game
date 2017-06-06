import * as types from '../actions'

const initialState = {
    status: 'loading..',
    pads: [
        {
            playing: false, 
            position: 'top-left'
        },
        {
            playing: false, 
            position: 'top-right'
        },
        {
            playing: false, 
            position: 'bottom-left'
        },
        {
            playing: false, 
            position: 'bottom-right'
        },
    ]
}

function PadReducer(state = initialState, action) {
    switch (action.type) {
        case types.LIGHTEN_PAD:
            return {
                ...state,
                pads: [
                    ...state.pads.filter(v => v.position !== action.payload),
                    {
                        playing: true,
                        position: action.payload
                    }
                ]
            }
        case types.LIGHTEN_OFF_PAD: 
            return {
                ...state,
                pads: [
                    ...state.pads.filter(v => v.position !== action.payload),
                    {
                        playing: false,
                        position: action.payload
                    }
                ]
            }
        case types.START_MUSIC:
            return {
                status: 'playing..',
                pads: [
                    ...state.pads
                ]
            }
        case types.END_MUSIC: 
            return {
                status: 'loading..',
                pads: [
                    ...state.pads
                ]
            }     
        default:
            return state        
    }
}

export default PadReducer