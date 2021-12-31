// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetail} = props
  const {appName, imageUrl} = appDetail

  return (
    <li className="app-item">
      <img className="image-style" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
