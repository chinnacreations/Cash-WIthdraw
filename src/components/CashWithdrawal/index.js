import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    Balance: 2000,
  }

  BalanceUpadte = value => {
    this.setState(prevstate => ({
      Balance: prevstate.Balance - value,
    }))
  }

  render() {
    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)
    const {Balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-con">
        <div className="card-con">
          <div className="name-con">
            <div className="initial-con">
              <p className="initial">{initialName}</p>
            </div>
            <p className="name">{name}</p>
          </div>

          <div className="balance-con">
            <p className="heading">Your Balance</p>
            <p className="balance">
              {Balance} <br />
              <span>In Rupees</span>
            </p>
          </div>
          <p className="balance">Withdraw</p>
          <p className="currency">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdraw-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationList={eachItem}
                BalanceUpadte={this.BalanceUpadte}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
