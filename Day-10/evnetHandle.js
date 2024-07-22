// Day-10: Event Handling

// Activity-1: Basic Event Handling

// Task-1: Click Event to change text
const clicEv = () => {
    const btn = document.getElementById("2");
    btn.addEventListener('click', () => {
        const p = document.getElementById("1");
        p.textContent = "Changed Text"
    })
}

// Task-2: Add double click event
const clicEvTwo = () => {
    const toggleImage = document.getElementById("toggleImage");
    toggleImage.addEventListener('dblclick', () => {
        if (toggleImage.style.display === 'none') {
            toggleImage.style.display = 'inline-block';
        } else {
            toggleImage.style.display = 'none';
        }
    })
}

// Activity-2: Mouse Event

// Task-3: Add mousever event
const mouseOv = () => {
    const p = document.getElementById("1");
    p.addEventListener('mouseover', () => {
        p.style.backgroundColor = "Red"
    })
}

// Task-4: Add mouseOut eenvent
const mouseOut = () => {
    const p = document.getElementById("1");
    p.addEventListener('mouseout', () => {
        p.style.backgroundColor = "Red"
    })
}

// Activity-3: Add key Event

// Task-5: Add keydown event
const keyDown = () => {
    const inp = document.getElementById("3");
    inp.addEventListener('keydown', (e) => {
        console.log(e.key);
    })
}

// Task-6: Add keyUp event
const keyUp = () => {
    const inp = document.getElementById("3");
    const out = document.getElementById("4");
    inp.addEventListener('keyup', function(e){
        // console.log(this);
        out.textContent = this.value;
    })
}

// Activity-4: Form Event

// Task-7: Add sumbit event to form
const subEve = () => {
    const myForm = document.getElementById("myForm");
    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        console.log(this);
        const formData = new FormData(this)
        console.log(formData);
        for(let[key, value] of formData.entries()){
            console.log(`key:${key}, value:${value}`);
        }
    })
}

// Task-8: Add change event
const changeEve = () => {
    const drop = document.querySelector("select");
    drop.addEventListener('change', (e) => {
        console.log(e.target.value);
    })
}

// Activity-5: Event Delegation

// Task-9-10: Added click event to parent node and add child elemt
const parentClick = () => {
    const parent = document.getElementById("parent-list");
    const btn = document.getElementById("click");
    parent.addEventListener('click',(e) => {
        // console.log(e.target);
        // console.log(e.target.nodeName);
        if( e.target && e.target.nodeName === "LI"){
            console.log(e.target.textContent);
        }
    })

    btn.addEventListener('click', () => {
        const newElem = document.createElement("li");
        newElem.textContent = "Laravel"
        parent.appendChild(newElem)
    })
}