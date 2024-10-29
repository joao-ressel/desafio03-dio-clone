import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(0.99);
  }
  .img {
    height: 160px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    background: url("https://ecronicon.net/techblog/articles/fb-login/img/facebook-login.png")
      no-repeat center/100%;
  }

  .legend {
    width: calc(100% -1rem);
    height: 160px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #3b4651;
    border-radius: 0 0 8px 8px;
    .profile {
      display: flex;
      gap: 1rem;

      img {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        border: 2px solid #fff;
      }
      .name-hour {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 1.2rem;
          font-weight: 700;
        }
        p {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
    span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
    .title-description {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
  }
`;
