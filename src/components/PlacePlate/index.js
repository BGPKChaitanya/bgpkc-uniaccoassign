import HoverVideoPlayer from 'react-hover-video-player'
import {AiFillStar} from 'react-icons/ai'

import './index.css'

const PlacePlate = props => {
  const {each} = props
  const {VideoURL, VideoImage, Rating, Views, City, Description, Price} = each

  return (
    <div className="player">
      <HoverVideoPlayer
        videoSrc={VideoURL}
        className="hover-player"
        sizingMode="container"
        pausedOverlay={
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={VideoImage}
            alt="image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
      />
      <div>
        <p className="rating">
          <AiFillStar />
          {Rating}{' '}
          <span className="city">
            ({Views}) . {City}
          </span>
        </p>
        <p className="des">{Description}</p>
        <p className="des">
          <span className="price">From ₹{Price}</span>/person
        </p>
      </div>
    </div>
  )
}

export default PlacePlate
