import helloImg from '../images/hello.gif';
import { Wrapper } from './Home.styled';

export default function Home() {
    return(
        <Wrapper>
            <h1>Welcome to the Tweets App</h1>
            <img src={helloImg} alt="hello" width="380px"/>
        </Wrapper> 
    )
}