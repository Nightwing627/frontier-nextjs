import {Carousel} from 'react-responsive-carousel';
import Slide from './slide';
import { Box } from 'theme-ui';

const DetailCarousel = () => {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    return (
        <Box className='relative'>
            <Carousel
                renderItem={customRenderItem}
                showThumbs={false}
            >
                <Slide
                    key='0'
                    image='https://site.tld/path/file0.jpg'
                    title='File 0'
                />
                <Slide
                    key='1'
                    image='https://site.tld/path/file1.jpg'
                    title='File 1'
                />
                <Slide
                    key='2'
                    image='https://site.tld/path/file2.jpg'
                    title='File 2'
                />
            </Carousel>
        </Box>
    );
};

export default DetailCarousel;