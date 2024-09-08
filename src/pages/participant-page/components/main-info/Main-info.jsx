import styled from "styled-components";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
const MainInfoContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="image">
        <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
        <div className="network">
          <TelegramIcon />
          <GitHubIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="main-info">
        <div className="name">Заголовок: Имя Фамилия</div>
        <div className="icon"></div>
        <div className="age">Возраст: Возраст</div>
        <div className="about">
          О себе: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt id, tempora quod deserunt, omnis minus assumenda voluptates
          ducimus facilis necessitatibus tenetur asperiores, vero sed voluptate
          eveniet ea dolorum tempore beatae. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ex officiis aspernatur beatae itaque
          dolore aliquam aperiam illum possimus sunt earum!
        </div>
        <div className="progress-bar">шкала прогресса</div>
      </div>
    </div>
  );
};

export const MainInfo = styled(MainInfoContainer)`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 40px 20px;
  max-width: 900px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & .image {
    flex: 0 0 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 10px;
      border: 1px solid #ddd;
    }
  }

  & .network {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: #454545;

    & > * {
      margin-right: 15px;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }

  & .main-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow */
  }

  & .name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & .age {
    font-size: 16px;
    margin-bottom: 10px;
  }

  & .about {
    font-size: 14px;
    margin-bottom: 20px;
  }

  & .progress-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 20px;
    border: 1px solid #b32828;
    border-radius: 10px;
    background-color: #d96868;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
    text-align: center;
    color: #fff;
  }
`;
