
// setInterval(function () {
//     seconds -= 1
//     let timerElement = document.getElementById("timer")
//     timerElement.innerHTML = seconds

// }, 1000);

let startTiming = 25
let time = startTiming * 60
let paused = false;
let time1,time2, time3

const count = document.getElementById("timer")

let interval = setInterval(updateTimer, 1000)
function updateTimer(time1, time2, time3){
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    //condition ? do this : do that
    seconds  = seconds < 10 ?  '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--
    
    if (time <= -1)
    {
        clearInterval(interval)
        time = -1
    }
}



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
    startTiming = focusLength;
    time = startTiming * 60;

    if(focusLength!= 0 && longBreak != 0 && shortBreak != 0){
        updateTimer(focusLength, shortBreak, longBreak)
    }
    if (time <= -1) {
        stat
    }
}

//this loop will run for 4 focus sessions, with a short break in between each and a long break at the end(put outside the loop)
for(let i=0; i < 4; i++){


}

