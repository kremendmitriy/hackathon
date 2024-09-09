import {
   HomePage,
   ParticipantsPage,
   ParticipantPage,
   FavoritesPage,
} from './pages';
import { Navigation } from './components/Navbar';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { BreadcrumbsComponent } from './components/Breadcrumbs';

function App() {
   return (
      <MainContainer>
         <Navigation />
         <Content>
            <BreadcrumbsComponent />
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
   height: 100vh; // Убедитесь, что контейнер занимает всю высоту
`;

const Content = styled.div`
   margin-left: 300px;

   width: calc(100% - 300px);
   background-color: #f8f8f8;
   overflow-y: auto;
`;
