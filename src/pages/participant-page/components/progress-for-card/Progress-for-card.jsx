import styled from 'styled-components';
import { Progress } from '../../../../components/ProgressBars/Progress';
const ProgressForCardConteiner = ({ className, userSkills }) => {
   return (
      <div className={className}>
         <div className="progress-info">
            <Progress skillsData={userSkills} />
         </div>
      </div>
   );
};

export const ProgressForCard = styled(ProgressForCardConteiner)`
   display: flex;
   flex-direction: column;
   margin-top: 30px;
   padding: 40px 30px;
   width: 100%;
   max-width: 1000px;
   background: #2c2c2c;
   border-radius: 12px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
   border: 1px solid #444;

   & .progress-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
   }

   & .progress-info > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px;
      background: #3b3b3b;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      border: 1px solid #555;
      color: #f1f1f1;
      width: 100%;
   }

   & .progress-info > div span {
      flex: 1;
      text-align: left;
      font-size: 18px;
      letter-spacing: 1px;
   }

   & .progress-info > div .progress-bar {
      flex: 4;
      margin-left: 15px;
      width: 100%;
   }

   & .progress-info > div:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
   }
`;
