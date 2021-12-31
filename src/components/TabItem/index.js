// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetail, onChangeSearch, isClick} = props
  const {tabId, displayText} = tabDetail

  const styleOnClick = isClick ? 'click-style' : 'button'
  const styleOnHorizontalLine = isClick ? 'horizontal-line' : ''
  const onClickFunction = () => {
    onChangeSearch(tabId)
  }

  return (
    <li className="list-styling">
      <button className={styleOnClick} type="button" onClick={onClickFunction}>
        {displayText}
      </button>
      <hr className={styleOnHorizontalLine} />
    </li>
  )
}

export default TabItem
