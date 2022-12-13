import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  
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

                const [orderNumber, setOrderNumber] = useState(orderNumber)
                const [date, setDate] = useState(date)
                const [dasher, setDasher] = useState(dasher)
                const [cost, setCost] = useState(cost)

                const orderNumber = tab[i].children[0].innerText;
                const date = tab[i].children[1].innerText;
                const dasher = tab[i].children[2].innerText;
                const cost = tab[i].children[3].innerText;


                const data= {
                  "orderNumber":orderNumber,
                  "date": date,
                  "dasher":dasher,
                  "cost": cost
                }

                const handleSubmit = (e) => {
                  e.preventDefault();

                  const objt= {orderNumber, date, dasher, cost}

                  axios.post("https://sheet.best/api/sheets/b41c3153-84ed-4ed5-a308-0f02e47df9f2", data)
                   .then(response =>{
                  console.log(response) 
                   })
                  }



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

