import '../styles/LandingPage.css'
import {Link} from 'react-router-dom'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <h1>Library Management System</h1>
            <div className="section1">
            <Link to="/admin">
                <img src="https://icons.iconarchive.com/icons/aha-soft/free-large-boss/512/Admin-icon.png" alt="" />
                <h1>Admin</h1>
             </Link> 
            <Link to="/user">
                <img src="https://www.clipartmax.com/png/middle/349-3496311_download-users-icon-clipart-computer-icons-user-communication-users-group-icon.png" alt="" />
                <h1>User</h1>
            </Link>
            </div>
            {/* <Link> tag/component is react router dom use for navigating to another page and Link tag is act as anchor(<a>) tag in css*/}
        </div>
     );
}
 
export default LandingPage ;