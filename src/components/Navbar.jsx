import Logo from "../assets/logo.png";
import '../Sass/navbar.scss'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_child-1">
        <img src={Logo} alt="logo" />
        <p>first flight school</p>
      </div>
      <div className="navbar_child-2">
        <a href="about_course">О курсе</a>
        <a href="for_who">Для кого</a>
        <a href="teacher">Преподаватель</a>
        <a href="programme">Программа</a>
        <button type="button">Записаться</button>
      </div>
    </div>
  );
}
