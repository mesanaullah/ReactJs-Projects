import { MdDelete } from "react-icons/md";

function TodoItems({ Name, Date, onDeleteClick }) {


    return (
        <div className="container ">
            <div>
                <div className="row kg-row">
                    <div className="col-6">{Name}</div>
                    <div className="col-4">{Date}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger kg-button" onClick={() => { onDeleteClick(Name) }} ><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TodoItems;

