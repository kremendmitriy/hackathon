import styled from 'styled-components';

export const TotalDeveloperProgress = ({ skillsData }) => {
   const totalProgress = skillsData.reduce(
      (acc, item) => acc + item.progress,
      0
   );
   const averageProgress = Math.round(totalProgress / skillsData.length);

   return (
      <ProgressContainer>
         <ProgressText>{`Developer Progress: ${averageProgress}%`}</ProgressText>
         <ProgressBarWrapper>
            <ProgressBar progress={averageProgress} />
         </ProgressBarWrapper>
      </ProgressContainer>
   );
};

const ProgressContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
`;

const ProgressBarWrapper = styled.div`
   width: 85%;
   height: 16px;
   background-color: #e0e0e0;
   border-radius: 6px;
   overflow: hidden;
`;

const ProgressBar = styled.div`
   width: ${({ progress }) => progress}%;
   height: 100%;
   background-color: #4caf50;
   border-radius: 4px;
`;

const ProgressText = styled.span`
   font-size: 18px;
   color: #fff;
   margin-top: 6px;
`;
