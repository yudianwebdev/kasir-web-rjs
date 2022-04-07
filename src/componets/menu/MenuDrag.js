import { useState } from "react";

function MenuDrag() {
  const [aktive, setAktive] = useState(false);
  return (
    <div>
      <nav className={`nav ${aktive == true ? "open" : ""}`}>
        <div className="toggel">
          <div className="IndukBtn" onClick={() => setAktive(!aktive)}></div>
          <div style={{ "--i": 1 }} className="menuchild">
            <p>A</p>
          </div>
          <div style={{ "--i": 2 }} className="menuchild">
            <p>B</p>
          </div>
          <div style={{ "--i": 3 }} className="menuchild">
            <p>C</p>
          </div>
          <div style={{ "--i": 4 }} className="menuchild">
            <p>D</p>
          </div>
          <div style={{ "--i": 5 }} className="menuchild">
            <p>E</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuDrag;
