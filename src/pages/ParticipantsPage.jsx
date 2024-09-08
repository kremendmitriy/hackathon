/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Navigation } from '../components/Navbar';

const Content = styled.div`
   padding: 20px;
`;
const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
`;
const Card = styled.div`
   width: 200px;
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ParticipantsPage = () => {
   return (
      <div>
         <Navigation />
         <Content>
            <h1>Participants</h1>
            <CardContainer>
               <Card>
                  <h3>Participant 1</h3>
                  <p>Details about participant 1.</p>
               </Card>
               <Card>
                  <h3>Participant 2</h3>
                  <p>Details about participant 2.</p>
               </Card>
               <Card>
                  <h3>Participant 3</h3>
                  <p>Details about participant 3.</p>
               </Card>
               <Card>
                  <h3>Participant 4</h3>
                  <p>Details about participant 3.</p>
               </Card>
               <Card>
                  <h3>Participant 5</h3>
                  <p>Details about participant 3.</p>
               </Card>
               <Card>
                  <h3>Participant 6</h3>
                  <p>Details about participant 3.</p>
               </Card>
            </CardContainer>
         </Content>
      </div>
   );
};
