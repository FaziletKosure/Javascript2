const bookTitles = [
  "romeo_and_juliet ",
  "harry_potter_and _the_sorcerer_stone",
  "the_book_of_css3",
  "catching_fire",
  "eloquent_javaScript",
  "hamlet",
  " pro_html5_programming",
  "a_christmas_carol",
  "divergent ",
  "the_handmaid_tale"
];
//console.log("bookTitles");

//1.3 Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.
/*function createUlElement(ul) {
    for (var i = 0; i < bookTitles.length; i++) {
        const listText = bookTitles[i];
        const listElement = document.createElement('li');
        listElement.innerHTML = listText;
        ul.appendChild(listElement);
    }
}

function booksId() {
    const books = document.getElementById('books');
    const ul = document.createElement('ul');
    books.appendChild(ul);
    createUlElement(ul);
}
window.addEventListener('load', booksId);*/

//1.4 Make an object (not an array!) containing information for each book

const infoOfBooks = {
  romeo_and_juliet: {
    title: "Romeo and Juliet",
    language: "	English",
    author: " William Shakespeare"
  },
  harry_potter_and_the_sorcerer_stone: {
    title: "Harry Potter and the Sorcerer Stone",
    language: "	English",
    author: " J.K. Rowling"
  },
  the_book_of_css3: {
    title: "The Book of CSS3",
    language: "	English",
    author: "Peter Gasston"
  },
  catching_fire: {
    title: "Catching fire",
    language: "	English",
    author: "Suzanne Collins"
  },
  eloquent_javaScript: {
    title: "Eloquent JavaScript",
    language: "	English",
    author: "Marijn Haverbeke"
  },
  hamlet: {
    title: "Hamlet",
    language: "	English",
    author: " William Shakespeare"
  },
  pro_html5_programming: {
    title: " Pro HTML5 Programming",
    language: "	English",
    author: "Peter Lubber,‎ Frank Salim,‎ Brian Albers"
  },
  a_christmas_carol: {
    title: "A Christmas Carol",
    language: "	English",
    author: "Charles Dickens"
  },
  divergent: {
    title: "Divergent",
    language: "	English",
    author: "Veronica Roth"
  },
  the_handmaid_tale: {
    title: "The Handmaid Tale",
    language: "	English",
    author: "Margaret Atwood"
  }
};
//Book List
const title = document.getElementById("books");
const h1 = document.createElement("h1");
h1.innerHTML = "Book List";
h1.classList.add("book-header");
title.appendChild(h1);
h1.addEventListener("mouseover", () => {
  h1.style.backgroundColor = "red";
  h1.style.color = "black";
});
h1.addEventListener("mouseout", () => {
  h1.style.color = "blue";
  h1.style.backgroundColor = "white";
});

//1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that.

/*function createUlElement(ul) {
    for (var key in infoOfBooks) {
        const titleText = infoOfBooks[key].title;
        const languageText = infoOfBooks[key].language;
        const authorText = infoOfBooks[key].author;
        const titleElement = document.createElement('h1');
        const languageElement = document.createElement('p');
        const authorElement = document.createElement('p');
        const li = document.createElement('li');
        titleElement.innerText = titleText;
        languageElement.innerText = languageText;
        authorElement.innerText = authorText;
        li.appendChild(titleElement);
        li.appendChild(languageElement);
        li.appendChild(authorElement);
        ul.appendChild(li);
    }
}


function booksId() {
    const books = document.getElementById('books');
    const ul = document.createElement('ul');
    books.appendChild(ul);
    createUlElement(ul);
}
window.addEventListener('load', booksId);*/

//1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again,
// and as value the path to the image source

const images = {
  romeo_and_juliet: "./img/romeo-juliet.jpg",
  harry_potter_and_the_sorcerer_stone: "./img/harry potter.jpg",
  the_book_of_css3: "./img/css3.jpg",
  catching_fire: "./img/catching_fire_book_cover.jpg",
  eloquent_javaScript: "./img/javascript.jpg",
  hamlet: "./img/hamlet.jpg",
  pro_html5_programming: "./img/html5.jpg",
  a_christmas_carol: "./img/A Christmas Carol.jpg",
  divergent: "./img/divergent.jpg",
  the_handmaid_tale: "./img/The Handmaid Tale.jpg"
};

//1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys).
//Then write a function which places an image at the corresponding li element

function createUlElement(ul) {
  console.log(Object.keys(infoOfBooks));
  Object.keys(infoOfBooks).forEach(key => {
    const titleText = infoOfBooks[key].title;
    console.log(infoOfBooks[key].title);
    const authorText = infoOfBooks[key].author;
    const languageText = infoOfBooks[key].language;

    const titleElement = document.createElement("h1");
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", images[key]);
    imageElement.setAttribute("alt", key);
    imageElement.setAttribute("width", "70%");
    const languageElement = document.createElement("p");
    const authorElement = document.createElement("p");
    const li = document.createElement("li");
    li.setAttribute("id", key);
    titleElement.innerText = titleText;
    authorElement.innerHTML = `<strong>Author: </strong>  ${authorText}`;
    languageElement.innerText = "(" + languageText + ")";

    li.appendChild(titleElement);
    li.appendChild(imageElement);
    li.appendChild(authorElement);
    li.appendChild(languageElement);

    ul.appendChild(li);
  });
}

function booksId() {
  const books = document.getElementById("books");
  const ul = document.createElement("ul");
  books.appendChild(ul);
  createUlElement(ul);
}
window.addEventListener("load", booksId);
