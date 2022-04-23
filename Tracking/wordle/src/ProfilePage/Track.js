import React from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Track() {
  const history = useNavigate();
  let handleSubmit1 = () => {
    const namename = localStorage.getItem("email");
    let Tracking = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "tracking");
      await axios({
        method: "POST",
        url: "/api/user/tracking/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        let temp = response.data;
        let length = temp.length;
        let aa = "";
        let bb = "";
        let cc = "";
        let dd = "";
        let ee = "";
        if (length == 0) {
          alert("You already finished the last game");
          alert("This is the new game");
          Clear();
          history("/home");
        }
        if (length == 1) {
          aa = temp[0];
        } else if (length == 2) {
          aa = temp[0];
          bb = temp[1];
        } else if (length == 3) {
          aa = temp[0];
          bb = temp[1];
          cc = temp[2];
        } else if (length == 4) {
          aa = temp[0];
          bb = temp[1];
          cc = temp[2];
          dd = temp[3];
        } else if (length == 5) {
          aa = temp[0];
          bb = temp[1];
          cc = temp[2];
          dd = temp[3];
          ee = temp[4];
        }
        localStorage.setItem("aa", aa);
        localStorage.setItem("bb", bb);
        localStorage.setItem("cc", cc);
        localStorage.setItem("dd", dd);
        localStorage.setItem("ee", ee);

        let getKey = async () => {
          let formField = new FormData();
          formField.append("email", namename);
          formField.append("action", "sendkey");
          await axios({
            method: "POST",
            url: "/api/user/sendkey/",
            data: formField,
          }).then((response) => {
            console.log(response.data);
            localStorage.setItem("keywordss", response.data);
            console.log(response.data);
          });
        };
        getKey();
        let gethistory = async () => {
          let formField = new FormData();
          formField.append("email", namename);
          formField.append("action", "sendhistory");
          await axios({
            method: "POST",
            url: "/api/user/sendhistory/",
            data: formField,
          }).then((response) => {
            console.log(response.data);
            localStorage.setItem("keyboardHistory", response.data);
            console.log(response.data);
          });
        };
        gethistory();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        const waiting = async () => {
          await delay(80);
          history("/home");
        };
        waiting();
      });
    };
    Tracking();
  };
  const Clear = () => {
    const namename = localStorage.getItem("email");
    let clearData = async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clear");
      await axios({
        method: "POST",
        url: "/api/user/clear/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem("keyboardHistory", "NONE");
      });
    };
    clearData();

    let KeyWordd = async () => {
      let wordd = localStorage.getItem("keyword");
      let namename = localStorage.getItem("email");
      let formField = new FormData();
      formField.append("valuee", wordd);
      formField.append("email", namename);
      formField.append("action", "keywords");
      await axios({
        method: "POST",
        url: "/api/user/getkey/",
        data: formField,
      }).then((response) => {
        console.log(response.data);
        localStorage.setItem("keywordss", wordd);
      });
    };
    KeyWordd();

    let aa = "";
    let bb = "";
    let cc = "";
    let dd = "";
    let ee = "";
    localStorage.setItem("aa", aa);
    localStorage.setItem("bb", bb);
    localStorage.setItem("cc", cc);
    localStorage.setItem("dd", dd);
    localStorage.setItem("ee", ee);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const waiting = async () => {
      await delay(50);
      history("/home");
    };
    waiting();
  };
  return (
    <div className="app-style">
      <button onClick={handleSubmit1}>Lastest Game</button>
      <button onClick={Clear}>New Game</button>
    </div>
  );
}
export default Track;
