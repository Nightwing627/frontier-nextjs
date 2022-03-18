
/** @jsx jsx */
import {jsx, Image} from 'theme-ui';

const Slide = ({
    id,
    image,
    title,
}) => {
    return(
        <>
            <Image
                alt={title}
                
                src={image}
            />
        </>
    );
};

export default Slide;