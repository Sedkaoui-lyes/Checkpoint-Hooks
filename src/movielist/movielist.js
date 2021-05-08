import Movicard from '../MoviCArd/movicard';
import './movielist.css';


const Movielist=(props)=>{
    const {movies}= props
    return(

        <div className={'list'}>
      
        {movies.map(lyes=> <Movicard movies= {lyes} />)}
        
        </div>
    )
}
export default Movielist;