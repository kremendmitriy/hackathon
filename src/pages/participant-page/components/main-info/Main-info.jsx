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

   justify-content: space-between;
   padding: 50px 30px;
   max-width: 1000px;
   background: #2c2c2c;
   border-radius: 12px;
   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
   border: 1px solid #3a3a3a;

   & .image {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 30px;

      img {
         width: 260px;
         height: 260px;
         object-fit: cover;
         border-radius: 12px;
         border: 2px solid #444;
         box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7);
      }
   }

   & .network {
      display: flex;
      justify-content: center;
      margin-top: 15px;

      & > * {
         margin-right: 20px;
         font-size: 32px;
         color: #f1f1f1;
         transition: color 0.3s ease;
      }

      & > *:last-child {
         margin-right: 0;
      }

      & > a:hover {
         color: #d4af37;
      }
   }

   & .main-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      padding: 25px;
      background: #3b3b3b;
      box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.4);
      color: #f1f1f1;
      border: 1px solid #444;
   }

   & .name {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #d4af37;
      text-transform: uppercase;
      letter-spacing: 1px;
   }

   & .age {
      font-size: 20px;
      margin-bottom: 15px;
      color: #f1f1f1;
   }

   & .about {
      font-size: 20px;
      margin-bottom: 25px;
      line-height: 1.6;
      color: #e0e0e0;
   }

   & .progress-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10px 0;
      background: #4c4c4c;
      border-radius: 10px;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5);
   }

   & .progress-bar:hover {
      background: #5a5a5a;
      box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.7);
   }
`;
