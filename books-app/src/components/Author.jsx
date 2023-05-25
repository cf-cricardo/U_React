import author from '../assets/author.jpg';
import {AiFillStar} from 'react-icons/ai';

function Author () {
    return (
        <div className="row">
            <div className="col-md-2">
                <img className='author-book' src={author} />
            </div>
            <div className='col-md content-author'>
                <div className='row'>
                    <div className='col-md'><strong>George Martin</strong></div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                </div>
            </div>
            <div className='col-md'>
                (8)
            </div>
        </div>
    );
}
export default Author;