import styled from "styled-components";
import { DevelopmentInfo, MainInfo, ProgressForCard } from "./components";

const ParticipantPageContainer = ({ className }) => {
  return (
    <div className={className}>
      <MainInfo />
      <ProgressForCard />
      <DevelopmentInfo />
    </div>
  );
};

export const ParticipantPage = styled(ParticipantPageContainer)`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-top: 20px;
`;
