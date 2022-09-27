import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'
import {SliderContainer, AppHeading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    // eslint-disable-next-line react/no-unknown-property
    <SliderContainer data-testid="planets" className="slider-container">
      <AppHeading className="appHeading">PLANETS</AppHeading>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default PlanetsSlider
