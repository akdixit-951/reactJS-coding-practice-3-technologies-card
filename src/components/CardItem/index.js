import './index.css'

const CardItem = props => {
  const {sourceItem} = props
  const {title, description, imgUrl, className} = sourceItem

  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-desc">{description}</p>
      <img src={imgUrl} alt={title} className="card-img" />
    </li>
  )
}

export default CardItem
