import Author from "./Author";

function BestAuthor () {
    return (
        <div>
            <div className="row">
                <div className="col-md">
                    <h4>Best Author</h4>
                </div> 
            </div>
            <div className="row">
                <div className="col-md">
                    <Author />
                </div>
                <div className="col-md"><Author /></div>
                <div className="col-md"><Author /></div>
                <div className="col-md"><Author /></div>
            </div>
        </div>
    );
}

export default BestAuthor;