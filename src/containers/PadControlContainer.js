import PadControl from './PadControl'
import * as actions from '../actions'
import { sleep } from '../utils/sleep'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

    // from PadReducer
    status: state.PadReducer.status,

    // from UserReducer 
    seq: state.UserReducer.seq
})

const mapDispatchToProps = (dispatch) => ({

    // from PadActions
    playSeq: async (seq, cond) => {
        if (cond) {
            await dispatch(actions.startMusic())
            await sleep(100)
            for (let i = 0; i < seq.length; i++) {
                await dispatch(actions.lightenPad(seq[i]))
                await sleep(500)
                await dispatch(actions.lightenOffPad(seq[i]))
                await sleep(100)
            }
            await dispatch(actions.endMusic())      
        }
    },

    // from UserActions
    setToInitial: () => dispatch(actions.setToInitial()),
    setToStrict: () => dispatch(actions.setToStrict())
})

const PadControlContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PadControl)

export default PadControlContainer