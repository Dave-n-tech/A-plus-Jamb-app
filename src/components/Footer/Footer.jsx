import "./footer.scss";
import MenuList from "../MenuList/MenuList";

export default function Footer({ setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="Footer" id="Footer">
      <p>
        <a href="#Contact">Contact us</a>
      </p>
      <ul>
        <MenuList content="Home" href="#Hero" handleClick={handleClick} />
        <MenuList
          content="Features"
          href="#Features"
          handleClick={handleClick}
        />
        <MenuList
          content="Testimonials"
          href="#Testimonials"
          handleClick={handleClick}
        />
        <li>
          <a href="#About">About us</a>
        </li>
      </ul>
    </div>
  );
}
