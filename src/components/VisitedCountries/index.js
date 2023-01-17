import './index.css'

const VisitedCountries = props => {
  const {countryDetails, removeCountries} = props
  const {id, name, imageUrl} = countryDetails
  const removeCountry = () => {
    removeCountries(id)
  }
  return (
    <li className="country">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="country-cont">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
