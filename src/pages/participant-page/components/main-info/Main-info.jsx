import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Badge } from '../../../../components/Badge';
import { TotalDeveloperProgress } from '../../../../components/ProgressBars/TotalDevProgress';
const MainInfoContainer = ({ className, user }) => {
   return (
      <div className={className}>
         <div className="image">
            <img src={user.imageUrl} />
            <div className="network">
               <a href="https://www.telegram.com/yourprofile">
                  <TelegramIcon />
               </a>
               <a href="https://github.com/yourprofile">
                  <GitHubIcon />
               </a>
               <a href="https://www.instagram.com/yourprofile">
                  <InstagramIcon />
               </a>
            </div>
         </div>
         <div className="main-info">
            <Badge role={user.role} />
            <div className="name">{user.userName}</div>
            <div className="icon"></div>
            <div className="age">Возраст: {user.age}</div>
            <div className="about">
               О себе: <br />
               {user.aboutUser}
            </div>
            <div className="progress-bar">
               <TotalDeveloperProgress skillsData={user.skills} />
            </div>
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

      & > * {
         margin-right: 15px;
      }

      & > *:last-child {
         margin-right: 0;
      }

      & > a {
         text-decoration: none;
         color: #454545;
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
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
   }

   & .age {
      font-size: 18px;
      margin-bottom: 10px;
   }

   & .about {
      font-size: 18px;
      margin-bottom: 22px;
   }

   & .progress-bar {
      display: flex;
      align-items: center;
      font-size: 21px;
      width: 95%;
      height: 20px;
      padding: 0 10px;
   }
`;
