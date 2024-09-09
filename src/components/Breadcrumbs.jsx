/** @jsxImportSource @emotion/react */
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

export const BreadcrumbsComponent = () => {
   const location = useLocation();
   const pathnames = location.pathname.split('/').filter((x) => x);

   const knownRoutes = ['/', '/cards', '/cards/favorites', '/cards/:id'];

   const isValidPath = () => {
      const fullPath = `/${pathnames.join('/')}`;
      if (pathnames.length === 2 && !isNaN(pathnames[1])) {
         return true;
      }

      return knownRoutes.some((route) => {
         if (
            route === '/cards/:id' &&
            pathnames.length === 2 &&
            !isNaN(pathnames[1])
         ) {
            return true;
         }
         return fullPath === route;
      });
   };

   const breadcrumbsContent = isValidPath() ? (
      pathnames.map((name, index) => {
         const to = `/${pathnames.slice(0, index + 1).join('/')}`;
         return index === pathnames.length - 1 ? (
            <Typography color="textPrimary" key={to}>
               {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
         ) : (
            <Link component={RouterLink} to={to} color="inherit" key={to}>
               {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
         );
      })
   ) : (
      <Typography color="textPrimary">404</Typography>
   );

   return (
      <Breadcrumbs aria-label="breadcrumb">
         <Link component={RouterLink} to="/" color="inherit">
            Home
         </Link>
         {breadcrumbsContent}
      </Breadcrumbs>
   );
};
