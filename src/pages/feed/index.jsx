import { Post } from "../../components/post";
import { UserRanking } from "../../components/user-ranking";
import { Container, ContainerLeft, ContainerRight } from "./style";

export const Feed = () => {
  const username = localStorage.getItem("username");

  return (
    <Container>
      <ContainerLeft>
        <h2>Feed</h2>
        <Post />
        <Post />
      </ContainerLeft>
      <ContainerRight>
        <h2>#RANKING TOP 5 DA SEMANA</h2>
        <UserRanking user={username} progress={90} />
        <UserRanking user={username} progress={80} />
        <UserRanking user={username} progress={60} />
        <UserRanking user={username} progress={40} />
      </ContainerRight>
    </Container>
  );
};
