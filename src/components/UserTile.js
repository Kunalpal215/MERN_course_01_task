import { Link} from "react-router-dom";
import './UserTile.css';

export const UserTile = (props) => {
    return (
        <div className="UserTile">
            <h1>{props.name}</h1>
            <Link to="/edit" state={{name: props.name, entryId: props.entryId}}><button className="tileButton">Edit</button></Link>
            <button type="submit" onClick={props.deleteFunc} className="tileButton">Delete</button>
        </div>
    );
};