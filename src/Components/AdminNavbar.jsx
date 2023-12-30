import { Link } from "react-router-dom";
import  '../styles/AdminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="Adminnavbar">
            <div className="logo">
                
                <h1><span><i>J</i></span>SPIDER</h1>
                
                
            </div>
            <div className="navlinks">
                <Link to="/adminhome/viewlist">View List</Link>
                <Link to="/adminhome/addbooks">Add Books</Link>
                <Link to="/adminhome/editbooks">Update Books</Link>
                <Link to="/">Logout</Link>
                
            </div>
        </div>
     );
}
 
export default AdminNavbar;