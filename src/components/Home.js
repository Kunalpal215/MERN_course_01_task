import api from '../controllers/api';
import { UserTile } from './UserTile';
import { useEffect, useState } from 'react';
import './Home.css';
import { v4 as uuid } from 'uuid';

function Home() {
  let [names,setNames] = useState([]);
  let [count,setCount] = useState(0);
  useEffect(() => {
    api.getNames().then((data) => {
      console.log(data);
      setNames(data);
      setCount(data.length);
    });
  },[count]);
  console.log(names);
  console.log(count);

  function deleteFunc(index){
    api.deleteName(index);
    setCount(count-1);
  }

  function handleAdd(){
    let name = document.getElementById("inputName").value;
    if(name!==undefined){
      let res = window.confirm(`Are you sure to add ${name} in the list ?`);
      if(res===true){
        api.postName(name,uuid()).then((res) => {
          console.log(res);
          if(res.success === true){
            alert("Name added successfully");
            setCount(count+1);
            document.getElementById("inputName").value="";
          }
          else alert("An error occured :( Please try again !!");
        });
      }
    }
  }

  return (
    <>
      <div className="input-group mb-3 top-part" id='inputArea'>
        <span className="input-group-text" id="basic-addon1">Enter Name</span>
        <input type="text" className="form-control" placeholder="John Doe" aria-label="Username" aria-describedby="basic-addon1" id="inputName"/>
        <button type="button" class="btn btn-success" onClick={handleAdd}>Add Name</button>
      </div>
      {
        names.map((element,index) => {
          return <UserTile name={element.name} entryId={element.id} deleteFunc={event => deleteFunc(element.id)} key={index}/>;
        })
      }
    </>
  );
}

export default Home;
