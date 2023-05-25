import BookSmall from './BookSmall';

function MostPopular () {
    return (
        <div>
            <div className="row">
                <div className="col-md">
                    
                </div> 
            </div>
            <div className="row">
                <div className="col-md">
                    <BookSmall />
                </div>
                <div className="col-md"><BookSmall /></div>
                <div className="col-md"><BookSmall /></div>
                <div className="col-md"><BookSmall /></div>
            </div>
        </div>
    );
}
export default MostPopular;