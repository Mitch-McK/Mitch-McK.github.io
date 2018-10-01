// Add listener to move items to the finished list
let readyToFinish = document.querySelector('.List');
readyToFinish.addEventListener('click', function(thing) {
    if(thing.target.tagName === 'LI' && thing.target.parentNode.id === 'list'){
        thing.target.style.textDecoration = "line-through";
        document.getElementById('finishedList').appendChild(thing.target);
        // now, update datastore
        let incStr = localStorage.getItem('listItem');
        let strong = JSON.parse(incStr);
        let val = thing.target.innerHTML;
        if(strong.complete){
            console.log("Complete exists and adding the new val now. . .")
            strong.complete.push(val);
            let indexVal = strong.incomplete.indexOf(val);
            strong.incomplete.splice(indexVal, 1);
            let str = JSON.stringify(strong);
            localStorage.setItem('listItem', str);
        } else {
            console.log("Complete doesn't exist. Creating it now. . .");
            strong['complete'] = [val];
            let indexVal = strong.incomplete.indexOf(val);
            strong.incomplete.splice(indexVal, 1);
            let str = JSON.stringify(strong);
            localStorage.setItem('listItem', str);
        }
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
        // now, update datastore
        let incStr = localStorage.getItem('listItem');
        let strong = JSON.parse(incStr);
        let val = thing.target.innerHTML;
        strong.incomplete.push(val);
        let indexVal = strong.complete.indexOf(val);
        strong.complete.splice(indexVal, 1);
        let str = JSON.stringify(strong);
        localStorage.setItem('listItem', str);
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
        document.getElementById('userValue').value = "";
        buildStorage(userValue);
    }
}

function buildStorage(newTodo){
    if(localStorage.getItem('listItem')){
        let incStr = localStorage.getItem('listItem');
        let strong = JSON.parse(incStr);
        strong.incomplete.push(newTodo);
        let str = JSON.stringify(strong);
        localStorage.setItem('listItem', str);
    } else {
        let createObject = {};
        createObject['incomplete'] = [newTodo];
        let str = JSON.stringify(createObject);
        localStorage.setItem('listItem', str);
    }
}

function setVals(){
    let incStr = localStorage.getItem('listItem');
    let strong = JSON.parse(incStr);
    for(i = 0; i < strong.incomplete.length; i++){
        let li = document.createElement('li');
        let inside = strong.incomplete[i];
        let text = document.createTextNode(inside);
        li.appendChild(text);
        document.getElementById('list').appendChild(li);
    }
    for(j = 0; j < strong.complete.length; j++){
        let li = document.createElement('li');
        let inside = strong.complete[j];
        let text = document.createTextNode(inside);
        li.appendChild(text);
        li.style.textDecoration = "line-through";
        document.getElementById('finishedList').appendChild(li);
    }
    
}
