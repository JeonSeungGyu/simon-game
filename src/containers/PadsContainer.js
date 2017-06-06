import Pads from './Pads'
import * as actions from '../actions'
import { sleep } from '../utils/sleep'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

    // from PadReducer
    status: state.PadReducer.status,
    pads: state.PadReducer.pads,

    // from UserReducer 
    seq: state.UserReducer.seq,
    step: state.UserReducer.step,
    user: state.UserReducer.user,
    strict: state.UserReducer.strict
})

const mapDispatchToProps = (dispatch) => ({

    // from PadActions
    playSeq: async (seq, cond) => {
        if (cond) {
            await dispatch(actions.startMusic())
            await sleep(200)
            for (let i = 0; i < seq.length; i++) {
                await dispatch(actions.lightenPad(seq[i]))
                await sleep(400)
                await dispatch(actions.lightenOffPad(seq[i]))
                await sleep(400)
            }
            await dispatch(actions.endMusic())      
        }
    },

    // from UserActions
    updateUserSeq: (piece) => dispatch(actions.updateUserSeq(piece)),
    updateSeq: () => dispatch(actions.updateSeq()),
    setToInitial: () => dispatch(actions.setToInitial())
})

const PadsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pads)

export default PadsContainer