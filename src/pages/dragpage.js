import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function Dragpage() {
  const [mouseStart1, setMouseStart] = useState();
  const [mousedragging1, setMousedragging] = useState(false);
  const [mouseend1, setMouseend] = useState();
  const [diffx, setdiffx] = useState();
  const [diffY, setdiffY] = useState();
  const [style, setstyle] = useState({
    top: "300px",
    left: "30px",
    right: "unset",
    height: "100px",
    width: "100px",
    background: "yellow",
  });
  function mouseStart() {
    setMousedragging(true);
  }
  function mouseEnd(e) {
    // console.log("berhenti");
    setMousedragging(false);
    if (style.left == "unset") {
      setstyle({
        right: "30px",
        top: style.top,
        left: "unset",
        width: style.width,
        height: style.height,
      });
    } else if (style.right == "unset") {
      setstyle({
        right: "unset",
        top: style.top,
        left: "30px",
        width: style.width,
        height: style.height,
      });
    }
  }
  function dragging2({ movementY, movementX }) {
    console.log(movementY, movementX);
    if (mousedragging1) {
      if (style.right == "unset") {
        console.log("atas bawah kanan");
        setstyle({
          top:
            parseInt(style.top) > 0 ? parseInt(style.top) + movementY : "1px",
          left:
            parseInt(style.left) > 0 ? parseInt(style.left) + movementX : "1px",
          right: style.right,
          height: style.height,
        });
        if (parseInt(style.top) > window.innerHeight - parseInt(style.height)) {
          setstyle({
            top: window.innerHeight - parseInt(style.height) + "px",
            height: style.height,
          });
        }
      } else {
        setstyle({
          top:
            parseInt(style.top) > 0 ? parseInt(style.top) + movementY : "1px",
          left: style.left,
          height: style.height,
        });
      }
    }
  }

  function dragging({ movementY, movementX }) {
    if (mousedragging1) {
      console.log(style);
      console.log(style.right);
      if (style.right == "unset") {
        console.log("top", style.top);
        setstyle({
          top:
            parseInt(style.top) > 0 ? parseInt(style.top) + movementY : "1px",
          left:
            parseInt(style.left) > 0 ? parseInt(style.left) + movementX : "1px",
          right: style.right,
          height: style.height,
          width: style.width,
        });
        if (style.left > 0.3 * window.innerWidth) {
          setstyle({
            top: style.top,
            left: "unset",
            right: 30,
            height: style.height,
            width: style.width,
          });
        }
        if (parseInt(style.top) > window.innerHeight - parseInt(style.height)) {
          setstyle({
            top: window.innerHeight - parseInt(style.height) + "px",
            left: style.left,
            right: style.right,
            height: style.height,
            width: style.width,
          });
        }
      } else {
        console.log("right", style.top);
        setstyle({
          top:
            parseInt(style.top) > 0 ? parseInt(style.top) + movementY : "1px",
          right:
            parseInt(style.right) > 0
              ? parseInt(style.right) - movementX
              : "1px",
          left: style.left,
          height: style.height,
          width: style.width,
        });

        if (style.right > 0.3 * window.innerWidth) {
          setstyle({
            top: style.top,
            left: "30px",
            right: "unset",
            height: style.height,
            width: style.width,
          });
        }
        if (parseInt(style.top) > window.innerHeight - parseInt(style.height)) {
          setstyle({
            top: window.innerHeight - parseInt(style.height) + "px",
            left: style.left,
            right: style.right,
            height: style.height,
            width: style.width,
          });
        }
      }
    }
  }
  function touchstart(e) {
    // console.log("jalan", left.top);
    setdiffY(
      e.touches[0].screenY - e.currentTarget.getBoundingClientRect().top
    );
    setdiffx(
      e.touches[0].screenX - e.currentTarget.getBoundingClientRect().left
    );
    setMousedragging(true);
  }

  // function dragging1(e) {
  //   if (mousedragging1) {
  //     console.log("apa ini", e);
  //     var left = e.touches[0].screenX - diffx;
  //     var top = e.touches[0].screenY - diffY;
  //     // setstyle({ top: 3, position: "absolute" });
  //   }
  // }
  // console.log(diffY, diffx);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "blue",
        height: "100%",
      }}
    >
      <nav
        style={style}
        id="nav"
        onMouseDown={mouseStart}
        onMouseMove={dragging}
        onMouseUp={mouseEnd}
        onMouseLeave={mouseEnd}
        // onTouchStart={touchstart}
        // onTouchMove={dragging1}
        onClick={() => console.log("klik", window.innerHeight)}
        className="pointer draggeble nav absolute bg-amber-300"
      >
        <div className="toggleBtn">
          <p id="btndrag">jadi btn</p>
        </div>
      </nav>
      {/* <script>
        const nav = document.querySelectorAll("nav"),
        toggleBtn = nav.querySelectorAll(".toggle-btn");

        toggleBtn.addE
      </script> */}
    </div>
  );
}

export default Dragpage;
