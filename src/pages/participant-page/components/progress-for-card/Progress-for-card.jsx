import styled from "styled-components";
import { Progress } from "../../../../components/ProgressBars/Progress";
const ProgressForCardConteiner = ({ className }) => {
  return (
    <div className={className}>
      <div className="progress-info">
        <Progress />
      </div>
    </div>
  );
};

export const ProgressForCard = styled(ProgressForCardConteiner)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 20px;
  width: 900px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & .progress-info {
    display: flex;
    justify-content: space-between;
    
  }

  & .progress-info > div {
    display: flex;
    justify-content:space-between;
    max-width: 90%;
    margin: 0 10px;
    padding: 10px 20px;
    background: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    width: 100%;
  }
`;
