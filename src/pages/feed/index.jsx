import { Post } from "../../components/post";
import { UserRanking } from "../../components/user-ranking";
import { Container, ContainerLeft, ContainerRight } from "./style";

export const Feed = () => {
  return (
    <Container>
      <ContainerLeft>
        <h2>Feed</h2>
        <Post />
        <Post />
      </ContainerLeft>
      <ContainerRight>
        <h2>#RANKING TOP 5 DA SEMANA</h2>
        <UserRanking progress={90} />
        <UserRanking progress={80} />
        <UserRanking progress={60} />
        <UserRanking progress={40} />
      </ContainerRight>
    </Container>
  );
};
