// Add listener to move items to the finished list
let readyToFinish = document.querySelector('.List');
readyToFinish.addEventListener('click', function(thing) {
    if(thing.target.tagName === 'LI' && thing.target.parentNode.id === 'list'){
        thing.target.style.textDecoration = "line-through";
        document.getElementById('finishedList').appendChild(thing.target);
    } else {
        console.log('Something went wrong. . . figure it out later.')
    }
});

// Add listener to move items back to the main list
let notReallyFinished = document.querySelector('.ListTwo');
notReallyFinished.addEventListener('click', function(thing) {
    if(thing.target.tagName === 'LI' && thing.target.parentNode.id === 'finishedList'){
        thing.target.style.textDecoration = "";
        document.getElementById('list').appendChild(thing.target);
    } else {
        console.log('Something went wrong. . . figure it out later.')
    }
});

// Function to add new task to list
function newElement(){
    let li = document.createElement('li');
    let userValue = document.getElementById('userValue').value;
    let text = document.createTextNode(userValue);
    li.appendChild(text);
    
    if(userValue == ""){
        alert('You must enter a value');
    } else {
        document.getElementById('list').appendChild(li);
    }
}
