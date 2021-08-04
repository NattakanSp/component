import "./HeaderToDo.css";

function HeaderToDo() {
  return (
    <div className="All">
      <div className="HeaderBox">
        <div className="TopLeft">
          <p>To Do List App</p>
        </div>
        <div className="TopRight">
          <input className="inputSearch" placeholder="Search" />
          <button className="Search">Search</button>
          <button className="Add">Add</button>
        </div>
      </div>
    </div>
  );
}
export default HeaderToDo;
