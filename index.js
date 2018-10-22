let ranId = 1;

const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
}

const allowDrop = (event) => {
    event.preventDefault();
}

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(`${data}`);
    console.log(element)
    event.currentTarget.style.background = 'white'
    try {
        event.target.appendChild(element);
    } catch (error) {
        console.warn("you can't move the item to the same place")
        console.log(error)
    }
}

const addButton = (event) => {
    event.preventDefault();
    const parentElement = event.target.parentNode;
    const newElement = document.createElement('div');
    newElement.className += 'work-item';
    newElement.draggable = 'true';
    newElement.addEventListener('dragstart', dragStart);
    ranId = ranId + 1;
    newElement.id = ranId;
    newElement.innerHTML = '<p contenteditable="true">about your work item</p>'
    try {
        parentElement.insertBefore(newElement, document.getElementById("1"));
    } catch (error) {
        console.warn("you can't move the item to the same place")
        console.log(error)
    }
} 
