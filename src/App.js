import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddItem from "./components/AddItem/AddItem";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/HomePage/Footer/Footer";
import Header from "./components/HomePage/Header/Header";
import Home from "./components/HomePage/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import ManageItems from "./components/ManageItems/ManageItems";
import MyItems from "./components/MyItems/MyItems";
import RequiredAth from "./components/RequiredAuth/RequiredAuth";
import Signup from "./components/Signup/Signup";

function App() {
    return (
        <div>
            <div style={{ minHeight: "100vh" }}>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route
                        path="/inventory/:id"
                        element={
                            <RequiredAth>
                                <InventoryDetails></InventoryDetails>
                            </RequiredAth>
                        }
                    ></Route>

                    <Route
                        path="/manageitems"
                        element={
                            <RequiredAth>
                                <ManageItems></ManageItems>
                            </RequiredAth>
                        }
                    ></Route>
                    <Route
                        path="/additem"
                        element={
                            <RequiredAth>
                                <AddItem></AddItem>
                            </RequiredAth>
                        }
                    ></Route>
                    <Route
                        path="/myitems"
                        element={
                            <RequiredAth>
                                <MyItems></MyItems>
                            </RequiredAth>
                        }
                    ></Route>
                    <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                    <Route path="/signup" element={<Signup></Signup>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
