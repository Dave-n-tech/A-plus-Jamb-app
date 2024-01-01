import "./MenuList.scss";

export default function MenuList({content, href, handleClick}) {
  return (
    <li onClick={handleClick}>
      <a href={href}>{content}</a>
    </li>
  );
}
