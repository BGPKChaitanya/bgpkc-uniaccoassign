import {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import PlacePlate from '../PlacePlate'
import './index.css'

const data = [
  {
    id: 1,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667711743/sean-oulashin-KMn4VEeEPR8-unsplash_lfagip.jpg',
    Rating: 4.99,
    Views: 153,
    City: 'New York',
    Description: 'Plan the perfect New York vacation',
    Price: 1558,
  },

  {
    id: 2,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667713786/emrecan-arik-daV6jGXMuM8-unsplash_vdbitq.jpg',
    Rating: 5.0,
    Views: 19,
    City: 'Barcelona',
    Description: 'Design your trip to Barcelona with Gemma',
    Price: 3102,
  },

  {
    id: 3,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667714093/austin-distel-owrjMvuCrEQ-unsplash_yhlwyy.jpg',
    Rating: 4.97,
    Views: 60,
    City: 'South Korea',
    Description: 'Craft a custom trip to Korea with Jay',
    Price: 3504,
  },

  {
    id: 4,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667714417/austin-distel-VVqstzTKDCk-unsplash_xe9z86.jpg',
    Rating: 4.63,
    Views: 8,
    City: 'Mexico',
    Description: 'Live Tulum like a local',
    Price: 630,
  },

  {
    id: 5,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667715066/karsten-winegeart-cNTWUoh3mdw-unsplash_wxzmfa.jpg',
    Rating: 4.75,
    Views: 12,
    City: 'United States',
    Description: 'Plan a trip to amazing Austin',
    Price: 2050,
  },

  {
    id: 6,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667715584/carlos-ibanez-oI141-aIwnQ-unsplash_agtimy.jpg',
    Rating: 4.91,
    Views: 43,
    City: 'Italy',
    Description: 'Create your Rome itinerary with Debora',
    Price: 980,
  },

  {
    id: 7,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667716719/charisse-kenion-W6mdQYenu44-unsplash_o3jiqc.jpg',
    Rating: 4.91,
    Views: 2596,
    City: 'Spain',
    Description: "'No Spain no Game' The Fabulous Game",
    Price: 1307,
  },

  {
    id: 8,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717212/sofia-monteiro-txgiC79ryVM-unsplash_zhjkvj.jpg',
    Rating: 4.97,
    Views: 488,
    City: 'Japan',
    Description: 'Origami and the Essence of Japan',
    Price: 671,
  },

  {
    id: 9,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717558/surface-ZDVUNqe5aLo-unsplash_eo6al0.jpg',
    Rating: 4.86,
    Views: 594,
    City: 'Poland',
    Description: 'Murder Mystery Escape Room Game-Perfect for Halloween',
    Price: 1306,
  },

  {
    id: 10,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667717955/steven-roussel-2HBRHiZtWZY-unsplash_htdmq7.jpg',
    Rating: 4.82,
    Views: 120,
    City: 'France',
    Description: "'From Paris with Laughs' The Scavenger Hunt",
    Price: 1143,
  },

  {
    id: 11,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667718235/farsai-chaikulngamdee-oZSDI44GwKU-unsplash_w1w8ei.jpg',
    Rating: 4.94,
    Views: 2579,
    City: 'Greece',
    Description: "'True vs False' Funny Historical Game",
    Price: 1307,
  },

  {
    id: 12,
    VideoURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    VideoImage:
      'https://res.cloudinary.com/dwp6uyiir/image/upload/v1667718517/wolfgang-hasselmann-UZ3T2F4d_w8-unsplash_zi2rju.jpg',
    Rating: 4.95,
    Views: 660,
    City: 'South Africa',
    Description: 'Dive Under the Sea with a Shark Expert',
    Price: 1558,
  },
]

const PlacesTravel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
  }
  const buttonSlider = useRef()
  const count = data.length

  const goBack = () => {
    buttonSlider.current.slickPrev()
  }

  const goNext = () => {
    buttonSlider.current.slickNext()
  }

  return (
    <div>
      <div className="home">
        <p className="home-text1">
          Plan a trip with help from local Hosts around the world
        </p>
        <div className="container">
          <p>Show({count})</p>
          <div className="arrow">
            <div className="home-arrow">
              <RiArrowLeftSLine size={20} onClick={goBack} />
            </div>
            <div className="home-arrow">
              <RiArrowRightSLine size={20} onClick={goNext} />
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings} ref={buttonSlider}>
        {data.map(each => (
          <div key={each.id}>
            <PlacePlate each={each} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlacesTravel
