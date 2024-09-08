/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
   width: 180px;
   height: 100vh;
   background-color: #f4f4f4;
   padding: 20px;
   box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
   position: fixed;
   left: 0;
   top: 0;
   display: flex;
   flex-direction: column;
   gap: 15px;
`;
const NavList = styled.ul`
   list-style: none;
   padding: 0;
`;
const NavItem = styled.li`
   a {
      text-decoration: none;
      color: #333;
      &:hover {
         text-decoration: underline;
      }
   }
`;

export const Navigation = () => {
   return (
      <Sidebar>
         <h2>Navigation</h2>
         <NavList>
            <NavItem>
               <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
               <Link to="/cards">Cards</Link>
            </NavItem>
            <NavItem>
               <Link to="/cards/favorites">Favorites</Link>
            </NavItem>
         </NavList>
      </Sidebar>
   );
};
