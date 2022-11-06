import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Button} from '@mui/material'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    margin: 2,
  },
})

const buttonData = [
  'Dates',
  'Group size',
  'More filters',
  'Great for groups',
  'Family-friendly',
  'Animals',
  'Arts & writing',
  'Baking',
  'Cooking',
  'Dance',
  'Drinks',
  'Entertainment',
  'Fitness',
  'History & culture',
  'Magic',
  'Music',
  'Social impact',
  'Wellness',
  'Olympians & paralympians',
  'Designed for accessibility',
]

const ButtonSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    nextArrow: <RiArrowLeftSLine className="home-arrow" />,
    prevArrow: <RiArrowRightSLine className="home-arrow" />,
    responsive: [
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        {buttonData.map(each => (
          <div key={each}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="neutral"
                style={{borderRadius: '25px', margin: '5px'}}
              >
                {each}
              </Button>
            </ThemeProvider>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ButtonSlider
