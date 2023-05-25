import cover01 from '../assets/DaZg5gR.jpg';
import {AiFillStar} from 'react-icons/ai';

function BookLarge() {
    return (
            <div className="row">
                <div className="col-md-2">
                    <img className="cover-small" src={cover01} />
                </div>
                <div className="col-md">
                    <div className="row">
                        <div className="col-md">
                            <strong>Conan el usurpador</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                           Robert E. Howard
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <AiFillStar /> 4.5
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BookLarge;