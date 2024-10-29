import { ContainerProfile, Progress, ProgressBar } from "./style";

// eslint-disable-next-line react/prop-types
export const UserRanking = ({ user, progress }) => {
  return (
    <ContainerProfile>
      <img src={`https://github.com/${user}.png`} alt="" />
      <div>
        <span>{user}</span>
        <ProgressBar>
          <Progress progress={progress}></Progress>
        </ProgressBar>
      </div>
    </ContainerProfile>
  );
};
