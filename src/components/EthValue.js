import { fromWei } from 'web3-utils'
import React from 'react'
import smartRounder from 'smart-round'

const smartRound = smartRounder(6, 0, 6)

const EthValue = ({ children }) => (
  <span>{children && smartRound(fromWei(children))} ETH</span>
)

export default EthValue
