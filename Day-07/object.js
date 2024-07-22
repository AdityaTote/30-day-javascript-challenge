// Day-7: Objects

// Activity-1: Object creation and access

// Task-1-2: Create a object with title, author, year and access its propertirs.
const objOne = () => {
    const bookDetail = {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: "1997"
    }
    console.log(bookDetail);
    console.log(bookDetail.title);
    console.log(bookDetail.author);
    console.log(bookDetail.year);
}

// Activity-2: Object Method

// Task-3: add method to object
const objMethodOne = () => {
    const bookDetail = {
        book(){
            const title = "Harry Potter and the Sorcerer's Stone";
            const author ="J.K. Rowling";
            const year =  "1997";
            console.log(title);
            console.log(author);
            console.log(year);
            return title
        }
    }
    // console.log(bookDetail);
    console.log(bookDetail.book());
    console.log(bookDetail.book().title);
}

// Task-4: Add object with parameter
const objMethodTwo = () => {
    const bookDetail = {
        book(yearInput){
            const title = "Harry Potter and the Sorcerer's Stone";
            const author ="J.K. Rowling";
            const year =  yearInput;
            console.log(title);
            console.log(author);
            console.log(yearInput);
            return {
                title,
                author,
                year
            }
        }
    }
    console.log(bookDetail.book(2012).year);
}

// Activity-3: Nested object

// Task-5-6: create a nested object and access it.
const nestedObj = () => {
    const library = {
        name: "Shri Krushna",
        book: [
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960,
                genres: ["Fiction", "Coming-of-age"],
                isAvailable: true
            },
            {
                title: "1984",
                author: "George Orwell",
                year: 1949,
                genres: ["Fiction", "Dystopian"],
                isAvailable: false
            }
        ]
    }
    // console.log(library);
    console.log(library.book[0].title);
}

// Activity-4: this keyword

// Task-7: Add method in obj using test
const thisObj = () => {
    let book = {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: "1997",
        display(){
            const title = this.title;
            const author = this.author;
            const year = this.year;
            console.log(title);
            console.log(author);
            console.log(year);
            return {
                title,
                author,
                year
            }
        }
    }
    book.display();
}

// Activity-5: Object Iteration

// Task-8: using for .. in loop to iterate over object
const iterateObjOne = () => {
    const book = {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genres: ["Fiction", "Coming-of-age"],
        isAvailable: true
    }
    for(item in book){
        console.log(`${item}: ${book[item]}`);
    }
    const keys = Object.keys(book);
    console.log("keys:",keys);
    const values = Object.values(book);
    console.log("Values:",values);
    const entries = Object.entries(book);
    console.log("Entries:",entries);
}