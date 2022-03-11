/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import { FaAngleRight } from 'react-icons/fa';

import Technology from 'assets/category/technology.png';
import Education from 'assets/category/education.png';
import Videos from 'assets/category/video.png';
import Medical from 'assets/category/medical.png';
import Fashion from 'assets/category/fashion.png';
import Design from 'assets/category/design.png';
import Ellipse from 'assets/category/ellipse.png';

const data = [
  {
    id: 1,
    title: 'Technology',
    imgSrc: Technology,
  },
  {
    id: 2,
    title: 'Education',
    imgSrc: Education,
  },
  {
    id: 3,
    title: 'Videos',
    imgSrc: Videos,
  },
  {
    id: 4,
    title: 'Medical',
    imgSrc: Medical,
  },
  {
    id: 5,
    title: 'Fashion',
    imgSrc: Fashion,
  },
  {
    id: 6,
    title: 'Design',
    imgSrc: Design,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const text = {
  title: 'Which categories interest you?',
  description: 'Discover projects just for you and get great recommendations when you select your interests.',
}

export default function TestimonialCard() {
  return (
    <section id="category" sx={styles.section}>
      <Container sx={styles.container}>
        <Heading sx={{ textAlign: 'center', mb: 7 }}>
          CATEGORIES
        </Heading>
        <SectionHeader title={text.title} description={text.description} />
        <Box sx={styles.container.box}>
          <Button variant='whiteButton' sx={styles.container.signupBtn} aria-label="">
            Signup and select interests
            <FaAngleRight sx={{ fontSize: '25px', ml: '10px' }}/>
          </Button>
        </Box>
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={true}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Box sx={styles.reviewCard.bgCard}>
                  <Image src={item.imgSrc} alt="Client Image" sx={styles.img}/>
                </Box>
                
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
      
    </section>
  );
}

const styles = {
  section: {
    variant: 'section.keyFeature',
    bg: 'section_bg_color',
  },
  container: {
    bg: 'section_bg_color',
    box: {
      display: 'flex',
      justifyContent: 'center',
    },
    signupBtn: {
      alignItems: 'center',
      position: 'relative',
      display: 'flex',
      cursor: 'pointer',
      background: 'transparent',
    }
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        '100%',
      ],
      mr: '0',
      ml: '0',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    height: '220px',
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    bgCard: {
      width: '100%',
      background: `url(${Ellipse})`,
      height: '80%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'right',
      right: ['25%', '20%', null, '15%', '25%', '10px'],
      position: 'relative',
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mt: [3, null, null, '16px'],
    color: 'text',
    lineHeight: 1.6,
    textAlign: 'center',
  },
  img: {
    right: ['-25%', '-20%', null, '-15%', '-25%', '-10px'],
    position: 'relative',
  }
};
