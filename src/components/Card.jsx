import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardContainerNew = ({
   className,
   id,
   userName,
   title,
   imageUrl,
   role,
   isFavorite,
   onToggleFavorite,
}) => {
   return (
      <div className={className}>
         <div className="cards">
            <div className="card-info">
               <img src={imageUrl} alt={userName} />
               <div className="name-and-button">
                  <h2>{userName}</h2>
                  <Link to={`/cards/${id}`}>
                     <Button borderRadius="5px" backgroundColor="#eb465f">
                        Перейти к карточке
                     </Button>
                  </Link>
               </div>
               <div className="bages">
                  <div onClick={() => onToggleFavorite(id)}>
                     <FavoriteBorderIcon
                        style={{
                           color: isFavorite ? 'red' : 'inherit',
                           cursor: 'pointer',
                        }}
                     />
                  </div>
                  <Badge role={role} />
               </div>
            </div>
            <div className="post-card-info">{title}</div>
         </div>
      </div>
   );
};

export const Card = styled(CardContainerNew)`
   & a {
      text-decoration: none;
      color: #ddd;
      height: 80%;
   }

   & button {
      margin-top: 20px;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
         transform: translateY(-3px);
      }

      &:focus {
         outline: none;
      }
   }

   & .cards {
      width: 500px;
      padding: 20px;
      min-height: 190px;
      margin: 20px 15px;
      border-radius: 8px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
      background-color: #d3d3d3;
   }

   & .card-info {
      display: flex;
      justify-content: space-between;
      width: auto;
      padding: 10px;
   }

   & img {
      width: 100px;
      height: 100px;
   }

   & h2 {
      margin: 10px 0;
      font-size: 20px;
   }

   & .post-card-info {
      padding: 10px 0 0;
      font-size: 18px;
      text-align: center;
   }
`;
