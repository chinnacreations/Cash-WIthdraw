import './index.css'

const DenominationItem = props => {
  const {denominationList, BalanceUpadte} = props
  const {value} = denominationList

  const ClickToWithDraw = () => {
    BalanceUpadte(value)
  }

  return (
    <li className="btn-lists">
      <button type="button" className="btn" onClick={ClickToWithDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
