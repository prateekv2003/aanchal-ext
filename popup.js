function closeWindow() {
    window.close();
}
// save the entered user id in the local storage and close the window
function submitForm() {
    var childId = document.querySelector('input').value;
    // a post request to register the user id in the database using fetch
    fetch('https://cs-dj.workspaceomkarb.repl.co/child/device/web', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            childId: childId
        })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem('childId', childId);
            // ...query for the active tab to store the child id in the local storage of active tab...
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, tabs => {
                // ...and send a request for the DOM info...
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { from: 'popup', subject: 'childIdSave', childId: localStorage.getItem('childId') },
                    // ...also specifying a callback to be called 
                    //    from the receiving end (content script).
                    setDOMInfo);
            });
            closeWindow();
        })
        .catch((error) => {
            console.error('Error:', error);
            // show the error message in span and change the color of the span to red
            document.querySelector('span').textContent = 'Please enter a valid user id';
            document.querySelector('span').style.color = 'red';
        });
}

document.addEventListener('DOMContentLoaded', function () {
    let formSubmit = document.getElementById('form-submit');
    // onClick's logic below:
    formSubmit.addEventListener('click', function () {
        // first check if the user id is entered or not
        if (document.querySelector('input').value == '') {
            alert('Please enter your user id');
            return;
        }
        submitForm();
    });



    let closeBTN = document.getElementById('close-window');
    // onClick's logic below:
    closeBTN.addEventListener('click', function () {
        closeWindow();
    });


    // // onchange event for the input field
    // let input = document.querySelector('input');
    // input.addEventListener('change', function () {
    //     console.log(input.value);
    // });

    // ...query for the active tab to store the child id in the local storage of active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'childIdSave', childId: localStorage.getItem('childId') },
            // ...also specifying a callback to be called 
            //    from the receiving end (content script).
            setDOMInfo);
    });

});


// listen to the message from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.from === 'content' && request.subject === 'get_childId') {
        // send the child id to the content script
        sendResponse({ childId: localStorage.getItem('childId') });
    }
});



// Update the relevant fields with the new data.
const setDOMInfo = info => {
    // document.getElementById('inputs').textContent = info.inputs;
    console.log(info);
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // check if the user id is saved in the local storage or not
    if (localStorage.getItem('childId')) {
        // if the user id is saved in the local storage then show the massage that the user is already logged in
        document.querySelector('input').value = localStorage.getItem('childId');
        document.querySelector('input').disabled = true;
        document.querySelector('button').disabled = true;
        document.querySelector('button').textContent = 'You are already logged in';
        document.querySelector('button').style.backgroundColor = 'grey';
        document.querySelector('button').style.cursor = 'not-allowed';
        // closeWindow();
    }

    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'DOMInfo' },
            // ...also specifying a callback to be called 
            //    from the receiving end (content script).
            setDOMInfo);
    });
});



// const toggleBlur = document.getElementById('toggleBlur');

// // Send message to content.js to toggle blur filter
// toggleBlur.addEventListener('change', function () {
//     console.log("toggle clicked!");
//     // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlur" });
//     // });

//     // ...query for the active tab...
//     chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     }, tabs => {
//         // ...and send a request for the DOM info...
//         chrome.tabs.sendMessage(
//             tabs[0].id,
//             { from: 'popup', subject: 'toggleBlur' },
//             // ...also specifying a callback to be called 
//             //    from the receiving end (content script).
//             setDOMInfo);
//     });
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === "updateToggleState") {
//         toggleBlur.checked = request.isEnabled;
//     }
// });