import { Comment} from  'react-loader-spinner';
import { Overlay } from './Loader.styled';


export const Loader = () => {
    return (
        <Overlay>
            <Comment
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#471CA9"
/>
        </Overlay>  
    )
}