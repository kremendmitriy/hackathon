/** @jsxImportSource @emotion/react */

import userData from "../../db.json";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "@emotion/styled";
import { Badge } from "./../components/Badge";

const ParticipantsPageContainer = ({ className }) => {
  const users = userData.users;

  return (
    <div className={className}>
      <div className="cards-container">
        {users.map(({ id, title, userName, imageUrl, role, age }) => (
          <div className="cards" key={id}>
            <div className="card-info">
               <div className="image">
                 <img src={imageUrl} alt={userName} /> 
               </div>
              
              <div className="name-and-badge">
                <h2>
                  {userName}, {age}
                </h2>
                <Badge role={role} />
                </div>
                
            </div>
            <div className="post-card-info">{title}</div>
            <div className="button-and-favorite">
            <FavoriteBorderIcon className="favorite-icon" />
                  <Link to={`/cards/${id}`}>
                    <Button borderRadius="5px" backgroundColor="#eb465f">
                      Перейти к карточке
                    </Button>
                  </Link>
                  
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const ParticipantsPage = styled(ParticipantsPageContainer)`
  & a {
    text-decoration: none;
    color: #ddd;
    height: 80%;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    padding: 20px;
    width: 400px;
    padding: 20px;
    margin: 20px 15px;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }

  .card-info {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .card-info img {
    width: 100px;
    height: 100px;
  }
  & h2 {
    margin: 0 10px 0  0;
    font-size: 18px;
  }
  .name-and-badge {
    display: flex;
    margin: 0 0 0 10px;
  }

  .button-and-favorite {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-left: 20px;

    & button {
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
  }

  .favorite-icon {
    width: 50px;
    margin-top: 15px;
    cursor: pointer;
  }

  .post-card-info {
    margin: 5px  0 0 0;
    text-align: left;
    font-size: 18px;
    height: 50px;
  }
`;
