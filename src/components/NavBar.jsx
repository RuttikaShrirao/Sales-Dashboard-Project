import notificationLine from "../assets/navbar_icons/notificationLine.svg";
import personImg from "../assets/navbar_icons/personImg.png";
import dropdown from "../assets/navbar_icons/dropdown.svg";
export default function NavBar() {
  return (
    <div className="navbar">
      <p className="navbarCurrentPage">Dashboad</p>
      <div className="navProfile">
        <img src={notificationLine} />
        <img src={personImg} />
        <div className="adminIfo">
          <h3>Mr. Bean😎</h3>
          <p>admin</p>
        </div>
        <img src={dropdown} />
      </div>
    </div>
  );
}
