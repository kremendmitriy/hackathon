import { Routes, Route } from 'react-router-dom';
import { HomePage, ParticipantsPage, ParticipantPage } from './pages';

import styled from '@emotion/styled';
import { Navigation } from './components/Navbar';
import './App.css';

const MainContainer = styled.div`
   display: flex;
   min-height: 100vh;
   background-color: #f9f9f9;
`;

const NavigationContainer = styled.div`
   width: 220px;
   background-color: #fff;
   display: flex;
   flex-direction: column;
`;
const Content = styled.div`
   flex-grow: 1;
`;

function App() {
   return (
      <MainContainer>
         <NavigationContainer>
            <Navigation />
         </NavigationContainer>
         <Content>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/cards" element={<ParticipantsPage />} />
               <Route path="/cards/favorites" element={<h1>Favorites</h1>} />
               <Route path="/cards/page" element={<ParticipantPage />} />
               <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
         </Content>
      </MainContainer>
   );
}
export default App;
