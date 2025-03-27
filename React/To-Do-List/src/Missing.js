import { Link } from 'react-router-dom';
import image1 from './img/browser.png';

const Missing = () => {
    return(
        <main className='Missing'>
            <img src={image1} className='not-fund' />
            <p>Sorry! We can't find this page.</p>
            <Link to={'/'}><p>Back to home page</p></Link>
        </main>
    )
}

export default Missing;