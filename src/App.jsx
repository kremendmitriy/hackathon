import { Routes, Route } from 'react-router-dom';
import { HomePage, ParticipantsPage } from './pages';
import styled from '@emotion/styled';
import { Navigation } from './components/Navbar';

const MainContainer = styled.div`
   display: flex;
`;

const Content = styled.div`
   margin-left: 200px;
   padding: 20px;
`;

function App() {
   return (
      <MainContainer>
         <Navigation />
         <Content>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cards" element={<ParticipantsPage />} />
               <Route path="/cards/favorites" element={<h1>Favorites</h1>} />
               <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
         </Content>
      </MainContainer>
   );
}
export default App;
