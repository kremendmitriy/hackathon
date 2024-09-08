import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'
import Arrow from '../../public/arrow.svg'

const CarouselComponentContainer = ({ ...props }) => {
    <div>
         <CarouselProvider
          naturalSlideWidth={125}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            {" "}
            <Slide index={0}>
              <img src={img1} />  {/* Здесь находится содержимое слайда */}
            </Slide>
            <Slide index={1}>
              <img src={img2} />
            </Slide>
            <Slide index={2}>
              <img src={img3} />
            </Slide>
          </Slider>
          <div className='btn-panel'>
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
        </CarouselProvider>
    </div>
}

export const CarouselComponent = styled('CarouselComponentContainer')`
    .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }
      
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #03eaff;
        transition: background 0.4s ease;
      }
    }
  }
`