
// setInterval(function () {
//     seconds -= 1
//     let timerElement = document.getElementById("timer")
//     timerElement.innerHTML = seconds

// }, 1000);

const startTiming = 25
let time = startTiming * 60

const count = document.getElementById("timer")

setInterval(updateTimer, 1000)
function updateTimer(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    //condition ? do this : do that
    seconds  = seconds < 10 ?  '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--
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
