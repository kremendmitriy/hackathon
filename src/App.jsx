import { Routes, Route } from 'react-router-dom';
import {
   HomePage,
   ParticipantsPage,
   ParticipantPage,
   FavoritesPage,
   NotFound,
} from './pages';
import { Navigation } from './components/Navbar';
import { BreadcrumbsComponent } from './components/Breadcrumbs';
import './App.css';
import styled from '@emotion/styled';

const App = () => {
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
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Content>
      </MainContainer>
   );
}
export default App;

const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   overflow: hidden;
`;

const Content = styled.div`
   margin-left: 300px;

   width: calc(100% - 300px);
   background-color: #f8f8f8;
   overflow-y: auto;
`;
