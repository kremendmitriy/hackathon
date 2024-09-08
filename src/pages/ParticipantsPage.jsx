/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Content = styled.div`
   padding: 20px;
   background-color: #f9f9f9;
   max-width: 1200px;
   margin: 0 auto;
`;

const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
`;

const Card = styled.div`
   width: 300px;
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   background-color: #fff;
   transition: box-shadow 0.3s ease, transform 0.3s ease;

   &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      transform: translateY(-4px);
   }

   & h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #333;
   }

   & p {
      font-size: 16px;
      color: #666;
      line-height: 1.4;
   }
`;

export const ParticipantsPage = () => {
   return (
      <div>
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
