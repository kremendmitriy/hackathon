import {
   CarouselProvider,
   Slider,
   Slide,
   DotGroup,
   ButtonBack,
   ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

export const CarouselComponent = ({ projectsImg }) => {
   return (
      <CarouselWrapper>
         <CarouselBox>
            <CarouselProvider
               naturalSlideWidth={100}
               naturalSlideHeight={125}
               totalSlides={3}
               infinite={true}
               isPlaying={true}
               interval={4000}
               dragEnabled={true}
            >
               <Slider>
                  {projectsImg.map((url, index) => (
                     <StyledSlide key={index} index={index}>
                        <StyledImg src={url} alt={`Slide ${index + 1}`} />
                     </StyledSlide>
                  ))}
               </Slider>

               <ButtonPanel>
                  <ButtonBack className="btn-arrow reverse-arrow">
                     <ArrowLeft />
                  </ButtonBack>
                  <DotGroup className="dot-group" />
                  <ButtonNext className="btn-arrow">
                     <ArrowRight />
                  </ButtonNext >
               </ButtonPanel>
            </CarouselProvider>
         </CarouselBox>
      </CarouselWrapper>
   );
};

const CarouselWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
   background-color: #1b1b1b;
   border-radius: 12px;
`;

const CarouselBox = styled.div`
   width: 400px;
   height: 550px;
   background-color: #2c2c2c;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
   border-radius: 12px;
   padding: 30px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid #333;
`;

const StyledSlide = styled(Slide)`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
`;

const StyledImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 10px;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const ButtonPanel = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;

   .btn-arrow {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      transition: transform 0.3s ease;
      color: #fff;
   }

   .btn-arrow:hover {
   
    //   transform: rotate(180deg);
      transform: scale(1.2);
   }

   .reverse-arrow {
      transform: rotate(180deg);
   }

   .dot-group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
   }

   .dot-group button {
      background: #666;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      border: none;
      transition: background 0.3s ease;
   }

   .dot-group button:hover {
      background: #fff;
   }
`;

const ArrowLeft = styled.div`
   width: 20px;
   height: 20px;
   border-left: 2px solid #fff;
   border-bottom: 2px solid #fff;
   transform: rotate(45deg);
`;

const ArrowRight = styled.div`
   width: 20px;
   height: 20px;
   border-right: 2px solid #fff;
   border-bottom: 2px solid #fff;
   transform: rotate(-45deg);
`;
