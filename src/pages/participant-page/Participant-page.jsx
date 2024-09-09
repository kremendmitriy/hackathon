import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { DevelopmentInfo, MainInfo, ProgressForCard } from './components';
import userData from '../../../db.json';

const ParticipantPageContainer = ({ className }) => {
   const { id } = useParams();
   const user = userData.users.find((user) => user.id === parseInt(id));

   if (!user) {
      return <div>Пользователь не найден</div>;
   }
   const developmentData = {
      tasks: user.tasks,
   };

   return (
      <div className={className}>
         <MainInfo user={user} />
         <ProgressForCard userSkills={user.skills} />
         <DevelopmentInfo data={developmentData} />
      </div>
   );
};

export const ParticipantPage = styled(ParticipantPageContainer)`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
`;
