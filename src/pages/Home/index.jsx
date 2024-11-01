import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { PiCrownSimpleBold } from "react-icons/pi";
import { GrInbox } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBatteryCharging } from "react-icons/ci";
import {Container, Header, Navbar, Search, IconsContainer, UserIcon,
  Sidebar, SidebarDivs, ChannelList, ChannelItem, RedCircle
} from './style'
import { TbArrowBarLeft } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";




export const TwitchHome = () => {

  const followedChannels = [
    { id: 1, name: 'casimito', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png', status: 'Offline' },
    { id: 2, name: 'Gaules', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-70x70.png', status: 'Offline' }
  ];

  const recommendedChannels = [
    { id: 1, name: 'Ninja', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-70x70.png', viewers: '10mil' },
    { id: 2, name: 'tcK10', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4e24a619-4154-4d58-b8af-fc4dad46d521-profile_image-70x70.png',viewers: '8mil' },
    { id: 3, name: 'Pokimane', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6cd4de40-1a83-46c7-aea5-3bd73f90e7e4-profile_image-70x70.png', viewers: '6mil' },
    { id: 4, name: 'Shroud', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png', viewers: '5mil' },
    { id: 5, name: 'YoDa', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png', viewers: '4mil' },
    { id: 6, name: 'manodeyvin', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/2a0593d4-48f7-4ff2-bf39-c77888227c1b-profile_image-70x70.png', viewers: '4mil' },
  ];

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

      <div style={{ display: 'flex' }}>
        <Sidebar>
          <SidebarDivs>
            <h4>Para você</h4>
            <TbArrowBarLeft />
          </SidebarDivs>

          <SidebarDivs style={{paddingTop: 10}}>
            <span id="titleFollowed">CANAIS SEGUIDOS</span>
            <LuArrowDownUp />
          </SidebarDivs>
          <ChannelList>
            {followedChannels.map(channel => (
              <ChannelItem key={channel.id}>
                <img src={channel.img} alt={channel.name} />
                <SidebarDivs>
                  <p>{channel.name}</p>
                  <small>{channel.status}</small>
                </SidebarDivs>
              </ChannelItem>
            ))}
          </ChannelList>

          <SidebarDivs style={{paddingTop: 10}}>
            <span id="titleRecommended">CANAIS RECOMENDADOS</span>
            <LuArrowDownUp />
          </SidebarDivs>
          <ChannelList>
            {recommendedChannels.map(channel => (
              <ChannelItem key={channel.id}>
                <img src={channel.img} alt={channel.name} />
                <SidebarDivs>
                  <p>{channel.name}</p>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                  <RedCircle> </RedCircle>
                  <small>{channel.viewers}</small>  
                  </div>
                </SidebarDivs>
              </ChannelItem>
            ))}
            <a href="#">Mostrar mais</a>
          </ChannelList>
        </Sidebar>

      </div>

    </Container>
    )
}