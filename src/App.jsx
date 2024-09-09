import {
   HomePage,
   ParticipantsPage,
   ParticipantPage,
   FavoritesPage,
} from './pages';
import { Navigation } from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

function App() {
   return (
      <MainContainer>
         <Navigation />
         <Content>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cards" element={<ParticipantsPage />} />
               <Route path="/cards/favorites" element={<FavoritesPage />} />
               <Route path="/cards/:id" element={<ParticipantPage />} />
               <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
         </Content>
      </MainContainer>
   );
}
export default App;

const MainContainer = styled.div`
   display: flex;
`;

const Content = styled.div`
   margin-left: 200px;
   padding: 20px;
`;
