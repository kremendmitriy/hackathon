import styled from 'styled-components';

const DevelopmentInfoContainer = ({ className, data }) => {
   const { tasks } = data;
   return (
      <div className={className}>
         <div className="main-info">
            <div className="what-you-do">Что было сделано мной в проекте? </div>
            <div className="tasks">{tasks}</div>
         </div>
      </div>
   );
};

export const DevelopmentInfo = styled(DevelopmentInfoContainer)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 40px 30px;
   width: 100%;
   max-width: 1000px;
   background: #2c2c2c;
   border-radius: 12px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
   margin: 40px auto;
   border: 1px solid #444;

   & .main-info {
      flex: 1;
      background: #3b3b3b;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      border: 1px solid #555;
   }

   & .what-you-do {
      font-size: 26px;
      font-weight: bold;
      color: #f1f1f1;
      letter-spacing: 1px;
   }

   & .tasks {
      font-size: 18px;
      color: #ddd;
      line-height: 1.6;
   }

   & .image {
      flex: 0 0 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
      background: #444;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      padding: 20px;
   }

   &:hover {
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
      transform: translateY(-5px);
      transition: all 0.3s ease;
   }
`;
