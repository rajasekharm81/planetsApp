import {PlanetItemsContainer, PlanetImg} from './styledComponents'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each

  return (
    <PlanetItemsContainer className="planetItemsContainer">
      <PlanetImg className="planetImg" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </PlanetItemsContainer>
  )
}

export default PlanetItem
