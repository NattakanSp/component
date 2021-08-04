
// import Menu from "./menu";

import Menu from "./Menu";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src="https://picsum.photos/id/237/50/50" alt="My Logo" />
      </div>
      {/* <div>
        <ul style={{ listStyle: "none", display: "flex", margin: 0 }}>
          <li>
            <a>Home</a>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div> */}
      <Menu />
    </div>
  );
}

export default Header;