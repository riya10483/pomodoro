
// setInterval(function () {
//     seconds -= 1
//     let timerElement = document.getElementById("timer")
//     timerElement.innerHTML = seconds

// }, 1000);

let startTiming = 25
let time = startTiming * 60
let paused = false;

const count = document.getElementById("timer")

let interval = setInterval(updateTimer, 1000)
function updateTimer(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    //condition ? do this : do that
    seconds  = seconds < 10 ?  '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--
    
    // if (time <= -1)
    // {
    //     clearInterval(interval)
    //     time = -1
    // }
}

function checkTimeZero(){
    if (time <= -1)
        {
            clearInterval(interval)
            time = -1
        }
}

updateTimer()

let itemCount = 3;

function addItem() {
    const itemText = document.getElementById('newItemText').value;
    if (itemText.trim() !== "") {
        itemCount++;
        
        // Create a new list item
        const newListItem = document.createElement('li');
        
        // Create a new checkbox input
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.id = 'item' + itemCount;
        
        // Create a label for the checkbox
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', newCheckbox.id);
        newLabel.textContent = itemText;

        // Append checkbox and label to the list item
        newListItem.appendChild(newCheckbox);
        newListItem.appendChild(newLabel);

        // Append the new list item to the checklist
        document.getElementById('checklist').appendChild(newListItem);

        // Clear the input field after adding the item
        document.getElementById('newItemText').value = "";
    } else {
        alert("Please enter a valid item.");
    }
}

function pause() {
    const pauseButton = document.querySelector('.control-buttons button');
    paused = !paused;

    if(paused) {
        clearInterval(interval);
        pauseButton.textContent = 'Resume';
    }
    else {
        startTimer();
        pauseButton.textContent = 'Pause';
    }
}

function startTimer() {
    interval = setInterval(updateTimer, 1000);
}

function chooseTime() {
    const focusLength = document.getElementById('time1').value;
    const longBreak = document.getElementById('time2').value;
    const shortBreak = document.getElementById('time3').value;
    // for (let i = 0; i < 4; i++) {
        // focus session
        startTiming = focusLength;
        time = startTiming * 60;
        updateTimer();
        // switch to short break once 0
        if (time <= -1) {
            // clearInterval(interval)
            startTiming = shortBreak;
            time = startTiming * 60;
            updateTimer();
        }
    // }
}