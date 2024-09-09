import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Navigation = () => {
   return (
      <Sidebar>
         <NavList>
            <NavItem>
               <StyledLink to="/" end>
                  Home
               </StyledLink>
            </NavItem>
            <NavItem>
               <StyledLink to="/cards">Cards</StyledLink>
            </NavItem>
            <NavItem>
               <StyledLink to="/cards/favorites">Favorites</StyledLink>
            </NavItem>
         </NavList>
      </Sidebar>
   );
};

const Sidebar = styled.div`
   width: 220px;
   height: 100vh;
   background: #2f2f2f; // Темный серый цвет
   padding: 20px;
   box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
   position: fixed;
   left: 0;
   top: 0;
   display: flex;
   flex-direction: column;
   gap: 20px;
   border-radius: 0 15px 15px 0;
`;

const NavList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
`;

const NavItem = styled.li`
   margin: 10px 0;
`;

const StyledLink = styled(NavLink)`
   text-decoration: none;
   color: #e0e0e0; // Светло-серый цвет для текста
   font-size: 16px;
   font-weight: 500;
   padding: 10px 15px;
   border-radius: 5px;
   display: block;
   transition: background-color 0.3s ease, color 0.3s ease;

   &.active {
      background-color: #555555;
      color: #ffffff;
   }

   &:hover {
      background-color: #444444;
      color: #ffffff;
   }
`;
