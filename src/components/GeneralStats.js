import { connect } from 'react-redux'
import BigNumber from 'bignumber.js'
import React, { Component } from 'react'
// import ReactTooltip from 'react-tooltip'

import CoinCapRate from '../providers/CoinCapRate'
import FiatValue from './FiatValue'
// import infoIcon from '../img/ic-info.svg'
import MetValue from './MetValue'

class GeneralStats extends Component {
  render () {
    const {
      auction: {
        auctionSupply,
        isAuctionActive,
        isDailyAuction,
        tokenSupply
      },
      rates,
      onBuyMetronomeClick,
      updateEthUsdRate
    } = this.props

    const marketCap = new BigNumber(tokenSupply)
      .times(rates.ETH_USD)
      .div(1e18)
      .toString()

    return (
      <React.Fragment>
        <CoinCapRate onData={updateEthUsdRate}/>
        <div className="GeneralStats container__general-stats">
          <div className="clearInner">
            <div className="left">
              <div className="container__inner">
                <div className="label__general-stats">Market Supply</div>
                <div className="numeral__general-stats"><MetValue>{tokenSupply}</MetValue></div>
              </div>
            </div>
            <div className="left">
              <div className="container__inner">
                <div className="label__general-stats">Market Cap</div>
                <div className="numeral__general-stats"><FiatValue suffix="USD">{marketCap}</FiatValue></div>
              </div>
            </div>
            <div className="left">
              <div className="container__inner">
                <div className="label__general-stats">{isDailyAuction ? 'Daily' : 'Initial'} Auction Amount</div>
                <div className="numeral__general-stats"><MetValue>{auctionSupply}</MetValue></div>
              </div>
            </div>
          </div>
          {/* <div className="left">
            <div className="container__inner">
              <ReactTooltip />
              <div className="label__general-stats">Largest Delta <img alt="" data-tip="Kraken $119.97 &#60; &#62; Bitifinex $122.96" src={infoIcon} /></div>
              <div className="numeral__general-stats">${data.mtn_largest_delta} <span className="label__delta-stats"></span></div>
            </div>
          </div> */}
          <div className="button__visit-auction-dashboard">
            <button onClick={onBuyMetronomeClick} disabled={!isAuctionActive}>
              Buy Metronome
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auction: state.auction.status,
  rates: state.rates
})

const mapDispatchToProps = dispatch => ({
  onBuyMetronomeClick: () => dispatch({
    type: 'SHOW_BUY_PANEL',
    payload: true
  }),
  updateEthUsdRate: value => dispatch({
    type: 'UPDATE_RATE',
    payload: { type: 'ETH_USD', value }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralStats)
