import {
  Container,
  Sidebar,
  SidebarDivs,
  ChannelList,
  ChannelItem,
  MainContainer,
  LiveOnline,
  StreamLayout,
  StreamCard,
} from "./style";
import { HeaderComponent } from "../../components/HeaderComponent";
import { RedCircle } from "../../components/RedCircle";
import { UserProfile } from "../../components/UserProfile";
import { TbArrowBarLeft } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";

export const TwitchHome = () => {
  const followedChannels = [
    {
      id: 1,
      name: "casimito",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png",
      status: "Offline",
    },
    {
      id: 2,
      name: "Gaules",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-70x70.png",
      status: "Offline",
    },
  ];

  const recommendedChannels = [
    {
      id: 1,
      name: "Ninja",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-70x70.png",
      viewers: "10mil",
    },
    {
      id: 2,
      name: "tcK10",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/4e24a619-4154-4d58-b8af-fc4dad46d521-profile_image-70x70.png",
      viewers: "8mil",
    },
    {
      id: 3,
      name: "Pokimane",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/6cd4de40-1a83-46c7-aea5-3bd73f90e7e4-profile_image-70x70.png",
      viewers: "6mil",
    },
    {
      id: 4,
      name: "Shroud",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png",
      viewers: "5mil",
    },
    {
      id: 5,
      name: "YoDa",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png",
      viewers: "4mil",
    },
    {
      id: 6,
      name: "manodeyvin",
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/2a0593d4-48f7-4ff2-bf39-c77888227c1b-profile_image-70x70.png",
      viewers: "4mil",
    },
  ];

  const recommendedStreams = [
    {
      id: 1,
      img: "https://i.imgur.com/9CeyaUI.png",
      title: "HALLOWEEN - TERRORIZINHO JA...",
      streamer: "alanzoka",
      game: "Red Dead Redemption",
      viewers: "13,4 mil",
      tags: ["Gostoso", "Idoso", "Português"],
    },
    {
      id: 2,
      img: "https://i.imgur.com/9CeyaUI.png",
      title: "NOITE DO TERROR - JOGANDO PHASMOPHOBIA",
      streamer: "felipehmc",
      game: "Phasmophobia",
      viewers: "8,2 mil",
      tags: ["Terror", "Co-op", "Inglês"],
    },
    {
      id: 3,
      img: "https://i.imgur.com/9CeyaUI.png",
      title: "MARATONA DE FORTNITE - DESAFIOS INSANOS",
      streamer: "gaules",
      game: "Fortnite",
      viewers: "20,1 mil",
      tags: ["Competitivo", "Battle Royale", "Português"],
    },
    {
      id: 4,
      img: "https://i.imgur.com/9CeyaUI.png",
      title: 'RETRO GAMING - CLASSICOS DOS ANOS 90',
      streamer: 't3ddy',
      game: 'Super Mario 64',
      viewers: '5,7 mil',
      tags: ['Nostalgia', 'Single Player', 'Português'],
    }
  ];

  return (
    <Container>
      <HeaderComponent />
      <div style={{ display: "flex" }}>
        <Sidebar>
          <SidebarDivs>
            <h4>Para você</h4>
            <TbArrowBarLeft />
          </SidebarDivs>

          <SidebarDivs style={{ paddingTop: 10 }}>
            <span id="titleFollowed">CANAIS SEGUIDOS</span>
            <LuArrowDownUp />
          </SidebarDivs>
          <ChannelList>
            {followedChannels.map((channel) => (
              <ChannelItem key={channel.id}>
                <UserProfile imgSrc={channel.img} altText={channel.name} />
                <SidebarDivs>
                  <p>{channel.name}</p>
                  <small>{channel.status}</small>
                </SidebarDivs>
              </ChannelItem>
            ))}
          </ChannelList>

          <SidebarDivs style={{ paddingTop: 10 }}>
            <span id="titleRecommended">CANAIS RECOMENDADOS</span>
            <LuArrowDownUp />
          </SidebarDivs>
          <ChannelList>
            {recommendedChannels.map((channel) => (
              <ChannelItem key={channel.id}>
                <UserProfile imgSrc={channel.img} altText={channel.name} />
                <SidebarDivs>
                  <p>{channel.name}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <RedCircle> </RedCircle>
                    <small>{channel.viewers}</small>
                  </div>
                </SidebarDivs>
              </ChannelItem>
            ))}
            <a href="#">Mostrar mais</a>
          </ChannelList>
        </Sidebar>

        <MainContainer>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}> 
            <img style={{maxWidth: 1080}} src="https://imgur.com/LpZpcLQ.png" alt="" />  
          </div>

          <h3 style={{ color: "#7C34E9", display: "inline" }}>
            Canais ao vivo{" "}
          </h3>
          <h3 style={{ display: "inline" }}>que achamos que você vai gostar</h3>
          <StreamLayout>
            {recommendedStreams.map((stream) => (
              <StreamCard key={stream.id}>
                <div style={{ position: "relative" }}>
                  <img src={stream.img} alt={stream.title} />
                </div>
                <LiveOnline>AO VIVO</LiveOnline>
                <h3>{stream.title}</h3>
                <p>{stream.streamer}</p>
                <p>{stream.game}</p>
                <p>{stream.viewers} espectadores</p>
                <div>
                  {stream.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        marginRight: "8px",
                        fontSize: "12px",
                        background: "#e5e5e5",
                        padding: "2px 8px",
                        borderRadius: "12px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </StreamCard>
            ))}
          </StreamLayout>
        </MainContainer>
      </div>
    </Container>
  );
};
