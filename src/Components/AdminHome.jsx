import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashBoard from "./AdminDashBoard";
import ViewList from "./ViewList";
import AddBooks from "./AddBooks";
import EditBooks from "./EditBooks";
import ReadBook from "./ReadBook";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/viewlist" element={<ViewList/>}/>
                <Route path="/" element={<AdminDashBoard/>}/>
                <Route path="/addbooks" element={<AddBooks/>}/>
                <Route path="/editbooks/:id" element={<EditBooks/>}/>
                <Route path="/viewlist/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHome;