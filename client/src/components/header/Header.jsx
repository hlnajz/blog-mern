import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Hamza Labbaalli</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images8.alphacoders.com/906/906860.jpg"
        alt=""
      />
    </div>
  );
}
