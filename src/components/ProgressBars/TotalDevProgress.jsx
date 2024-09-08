import styled from 'styled-components';

// TEST DATA
const progressData = [
   { language: 'React', progress: 80 },
   { language: 'JavaScript', progress: 70 },
   { language: 'HTML', progress: 90 },
   { language: 'CSS', progress: 85 },
   { language: 'Next.js', progress: 75 },
];
//

const ProgressContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
`;

const ProgressBarWrapper = styled.div`
   width: 100%;
   height: 12px;
   background-color: #e0e0e0;
   border-radius: 6px;
   overflow: hidden;
`;

const ProgressBar = styled.div`
   width: ${({ progress }) => progress}%;
   height: 100%;
   background-color: #4caf50;
   border-radius: 6px;
`;

const ProgressText = styled.span`
   font-size: 12px;
   color: #333;
   margin-top: 6px;
`;

export const TotalDeveloperProgress = () => {
   const totalProgress = progressData.reduce(
      (acc, item) => acc + item.progress,
      0
   );
   const averageProgress = Math.round(totalProgress / progressData.length);

   return (
      <ProgressContainer>
         <ProgressText>{`Developer Progress: ${averageProgress}%`}</ProgressText>
         <ProgressBarWrapper>
            <ProgressBar progress={averageProgress} />
         </ProgressBarWrapper>
      </ProgressContainer>
   );
};
