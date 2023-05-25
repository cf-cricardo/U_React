import cover01 from '../assets/DaZg5gR.jpg';
import {AiOutlineRead} from 'react-icons/ai';

function BookLarge() {
    return (
            <div className="row">
                <div className="col-md">
                    <img className="cover-large" src={cover01} />
                </div>
                <div className="col-md">
                    <div className="row">
                        <div className="col-md">
                            <h4>Conan el usurpador</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                           Robert E. Howard
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <p>Progress: 2%</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <button type="button" class="btn btn-outline-primary"><AiOutlineRead /> Continue</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BookLarge;