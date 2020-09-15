// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ContainerStyles = css`
  display: inline-block;
  background-color: #ddd;
  border-radius: 50px;
  padding: 50px;
`;

const AvatarStyles = css`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;

const UsernameStyles = css`
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 2rem;
`;

export default function EmotionProfile({ user }) {
  return (
    <div css={ContainerStyles}>
      <img css={AvatarStyles} src={user.avatar} alt="" />
      <div css={UsernameStyles}>
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}
