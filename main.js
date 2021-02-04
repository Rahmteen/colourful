document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('red').addEventListener ('click', () =>  {
      chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
        chrome.tabs.insertCSS(tabs[0].id, 
          {code: `html, body {background: rgb(140, 70, 70) !important; color: red !important;}`}
        );
      });
    }, false);
    document.getElementById('grey').addEventListener ('click', () =>  {
        chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
          chrome.tabs.insertCSS(tabs[0].id, 
            {code: `html, body {background: rgb(155, 155, 155) !important; color: red !important;}`}
          );
        });
      }, false);
      document.getElementById('green').addEventListener ('click', () =>  {
        chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
          chrome.tabs.insertCSS(tabs[0].id, 
            {code: `html, body {background: rgb(109, 172, 109) !important; color: red !important;}`}
          );
        });
      }, false);
      document.getElementById('random').addEventListener ('click', () =>  {
        chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
          chrome.tabs.insertCSS(tabs[0].id, 
            {code: `html, body {
                -webkit-animation: background 8s cubic-bezier(1,0,0,1) infinite;
                animation: background 8s cubic-bezier(1,0,0,1) infinite;  
              }
              
              
              @-webkit-keyframes background {
                0% { background-color: #f99; }
                33% { background-color: #9f9; }  
                67% { background-color: #99f; }
                100% { background-color: #f99; }
              }
              
              @keyframes background {
                0% { background-color: #f99; }
                33% { background-color: #9f9; }  
                67% { background-color: #99f; }
                100% { background-color: #f99; }
              }`}
          );
        });
      }, false);
});












///
// var colors = ['green', 'orange', 'blue']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
// var active = 0;
// setInterval(function(){
//     document.querySelector('body').style.background = colors[active];
//     active++;
//     if (active == colors.length) active = 0;
// }, 30000);


// bodyTag.setAttribute('style', `background-color: red !important`, );
// bodyTag.setAttribute('style', `background: red !important`);