import { fromWei } from 'web3-utils'
import { handleActions } from 'redux-actions'
import BigNumber from 'bignumber.js'

// Since both ETH and MET are 18 decimal places, we can use a single const
const DECIMAL_PLACES = 18

// Ensure all division operations are not properly rounded
BigNumber.config({ DECIMAL_PLACES })

// Values are in ETH and MET, not wei and aMET
const initialState = {
  eth: '0',
  met: '0'
}

const reducer = handleActions(
  {
    UPDATE_BUY_ETH: (state, { payload }) => ({
      ...state,
      eth: new BigNumber(payload.value)
        .toFixed(DECIMAL_PLACES),
      met: new BigNumber(payload.value)
        .div(fromWei(payload.rate))
        .toFixed(DECIMAL_PLACES)
    }),
    UPDATE_BUY_MET: (state, { payload }) => ({
      ...state,
      eth: new BigNumber(payload.value)
        .times(fromWei(payload.rate))
        .toFixed(DECIMAL_PLACES),
      met: new BigNumber(payload.value)
        .toFixed(DECIMAL_PLACES)
    }),
    UPDATE_AUCTION_STATUS: (state, { payload }) => ({
      ...state,
      eth: new BigNumber(state.met)
        .times(fromWei(payload.currentPrice))
        .toFixed(DECIMAL_PLACES)
    }),
    CLEAR_BUY_FORM: () => initialState
  },
  initialState
)

export default reducer