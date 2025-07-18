// Carousel.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

import { cloneElement } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

function PauseOnHover({ items, }) {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            className="skill-slide"
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              p: 2,
              borderRadius: 1,
              textAlign: 'center',
              userSelect: 'none',
            }}
          >
            <div className="skill-content">
              {cloneElement(item.icon, { className: 'skill-icon' })}
              <span className="skill-name">{item.name}</span>
            </div>
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
