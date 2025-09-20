
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="header">
            <div className="notify" >
                <IoIosNotificationsOutline />
            </div>
            <div className="profileImg">
                <CgProfile />
            </div>
        </div>
    );
}

export default Header;