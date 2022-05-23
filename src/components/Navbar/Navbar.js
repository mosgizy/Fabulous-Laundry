import React,{useState} from 'react'
import { Header,
  NavBar,
  Logo,
  Hamburger,
  NavMenu,
  StyledFontAwesome,
  MakeAppointment,
  CallUs,
Unorder,
Icon,
List } from '../../styledComponents/navStyle'
import { Link } from '../../styledComponents/GlobalStyle'
import laundry from '../../assets/laundry-icon.png'
import { faHamburger,faPhone,faXmark } from '@fortawesome/free-solid-svg-icons'
import ScrollTo from '../../scrollHook'


const Navbar = () => {
  const [toggle,setToggle] = useState()

  const showMenu = () => {
    setToggle("display")
  }

  const hideMenu = () => {
    setToggle("")
  }

  const handleNav = (id) => {
    ScrollTo(id)
    setToggle("")
  }

  return (
    <Header>
        <NavBar>
            <Logo>
                <Icon src={laundry} alt="icon" loading='lazy'/>
                <NavMenu display={toggle}>
                  <StyledFontAwesome close icon={faXmark} onClick={() => hideMenu()} />
                  <Unorder>
                    <List onClick={() => handleNav("home")}><Link>home</Link></List>
                    <List onClick={() => handleNav("about")}><Link>about</Link></List>
                    <List onClick={() => handleNav("services")}><Link>services</Link></List>
                    <List onClick={() => handleNav("contact")}><Link>contact</Link></List>
                  </Unorder>
                </NavMenu>
            </Logo>
            <Hamburger>
              <StyledFontAwesome logo icon={faHamburger} onClick={() => showMenu()} />
              <MakeAppointment>
                  <StyledFontAwesome icon={faPhone} /> (+234) 814 880 1472
                  <CallUs>Make an Appointment</CallUs>
              </MakeAppointment>
            </Hamburger>
        </NavBar>
    </Header>
  )
}

export default Navbar