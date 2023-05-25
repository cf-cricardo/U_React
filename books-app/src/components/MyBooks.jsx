import BookLarge from "./BookLarge";

function MyBooks () {
    return (
        <div>
            <div className="row">
                <div className="col-md">
                    <h3>My Books</h3>
                </div> 
            </div>
            <div className="row">
                <div className="col-md"><BookLarge /></div>
                <div className="col-md"><BookLarge /></div>
                <div className="col-md"><BookLarge /></div>
                <div className="col-md"><BookLarge /></div>
            </div> 
        </div>
    );
}
export default MyBooks;