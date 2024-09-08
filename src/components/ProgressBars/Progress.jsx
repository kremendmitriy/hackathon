import styled from '@emotion/styled';
// TEST DATE
const skillsData = [
   { name: 'React', progress: 75 },
   { name: 'JavaScript', progress: 85 },
   { name: 'HTML', progress: 90 },
   { name: 'CSS', progress: 80 },
   { name: 'NextJS', progress: 65 },
];

const languageColors = {
   React: '#61DAFB',
   JavaScript: '#F7DF1E',
   HTML: '#E34F26',
   CSS: '#1572B6',
   NextJS: '#000000',
};
//

const ProgressContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
   max-width: 600px;
   margin: 0 auto;
`;

const Skill = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const SkillName = styled.div`
   margin-bottom: 10px;
   font-weight: bold;
   color: #333;
`;

const CircleContainer = styled.div`
   position: relative;
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background-color: #e0e0e0;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 4px solid #ccc;
`;

const CircleFill = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background: conic-gradient(
      ${(props) => props.color} ${(props) => props.progress}%,
      #e0e0e0 ${(props) => props.progress}%
   );
`;

const PercentageText = styled.div`
   position: absolute;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #333;
   font-weight: bold;
   font-size: 14px;
   border: 2px solid #ccc;
`;

export const Progress = () => {
   return (
      <ProgressContainer>
         {skillsData.map((skill) => (
            <Skill key={skill.name}>
               <SkillName>{skill.name}</SkillName>
               <CircleContainer>
                  <CircleFill
                     color={languageColors[skill.name]}
                     progress={skill.progress}
                  />
                  <PercentageText>{skill.progress}%</PercentageText>
               </CircleContainer>
            </Skill>
         ))}
      </ProgressContainer>
   );
};
