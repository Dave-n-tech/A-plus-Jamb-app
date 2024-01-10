import MenuList from "../MenuList/MenuList";
import SignUpButton from "../SignUpButton/SignUpButton";
import "./menu.scss";

export default function Menu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={"Menu " + (isOpen && "active")}>
      <ul>
        <MenuList content="Home" href="#Hero" handleClick={handleClick} />
        <MenuList content="Features" href="#Features" handleClick={handleClick} />
        <MenuList content="Testimonials" href="#Testimonials" handleClick={handleClick} />
        <MenuList content="Contact" href="#Footer" handleClick={handleClick} />
      </ul>
      <SignUpButton/>
    </div>
  );
}
