import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { PiCrownSimpleBold } from "react-icons/pi";
import { GrInbox } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBatteryCharging } from "react-icons/ci";
import {Container, Header, Navbar, Search, IconsContainer, UserIcon} from './style'


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
          <BsSearch style={{ 
            background: '#F7F7F8', 
            padding: '0.5rem', 
            borderRadius: '0 5px 5px 0'}}
            size={20}/>
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
          <UserIcon>
          <img src="src/assets/abigail.jpg" alt="Icone perfil" />
          </UserIcon>
        </IconsContainer>
      </Header>

    </Container>
    )
}