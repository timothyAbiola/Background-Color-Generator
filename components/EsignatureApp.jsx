import React from 'react'
import '../src/App.css'

const EsignatureApp = () => {
    const colorChange = (e) => {
        bkColor()
        tColor()
        btn(e)
    }
    const bkColor = (e) => {
        document.body.style.backgroundColor = handleChange();
        btn(e);
    }
    const tColor = (e) => {
        document.querySelector(".title").style.color = handleChange();
        btn(e);
    }
    const btn = (e) => {
        if (e) {
          e.target.style.backgroundColor = handleChange();
        }
    }
    const handleChange = () => {
        let color = "#";
        let hex = "0123456789abcdef";
        for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  return (
    <>
      <div className="container">
        <div className="title" >Random Background Color</div>
        <div className="box">
          <button onClick={(e) => colorChange(e)} className="btn btn-warning">
            Click me
          </button>
          <button onClick={(e) => bkColor(e)} className="btn btn-danger">
             Background Color
          </button>
          <button onClick={(e) => tColor(e)} className="btn btn-dark">
             Text Color
          </button>
        </div>
      </div>
    </>
  );
}

export default EsignatureApp