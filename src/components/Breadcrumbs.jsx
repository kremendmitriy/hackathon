/** @jsxImportSource @emotion/react */
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

export const BreadcrumbsComponent = () => {
   const location = useLocation();
   const pathnames = location.pathname.split('/').filter((x) => x);

   return (
      <Breadcrumbs aria-label="breadcrumb">
         <Link component={RouterLink} to="/" color="inherit">
            Home
         </Link>
         {pathnames.map((name, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
               <Typography color="textPrimary" key={to}>
                  {name}
               </Typography>
            ) : (
               <Link component={RouterLink} to={to} color="inherit" key={to}>
                  {name}
               </Link>
            );
         })}
      </Breadcrumbs>
   );
};
