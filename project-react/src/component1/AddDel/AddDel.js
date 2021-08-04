import "./AddDel.css";
function AddDel() {
  return (
    <div>
      <div>
        <input className="SetMargin1" style={{ backgroundColor: "lightgrey", border: "none" }}></input>
        <button className="SetMargin2">Add</button>
      </div>
      <div>
        <span className="SetMargin1">Task1</span>
        <button className="SetMargin2">Edit</button>
        <button className="SetMargin2">Del</button>
      </div>
      <div>
        <span className="SetMargin1">Task2</span>
        <button className="SetMargin2">Edit</button>
        <button className="SetMargin2">Del</button>
      </div>
    </div>
  );
}
export default AddDel;
