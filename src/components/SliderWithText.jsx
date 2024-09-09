import { CarouselComponent } from './Slider';
import styled from 'styled-components';

const textTitle = 'Про мои проекты';

const SliderWithTextContainer = ({ className, textContent, projectsImg }) => {
   return (
      <div className={className}>
         <div className="text-section">
            <h1>{textTitle}</h1>
            <p>{textContent}</p>
         </div>
         <div className="carousel-section">
            <CarouselComponent projectsImg={projectsImg} />
         </div>
      </div>
   );
};

export const SliderWithText = styled(SliderWithTextContainer)`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding: 40px 30px;
   width: 100%;
   max-width: 1000px;
   background: #2c2c2c;
   border-radius: 12px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

   border: 1px solid #444;

   & .text-section {
      flex: 1;
      color: #f1f1f1;
      padding: 20px;
      border-radius: 12px;
      margin-right: 20px;
   }

   & .text-section h1 {
      font-size: 32px;
      font-weight: bold;
      color: #d4af37;
      letter-spacing: 1px;
      margin-bottom: 10px;
   }

   & .text-section p {
      font-size: 22px;
      line-height: 1.6;
      color: #ddd;
   }

   & .carousel-section {
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
   }

   & .carousel-section .carousel {
      width: 100%;
      height: 400px;
      border-radius: 12px;
   }

   &:hover {
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
      transform: translateY(-5px);
      transition: all 0.3s ease;
   }
`;
