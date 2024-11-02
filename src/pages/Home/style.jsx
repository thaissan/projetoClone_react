import styled from "styled-components";
import Divider from "@mui/material/Divider";

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
  cursor: pointer;

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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StreamCard = styled.div`
  flex: 1 30rem;
  max-width: 340px;
  padding: 0;

  img {
    width: 340px;
    height: 190px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    &:hover {
      transform: scale(1.03);
      box-shadow: -4px 4px 0 0 #7f5eea, 0 4px 0 0 #7f5eea;
    }
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

export const CustomDivider = styled(Divider)`
  color: #7135cc;
  font-weight: bold;
  font-size: small;
  cursor: pointer;
`;
