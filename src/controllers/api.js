
let domain = process.env.REACT_APP_API_ENDPOINT;

exports.getNames = async function (){
    let res = await fetch(domain+ "/names");
    let data =await res.json();
    return data;
};

exports.postName = async function (name,id){
    let res = await fetch(domain+ "/names",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"name" : name, "id" : id})
    });
    console.log(res);
    if(res.statusText==="Created"){
        return {"success" : true};
    }
    else return {"success" : false};
};

exports.updateName = async function (name,id){
    let res = await fetch(domain+ "/names/" + id,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"name" : name, "id" : id})
    });
    console.log(res);
    if(res.status===200){
        return {"success" : true};
    }
    else return {"success" : false};
};

exports.deleteName = async function (id){
    let res = await fetch(domain+ "/names/" + id,{
        method: 'DELETE'
    });
    let data =await res.json();
    return data;
};