import { Link } from 'react-router-dom';
const NotFounds = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFounds;