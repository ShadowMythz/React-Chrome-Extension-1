import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [orderNumber, setOrderNumber] = useState("007")
  const [date, setDate] = useState("2/10/2052")
  const [dasher, setDasher] = useState("Random String")
  const [cost, setCost] = useState("5$")

  const data= {
    "orderNumber":"009",
    "date": "2/10/2052",
    "dasher":"Test 2",
    "cost": "10$"
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const objt= {orderNumber, date, dasher, cost}

    // you can pass either objt or data after the url, have fun! :)
    axios.post("https://sheet.best/api/sheets/b41c3153-84ed-4ed5-a308-0f02e47df9f2", data)
    .then(response =>{
      console.log(response)
    })
  }

 
  
  
  function test(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          function: ()=>{
           
            var tab= document.getElementsByClassName("styles__BodyRow-sc-4myuz0-3 cnRgPY");
            var list=[];
           
            for(var i=0;i<tab.length;i++){
              console.log(tab[i].children[7].innerText+i)
              if(tab[i].children[7].innerText!="$0.00"){
                console.log("found");
                tab[i].style['background-color']="red";
              }
            }
           
          }
          
        }
      )
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Find Errors</button>
      <button onClick={handleSubmit}>Write to Sheets</button>
     
    </div>
  );
}

export default App;
