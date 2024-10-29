import { PostContainer } from "./style";

export const Post = () => {
  return (
    <PostContainer>
      <div className="img" />
      <div className="legend">
        <div className="profile">
          <img src="https://github.com/joao-ressel.png" alt="" />
          <div className="name-hour">
            <p className="name">João Carlos Ressel</p>
            <p>Há 8 minutos</p>
          </div>
        </div>
        <div className="title-description">
          <h3>Projeto para curso de HTML e CSS</h3>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais
          </p>
        </div>
        <span>#HTML #CSS #Javascript</span>
      </div>
    </PostContainer>
  );
};
