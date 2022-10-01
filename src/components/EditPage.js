import {useLocation } from 'react-router-dom';
import api from '../controllers/api';
import './Home.css';

export function EditPage (props) {
    let location = useLocation();
    console.log(location);
    function handleEdit(){
        console.log(location.state);
        let name = document.getElementById("inputName").value;
        if(name!==undefined){
        let res = window.confirm(`Are you sure to update name to ${name} in the list ?`);
        if(res===true){
            api.updateName(name,location.state.entryId).then((res) => {
            console.log(res);
            if(res.success === true){
                alert("Name updated successfully");
                window.location="/";
            }
            else alert("An error occured :( Please try again !!");
            });
        }
        }
    }
    return (
        <>
            <div className="input-group mb-3 top-part" id='inputArea'>
                <span className="input-group-text" id="basic-addon1">Enter New Name</span>
                <input type="text" className="form-control" placeholder="John Doe" aria-label="Username" aria-describedby="basic-addon1" id="inputName"/>
                <button type="button" class="btn btn-success" onClick={handleEdit}>Confirm Edit</button>
            </div>
        </>
    );
}