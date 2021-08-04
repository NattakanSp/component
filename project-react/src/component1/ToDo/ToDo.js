import "./ToDo.css";

function ToDo() {
  return (
    <div>
      <div className="All">
        <div>
          <h1>TO DO</h1>
        </div>
        <div>
          <div>
            <p>Wireframe</p>
            <p>14/07/2021</p>
          </div>
          <div>
            <button>
              <img src="save-icon.jpg" />
            </button>
            <button>
              <img src="Bin-icon.jpg" />
            </button>
            <button>Doing</button>
            <button>Done</button>
          </div>
        </div>
        <div>
          <div>
            <p>Design component andv API</p>
            <p>14/07/2021</p>
          </div>
          <div>
            <button>
              <img src="save-icon.jpg" />
            </button>
            <button>
              <img src="Bin-icon.jpg" />
            </button>
            <button>Doing</button>
            <button>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDo;
