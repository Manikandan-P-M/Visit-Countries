import './index.css'

const CountriesList = props => {
  const {countriesLists, addCountries} = props
  const {id, name, isVisited} = countriesLists
  const addCountry = () => {
    addCountries(id)
  }
  return (
    <li className="countries-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={addCountry}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
