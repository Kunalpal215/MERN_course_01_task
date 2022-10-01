import { Routes, Route } from "react-router-dom"
import { EditPage } from "./EditPage";
import Home from "./Home";
import { Navbar } from "./Navbar";
function App(){
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/edit" element={<EditPage/>} ></Route>
            </Routes>
        </>
    );
}
export default App;