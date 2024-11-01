import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { PiCrownSimpleBold } from "react-icons/pi";
import { GrInbox } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBatteryCharging } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import {Container, Header, Navbar, Search, IconsContainer} from './style'


export const TwitchHome = () => {

    return(
    <Container>
      <Header>
        <Navbar>
          <img src="src/assets/glitch_flat_purple.png" alt="TwitchLogo" />
          <span>Seguindo</span>
          <span>Procurar</span>
          <BsThreeDotsVertical />
        </Navbar>
        
        <Search>
          <input type="text" placeholder="Buscar" />
          <BsSearch style={{ marginLeft: '0.5rem'}}/>
        </Search>
        
        <IconsContainer>
          <PiCrownSimpleBold /> 
          <GrInbox />
          <FaRegCommentAlt />
          <img src="src/assets/bits.png" alt="Logo Bits Twitch" />
          <button>
            <CiBatteryCharging style={{ marginRight: '0.2rem', fontSize: '1.2rem' }}/>
            Assista sem anúncios de graça
          </button>
          <HiOutlineUserCircle size={30} />
        </IconsContainer>
      </Header>

    </Container>
    )
}