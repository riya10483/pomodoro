
// setInterval(function () {
//     seconds -= 1
//     let timerElement = document.getElementById("timer")
//     timerElement.innerHTML = seconds

// }, 1000);

let startTiming = 0
let paused = false;
let time1,time2, time3
let timerText = "0:00"

const count = document.getElementById("timer")

let interval = setInterval(updateTimer, 1000)

function updateTimer(){

    let minutes = Math.floor(startTiming/60)
    let seconds = startTiming % 60 

    //condition ? do this : do that
    seconds  = seconds < 10 ?  '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    timerText = `${minutes}:${seconds}`
    
    
    if (startTiming <= 0)
    {
        clearInterval(interval)
        clearInterval(interval2)
        count.innerHTML = "00:00"
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

    /*if(paused) {
        clearInterval(interval);
        clearInterval(interval2);
        pauseButton.textContent = 'Resume';
    }
    else {
        startTimer();
        pauseButton.textContent = 'Pause';
    }*/
}

function startTimer() {
    interval = setInterval(()=>{startTiming--;updateTimer()}, 1000);
    interval2 = setInterval(()=>{count.innerHTML = timerText}, 100);
}

async function chooseTime() {
    const focusLength = document.getElementById('time1').value *60;
    const longBreak = document.getElementById('time2').value*60;
    const shortBreak = document.getElementById('time3').value*60;

    if(focusLength!= 0 && longBreak != 0 && shortBreak != 0){
        function timeout(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms*1000);
            });
        }
        async function countdown(time4) {
            startTiming = time4 +1
            startTimer()
            await timeout(time4+1)          
        }
                //document.getElementById('status').value = "Focus Session";

        while(true){
        document.getElementById("status").textContent = "Focus Session";
        await countdown(focusLength)
        document.getElementById("status").textContent = "Short Break";
        await countdown(shortBreak)
        document.getElementById("status").textContent = "Focus Session";
        await countdown(focusLength)
        document.getElementById("status").textContent = "Short Break";
        await countdown(shortBreak)
        document.getElementById("status").textContent = "Focus Session";
        await countdown(focusLength)
        document.getElementById("status").textContent = "Short Break";
        await countdown(shortBreak)
        document.getElementById("status").textContent = "Focus Session";
        await countdown(focusLength)
        document.getElementById("status").textContent = "Long Break";
        await countdown(longBreak)
}
    }
}



