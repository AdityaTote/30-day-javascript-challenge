// Day-9: Dom Manipulation

// Activity 1: Selecting and Manupulation Elements

// Task-1: Select element by id and change its text.
const idMan = () => {
    const p = document.getElementById("para");
    p.textContent = "Man are brave"
}

// Task-2: Select Element by class and change is background color
const classMan = () => {
    idMan()
    const clas = document.getElementsByClassName("para1");
    for(let  i =0; i < clas.length; i++){
        clas[i].style.backgroundColor = "Red";
    };
}

// Activity-2: Creating and appending Elemenet

// Task-3: create a div elemet and apen to body
const apendDiv = () => {
    let div = document.createElement("div");
    div.className = "text";
    div.id = "8";
    div.style.color = "white";
    const text = document.createTextNode("This is created element")
    div.appendChild(text)
    document.body.appendChild(div)
}

// Task-4: create a li and append it.
const appendUl = () => {
    let liOne = document.createElement("li");
    const addtextOne = document.createTextNode("JavaScript");
    liOne.appendChild(addtextOne)
    document.getElementById("1").appendChild(liOne)
    let liTwo = document.createElement("li");
    const addtextTwo = document.createTextNode("Java");
    liTwo.appendChild(addtextTwo)
    document.getElementById("1").appendChild(liTwo);
    let liThree = document.createElement("li");
    const addtextThree = document.createTextNode("Python");
    liThree.appendChild(addtextThree)
    document.getElementById("1").appendChild(liThree);
}

// Activity-3: Removing Element

// Task-5: Select elemnt reove it from dom
const removElem = () => {
    const elem = document.getElementById("para")
    elem.remove()
}

// Task-6: Removing last element
const removeLast = () => {
    appendUl()
    const parent = document.getElementById("div1");
    console.log(parent);
    console.log(parent.lastChild)
    parent.lastElementChild.remove()
}

// Activity-4: Modifying Attribute and classes

// Task-7: Select an html and change its attribute
const changeAttri = () => {
    const src = "data:image/jpeg;base64,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"
    const img = document.getElementById("img-1")
    img.setAttribute("src",src)
}

const cssRemov = () => {
    const p = document.getElementById("para");
    console.log(p);
    p.removeAttribute("style")
}

// Activity-5: Event Handling

// Task-9: add click event to chnage the text
const clickMe = () => {
    const btn = document.getElementById("clickMe")
    btn.addEventListener('click', (e) => {
        if(e){
            const p = document.getElementById("edit");
            p.textContent = "Changed"
        }
    })
}

// Task-10: add mouseover event
const musOver = () => {
    const ele = document.getElementById("myElement");
    ele.addEventListener('mouseover', function (e){
        // console.log(e.target);
        this.style.borderColor = "orange"
    })
}