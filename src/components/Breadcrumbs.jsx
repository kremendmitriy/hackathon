/** @jsxImportSource @emotion/react */
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import userData from '../../db.json';

export const BreadcrumbsComponent = () => {
   const location = useLocation();
   const pathnames = location.pathname.split('/').filter((x) => x);

   const getUserNameById = (id) => {
      const user = userData.users.find((user) => user.id === parseInt(id));
      return user ? user.userName : id;
   };

   return (
      <Breadcrumbs aria-label="breadcrumb">
         <Link component={RouterLink} to="/" color="inherit">
            Home
         </Link>
         {pathnames.map((name, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            const displayName =
               last && pathnames[index] && !isNaN(pathnames[index])
                  ? getUserNameById(pathnames[index])
                  : name.charAt(0).toUpperCase() + name.slice(1);

            return last ? (
               <Typography color="textPrimary" key={to}>
                  {displayName}
               </Typography>
            ) : (
               <Link component={RouterLink} to={to} color="inherit" key={to}>
                  {displayName}
               </Link>
            );
         })}
      </Breadcrumbs>
   );
};
