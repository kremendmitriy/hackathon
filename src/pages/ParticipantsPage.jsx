import { useState } from 'react';
import { Card } from '../components/Card';
import userData from '../../db.json';
import styled from '@emotion/styled';

const ParticipantsPageContainer = ({ className }) => {
   const [favorites, setFavorites] = useState(() => {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
   });
   const users = userData.users;

   const toggleFavorite = (id) => {
      let updatedFavorites;
      if (favorites.includes(id)) {
         updatedFavorites = favorites.filter((favId) => favId !== id);
      } else {
         updatedFavorites = [...favorites, id];
      }

      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
   };

   return (
      <div className={className}>
         <div className="cards-container">
            {users.map((user) => (
               <Card
                  key={user.id}
                  id={user.id}
                  userName={user.userName}
                  title={user.title}
                  imageUrl={user.imageUrl}
                  role={user.role}
                  isFavorite={favorites.includes(user.id)}
                  onToggleFavorite={toggleFavorite}
               />
            ))}
         </div>
      </div>
   );
};

export const ParticipantsPage = styled(ParticipantsPageContainer)`
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   & .cards-container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 20px 80px;
   }
`;
