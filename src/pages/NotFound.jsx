import { styled } from '@mui/material';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const NotFoundContainer = ({ className }) => {
   return (
      <div className={className}>
         <div className="title">
            <h1 className="text-center">404</h1>
         </div>
         <div className="image-and-text">
            <div className="image"></div>
            <div className="text">
               <h2>Что то пошло не так</h2>
               <p>Такой страницы не существует</p>
            </div>
         </div>
         <div className="button">
            <Button
               borderRadius="5px"
               backgroundColor="#39ac31"
               className="link-404"
            >
               <Link to="/">На главную</Link>
            </Button>
         </div>
      </div>
   );
};

export const NotFound = styled(NotFoundContainer)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 90vh;
   width: 96%;
   text-align: center;
   position: relative;

   a {
      color: #fdfdfd;
      text-decoration: none;
   }

   & .title {
      position: fixed;
      top: -10px;
      margin-top: 0;
      z-index: 1000;
   }
   & .image-and-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 100%;
   }

   & .image {
      background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
      width: 100%;
      height: 400px;
      background-position: center;
      background-size: cover;
      margin: 20px 0 0 0;
      border-radius: 10px;
      border: 1px solid #efefef;
   }

   & h1 {
      font-size: 50px;
   }

   & h2 {
      font-size: 36px;
   }
   & p {
      font-size: 18px;
      margin: 0;
   }
   & .button {
      margin-top: 20px;
   }
`;
