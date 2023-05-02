// import * as nsfwjs from './nsfwjs.min.js';

const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #33cc99;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }

  ._3 {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }

  #mfa_input {
    width: 200px;
    // height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    color: #000;
  }

  #mfa_submit {
    width: 100px;
    // height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all ease 0.5s;
  }

  #mfa_submit:hover {
    background-color: #ccc;
    color: #000;
  }

  #mfa_error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

   </style>`;
};

const generateHTML = (pageName) => {
  return `
   
   <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
      <div class='_404'>404</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>STUDYING > ${pageName}</div>
      <div class="_3">
        <input id='mfa_input' type="text" placeholder="Enter MFA Code" />
        <button id='mfa_submit'>Submit</button>
        <small id='mfa_error'></small>
      </div>
  </div>
   `;
};


// // open the deafult popup if the child's user id is not in the local storage
// if (!localStorage.getItem("childUserId")) {
//   // document.head.innerHTML = generateSTYLES();
//   // document.body.innerHTML = generateHTML("WORKSPACE");
//   chrome.runtime.sendMessage({ message: "open_popup" });
// }


chrome.runtime.sendMessage({ message: "open_popup" });

// query popup.js for the childId
chrome.runtime.sendMessage({ from: "content", submit: "get_childId" }, function (response) {
  console.log("responce from popup.js", response);
  if (response.childId) {
    localStorage.setItem("childId", response.childId);
    fetchBlockUrls()
  }
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'childIdSave')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    var domInfo = {
      inputs: document.querySelectorAll('*').length,
      // blockedUrls: localStorage.getItem("blockedUrls")
    };
    // save the child id in the local storage
    localStorage.setItem("childId", msg.childId);

    fetchBlockUrls()

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }
});




let blockedUrls = [];

// check the local storage for blocked urls , if not present then fetch from the server
if (localStorage.getItem("blockedUrls")) {
  blockedUrls = JSON.parse(localStorage.getItem("blockedUrls"));
  if (blockedUrls.includes(window.location.hostname)) {
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML(window.location.hostname.toUpperCase());
  }
}



function fetchBlockUrls() {

  if (localStorage.getItem("childId") && localStorage.getItem("childId") != "undefined" && localStorage.getItem("childId") != "null") {
    fetch("https://cs-dj.workspaceomkarb.repl.co/child/device/urls?childId=" + localStorage.getItem("childId"))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // result = [{"url":"www.youtube.com","_id":"643194f0fce3c520edfa147b"}, {"url":"www.facebook.com","_id":"643194f0fce3c520edfa147b"}}] , so we need to extract the urls

        blockedUrls = data.map((item) => item.url);
        console.log(blockedUrls)
        if (blockedUrls.includes(window.location.hostname)) {
          document.head.innerHTML = generateSTYLES();
          document.body.innerHTML = generateHTML(window.location.hostname.toUpperCase());
          // window.location.href = "https://www.google.com";
        }else{
          // blur all the nsfw images on the page
          blurNsfwImages()
        }
        localStorage.setItem("blockedUrls", JSON.stringify(blockedUrls));
      });



    // call parents api whenever the child request for a website or refresh the page
    // fetch("/////// hit api to call parents api whenever the child request for a website or refresh the page")

  } else {
    // change the content of the page to the default page and ask user to click on the extension icon
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Click on the extension icon to get started Or refresh the page");
  }
}

fetchBlockUrls()


// code to blur all the nsfw images on the page using the nsfwjs library


const modelPath = chrome.runtime.getURL('models/');
const nsfwThreshold = 0.8;

async function blurNsfwImages() {
  console.log("blurNsfwImages");
  const imgElements = document.querySelectorAll('img');
  console.log(imgElements);
  const model = await nsfwjs.load(modelPath);

  for (let i = 0; i < imgElements.length; i++) {
    const img = imgElements[i];
    console.log(img);
    try {
      const predictions = await model.classify(img);
      const nsfwScore = predictions.find(p => p.className === 'Porn' || p.className === 'Explicit').probability;

      if (nsfwScore >= nsfwThreshold) {
        img.style.filter = 'blur(10px)';
      }
    } catch (err) {
      console.error(err);
    }
  }
}

// Listen for DOMContentLoaded event to start the blurring process
document.addEventListener('DOMContentLoaded', blurNsfwImages);


// add a listener to the mfa_submit button if it is loaded on the page
document.addEventListener('DOMContentLoaded', function () {
  const mfa_submit = document.getElementById('mfa_submit');
  if (mfa_submit) {
    mfa_submit.addEventListener('click', function () {
      const mfa_input = document.getElementById('mfa_input');
      if (mfa_input.value && mfa_input.value.length === 6) {
        // send the mfa code to the server
        fetch("https://cs-dj.workspaceomkarb.repl.co/user/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              parent_id: "6431e82c9a5ab303ed058905",
              pin: mfa_input.value,
            }),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data=="true") {
              // remove the 404 page and reload the page
              document.head.innerHTML = "";
              document.body.innerHTML = "";
              window.location.reload();
            }else{
              // show the error message
              document.getElementById("mfa_error").innerHTML = "Invalid MFA code";
            }
          })
          .catch((err) => {
            console.log(err);
          }
          );
      }
    });
  }





  blurNsfwImages()
});
