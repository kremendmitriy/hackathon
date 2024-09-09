import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import userData from '../../db.json';
import styled from '@emotion/styled';

const FavoritesPageContainer = ({ className }) => {
   const [favoriteUsers, setFavoriteUsers] = useState([]);

   useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const favoriteCards = userData.users.filter((user) =>
         favorites.includes(user.id)
      );
      setFavoriteUsers(favoriteCards);
   }, []);

   const toggleFavorite = (id) => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let updatedFavorites;

      if (favorites.includes(id)) {
         updatedFavorites = favorites.filter((favId) => favId !== id);
      } else {
         updatedFavorites = [...favorites, id];
      }

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      setFavoriteUsers(
         userData.users.filter((user) => updatedFavorites.includes(user.id))
      );
   };

   return (
      <div className={className}>
         <div className="cards-container">
            {favoriteUsers.length === 0 ? (
               <p>Нет избранных карточек</p>
            ) : (
               favoriteUsers.map((favoriteUser) => (
                  <Card
                     key={favoriteUser.id}
                     id={favoriteUser.id}
                     userName={favoriteUser.userName}
                     title={favoriteUser.title}
                     imageUrl={favoriteUser.imageUrl}
                     role={favoriteUser.role}
                     isFavorite={true}
                     onToggleFavorite={toggleFavorite}
                  />
               ))
            )}
         </div>
      </div>
   );
};

export const FavoritesPage = styled(FavoritesPageContainer)`
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   & .cards-container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 20px 80px;
   }
`;
