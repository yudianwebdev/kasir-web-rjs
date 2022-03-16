// import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputBasic from "../../componets/inputForm/InputBasic";
import WebLayoute from "../../componets/layoute/WebLayout";

function SignIn() {
  function tes() {
    let array = [
      { id: 1, nama: "1", tgl: "A" },
      { id: 2, nama: "2", tgl: "A" },
      { id: 3, nama: "3", tgl: "B" },
      { id: 4, nama: "4", tgl: "B" },
      { id: 5, nama: "5", tgl: "C" },
      { id: 6, nama: "6", tgl: "C" },
      { id: 1, nama: "1", tgl: "A" },
      { id: 2, nama: "2", tgl: "A" },
      { id: 1, nama: "1", tgl: "A" },
      { id: 2, nama: "2", tgl: "A" },
    ];

    let red = array.reduce((v, e, i) => {
      let k = v.findIndex((x, i) => x.tgl == e.tgl);
      console.log("k", k, e.tgl);
      if (k == -1) {
        v = [
          ...v,
          {
            tgl: e.tgl,
            comments: [e],
          },
        ];
      } else {
        v = v.map((x, i) => {
          console.log("j", k, x);
          if (i == k) {
            x.comments = [...x.comments, e];
          }
          return x;
        });
      }
      return v;
    }, []);
    console.log(red);
  }
  useEffect(() => {
    tes();
  }, []);
  return (
    <WebLayoute>
      <p>ini halaman signin</p>
      <InputBasic />
      <Link to="/about">
        <p>pergi ke SignUp</p>
      </Link>
    </WebLayoute>
  );
}

export default SignIn;
