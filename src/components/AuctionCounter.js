import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'
import React, { Component } from 'react'

class AuctionCounter extends Component {
  render () {
    const { nextAuctionStartTime } = this.props

    const renderer = ({ days, hours, minutes, seconds, completed }) =>
      <div>
        <span className="auction-timer__section">{days}</span>
        <span className="auction-timer__section">{hours}</span>
        <span className="auction-timer__section">{minutes}</span>
        <span className="auction-timer__section">{seconds}</span>
      </div>

    return (
      <div className="container__auction-timer">
        <Countdown date={nextAuctionStartTime} renderer={renderer} />
        <ul className="auction-timer__labels">
          <li>Days</li>
          <li>Hours</li>
          <li>Mins</li>
          <li>Secs</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => state.auction.status

export default connect(mapStateToProps)(AuctionCounter)
