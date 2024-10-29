import Button from "../../components/button";
import imgHome from "../../assets/image-home.png";
import { Container, ContainerLeft } from "./style";

export const Home = () => {
  return (
    <Container>
      <ContainerLeft>
        <div className="text">
          <h1>
            <span>Implemente</span>
            <br />o seu futuro global
            <br /> agora!
          </h1>
          <p>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu
            novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </p>
        </div>
        <Button>Começar agora</Button>
      </ContainerLeft>
      <img src={imgHome} alt="" />
    </Container>
  );
};
