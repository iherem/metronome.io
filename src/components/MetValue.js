import BigNumber from 'bignumber.js'
import React from 'react'
import smartRounder from 'smart-round'

// Metronome decimal places is hardcoded to 18 in the contract so it is safe and
// simpler to hardcode it here too
const DECIMAL_PLACES = 18

// Ensure all division operations are properly rounded by the library
BigNumber.config({ DECIMAL_PLACES })

const smartRound = smartRounder(6, 0, 6)

const fromUnit = {
  met: 1,
  atto: Math.pow(10, DECIMAL_PLACES)
}

const MetValue = ({ children, unit = 'atto' }) => (
  <span>{smartRound(new BigNumber(children).div(fromUnit[unit]))} MET</span>
)

export default MetValue
