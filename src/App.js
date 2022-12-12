import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
     
    </div>
  );
}

export default App;
