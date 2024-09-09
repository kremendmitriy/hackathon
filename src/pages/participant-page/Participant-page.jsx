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
         <MainInfo
            id={user.id}
            role={user.role}
            imageUrl={user.imageUrl}
            userName={user.userName}
            age={user.age}
            aboutUser={user.aboutUser}
         />
         <ProgressForCard />
         <DevelopmentInfo data={developmentData} />
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
