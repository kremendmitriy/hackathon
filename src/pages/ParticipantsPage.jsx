/** @jsxImportSource @emotion/react */

import userData from "../../db.json";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "@emotion/styled";

const ParticipantsPageContainer = ({ className }) => {
  const users = userData.users;

  return (
    <div className={className}>
      <div className="cards-container">
        {users.map(({ id, title, userName, imageUrl, role }) => (
          <div className="cards" key={id}>
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
              <FavoriteBorderIcon />
                {(role === "teamlead" && <div className="bages-teamlead">#TeamLead </div>) ||
                  (role === "student" && <div className="bages-student">#Student </div>) ||
                  (role === "npc" && <div className="bages-npc">#NPC </div>)}
                
              </div>
            </div>
            <div className="post-card-info">{title}</div>
          </div>
        ))}

export const ParticipantsPage = styled(ParticipantsPageContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
      transform: translateY(-3px); /* Кнопка поднимется на 3px при наведении */
    }

    &:focus {
      outline: none;
    }
  }

  & .cards-container {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 80px;
  }

  & .cards {
    width: 400px;
    padding: 20px;
    margin: 20px 15px;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
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

  & .bages-teamlead {
   padding: 5px;
   border-radius: 5px;
   background-color: #f1a6a6
  }
  & .bages-student {
   padding: 5px;
   border-radius: 5px;
   background-color: #a1eead
  }
  & .bages-npc {
   padding: 5px;
   border-radius: 5px;
   background-color: #9d9d9d
  }
`;
