import { useParams } from 'react-router-dom';
import { DevelopmentInfo, MainInfo, ProgressForCard } from './components';
import { SliderWithText } from '../../components/SliderWithText';
import userData from '../../../db.json';
import styled from 'styled-components';

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
         <SliderWithText
            textContent={user.projectDescription}
            projectsImg={user.projects}
         />
      </div>
   );
};

export const ParticipantPage = styled(ParticipantPageContainer)`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
`;
