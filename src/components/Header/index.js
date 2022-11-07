import {useState} from 'react'
import {Button} from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import {Link} from 'react-router-dom'
import {BiGlobe} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import './index.css'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1667665597/Airbnb_Logo_dpe07y.png"
            alt="airbnb logo"
            className="header-logo"
          />
        </Link>
        <div className="header-profile">
          <p className="header-become">Become a host</p>
          <div className="header-become">
            <BiGlobe size={20} />
          </div>

          <Button
            style={{
              borderRadius: '25px',
              border: '1px solid rgba(205, 208, 208, 0.778)',
            }}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <GiHamburgerMenu size={20} style={{color: 'grey', margin: '8px'}} />
            <FaUserCircle size={32} style={{color: 'grey'}} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Sign up</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Host your home</MenuItem>
            <MenuItem onClick={handleClose}>Host an experience</MenuItem>
            <MenuItem onClick={handleClose}>Help</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
