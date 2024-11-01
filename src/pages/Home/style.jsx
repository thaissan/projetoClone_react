import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0px;
`;

export const Sidebar = styled.aside`
  width: 230px;
  height: 100ch;
  background-color: #efeff1;
  border-right: 1px solid #e5e5e5;
  padding: 9px;
`;

export const SidebarDivs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  #titleFollowed {
    font-weight: 600;
    font-size: smaller;
    color: #8e8e8f;
  }

  #titleRecommended {
    font-weight: 700;
    font-size: smaller;
    color: #000000;
  }
`;

export const ChannelList = styled.div`
  margin-top: 5px;

  a {
    text-decoration: none;
    color: #7f5eea;
    font-size: smaller;
  }
`;

export const ChannelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;

  p {
    font-weight: 600;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const RedCircle = styled.div`
  width: 7px;
  height: 7px;
  background-color: red;
  border-radius: 50%;
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f8;
`;

export const LiveOnline = styled.span`
  background: red;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

export const StreamLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

export const StreamCard = styled.div`
  img {
    width: 300px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin: 8px 0;
    font-size: 14px;
  }

  p {
    color: #666;
    font-size: 12px;
  }
`;

