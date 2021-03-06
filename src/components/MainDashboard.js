import React, { Component } from 'react'

import GeneralStats from './GeneralStats'
import HeaderDashboard from './HeaderDashboard'
// import Markets from './Markets'
// import MtnAuction from './MtnAuction'
// import MtnExchanger from './MtnExchanger'
import MetPriceAreaBar from './MetPriceAreaBar'

class MainDashboard extends Component {
  render () {
    return (
      <div className={this.props.showScreenDarken ? 'MainDashboard container__main --screenDarken' : 'MainDashboard container__main'}>
        <GeneralStats />
        <div className="container__primary">
          <div className="container__primary--inner">
            <HeaderDashboard />
            <MetPriceAreaBar />
            {/* <div className="container__row container__stats">
              <div className="container__header-top-border"></div>
              <div className="container__mtn-auction-inner">
                <span className="label__title">Stats</span>
                <MtnAuction />
                <MtnExchanger />
                <Markets />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MainDashboard
