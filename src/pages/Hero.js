import { useParams } from 'react-router-dom';
const Hero = () => {
    const params = useParams();   //Hooks
    return (  
        <div>
            <h1>Hero Page</h1>
            <h3>Id: {params.heroId}</h3>     
        </div>
    )  
}
export default Hero;