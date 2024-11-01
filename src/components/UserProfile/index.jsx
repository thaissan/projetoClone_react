/* eslint-disable react/prop-types */
import { UserIcon } from "./style";

export const UserProfile = ({ imgSrc, altText }) => {
  return (
    <UserIcon>
      <img src={imgSrc} alt={altText} />
    </UserIcon>
  );
};

export default UserProfile;
