import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import './demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from '@testing-library/react';

/*
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root2')
  );*/
function newgame(){
    console.log("newgame fn");
   
      document.getElementById('timerid').style.color="white"; 
    setTimeout(resetcode,5000);
    
    
}

var arr = [3, 4, 5, 6, 7, 8, 9, 11, 12];

function Checkgame(x) {
   
    //count=0;

    var z = document.getElementById(x);
    if (z.value === "X")
        arr[x - 1] = 1;
    else if (z.value === "O")
        arr[x - 1] = 2;
    console.log(arr);

    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        console.log("match");
        
        document.getElementById('1').style.backgroundColor="green";
        document.getElementById('2').style.backgroundColor="green";
        document.getElementById('3').style.backgroundColor="green";
        newgame();


    }

    if (arr[0] === arr[3] && arr[3] === arr[6]) {
        console.log("match");
        document.getElementById('1').style.backgroundColor="green";
        document.getElementById('4').style.backgroundColor="green";
        document.getElementById('7').style.backgroundColor="green";
        newgame();
    }

    if (arr[3] === arr[4] && arr[4] === arr[5]) {
        console.log("match");
        document.getElementById('4').style.backgroundColor="green";
        document.getElementById('5').style.backgroundColor="green";
        document.getElementById('6').style.backgroundColor="green";
        newgame();
    }
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
        console.log("match");
        document.getElementById('7').style.backgroundColor="green";
        document.getElementById('8').style.backgroundColor="green";
        document.getElementById('9').style.backgroundColor="green";
        newgame();
    }
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
        console.log("match");
        document.getElementById('2').style.backgroundColor="green";
        document.getElementById('5').style.backgroundColor="green";
        document.getElementById('8').style.backgroundColor="green";
        newgame();
    }
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
        console.log("match");
        document.getElementById('3').style.backgroundColor="green";
        document.getElementById('6').style.backgroundColor="green";
        document.getElementById('9').style.backgroundColor="green";
        newgame();
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
        console.log("match");
        document.getElementById('3').style.backgroundColor="green";
        document.getElementById('5').style.backgroundColor="green";
        document.getElementById('7').style.backgroundColor="green";
        newgame();
    }
    if (arr[0] === arr[4] && arr[4] === arr[8]) 
    {
        console.log("match");
        document.getElementById('1').style.backgroundColor="green";
        document.getElementById('5').style.backgroundColor="green";
        document.getElementById('9').style.backgroundColor="green";
        newgame();
    }
}


var count = 0;
function Changevalue(event) {

    const x = event.target.id;
    var z = document.getElementById(event.target.id)
    //var x=this.id;

    // id.value="X";
    if (z.value === "") {
        count++;
        if (count % 2 === 0 || count === 0)
            z.value = "O";

        else
            z.value = "X";
    }
    document.getElementById(x).style.backgroundColor="rgb(199, 98, 81)";
    Checkgame(x);
}


function resetcode() {
    var i = 0;
    count = 0;
    for (i = 1; i <= 9; i++) {
        var z = document.getElementById(i);
        z.style.backgroundColor="";
        z.value = "";
    }
    arr = [3, 4, 5, 6, 7, 8, 9, 11, 12];

    document.getElementById('timerid').style.color="#131327";
}


const Demo = () => {

    return (
        <div style={{ color: "white", }}>
            <div className="heading" style={{marginTop:"20px"}} >
                <p >Lets Play TIC TAC TOE.</p>
            </div>
            <div>
            <input className="reset-btn" id="resetid" type="button" value="Reset Game" onClick={resetcode}></input>
            </div>
            <div style={{ marginTop: "50px" }}>
                
                {/*<input className="reset-btn" id="resetid" type="button" value="" onClick={resetcode}></input>*/}
                <div className="grid-container">
                    <div className="grid-item"><input className="grid-item" id="1"  type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="2" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="3" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="4" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="5" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="6" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="7" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="8" type="button" value="" onClick={Changevalue}></input></div>
                    <div className="grid-item"><input className="grid-item" id="9" type="button" value="" onClick={Changevalue}></input></div>


                </div>

            </div>
        </div>
    );
}


export default Demo;