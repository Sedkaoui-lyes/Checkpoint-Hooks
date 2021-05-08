import { Card } from '@material-ui/core';
import './movicard.css';

const Movicard =(props)=>{
    const {movies}= props 

    return(

        <Card className={'h-card'}>
            <span>Title : {movies.title}</span>
            <span>Description : {movies.description}</span>
            <span>PosterUrl : {movies.posterurl}</span>
            <span>Rating : {movies.rating} </span>
        </Card>   
    )



}
export default Movicard;