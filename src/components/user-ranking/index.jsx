import { ContainerProfile, Progress, ProgressBar } from "./style";

// eslint-disable-next-line react/prop-types
export const UserRanking = ({ progress }) => {
  return (
    <ContainerProfile>
      <img src="https://github.com/joao-ressel.png" alt="" />
      <div>
        <span>João Carlos Ressel</span>
        <ProgressBar>
          <Progress progress={progress}></Progress>
        </ProgressBar>
      </div>
    </ContainerProfile>
  );
};
