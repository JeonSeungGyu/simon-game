import * as types from '../actions'
import { createRandomSequence as getRandom } from '../utils/createRandomSequence'

const initialState = {
    seq: getRandom(3),
    step: -1,
    userSeq: [],
    /*
        user 1. "not played"
             2. "failed to pass steps"
             3. "passed some steps"
    */ 
    user: "not played",
    strict: false
}

function UserReducer(state = initialState, action) {    
    switch(action.type) {
        case types.UPDATE_USER_SEQ:
            if (action.payload[0] === state.seq[++state.step]) {
                return {
                    ...state,
                    userSeq: state.userSeq.concat(action.payload),
                    user: "passed some steps"
                }
            } else {
                return {
                    ...state,
                    step: -1,
                    userSeq: [],
                    user: "failed to pass steps"
                }
            }
            
        case types.SET_TO_INITIAL: 
            return {
                    ...initialState,
                    strict: state.strict
            }
        case types.UPDATE_SEQ: 
            if (state.seq.length === state.userSeq.length) {
                return {
                    ...initialState,
                    seq: state.seq.concat(getRandom(1)),
                    strict: state.strict
                }      
            } else {
                return {
                    ...state
                }
            }
        case types.SET_TO_STRICT:
            return {
                ...state,
                strict: !state.strict
            }
        default:
            return state    
    }
}

export default UserReducer