const myLibrary = [
    {
        title:"book1",
        author:"author1",
        pages:300,
        read:true
    },
    {
        title:"book2",
        author:"author2",
        pages:250,
        read:false
    },
    {
        title:"book3",
        author:"author3",
        pages:100,
        read:true
    },
];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    

}

function addBookToLibrary(book4) {
    
    myLibrary.push(book4);
}

function createBookCard(book){
    const card = document.createElement("div");
    card.classList.add("card");

   

    const bookInfo = `Title: ${book.title}<br>Author: ${book.author}<br>Pages: ${book.pages}<br>Read: ${book.read ? "Yes" : "No"}`;
    card.innerHTML=bookInfo;

    return card;
}

const addBook = document.getElementById("addBook");

const cards = document.getElementById("cards");



addBook.addEventListener("click",()=>{

    openForm.showModal();
   
});
    





// dynamic card update 


const removeButton = document.createElement("button");
removeButton.classList.add("removeButton");
removeButton.textContent="Remove";

for(let i=0;i<myLibrary.length;i++){

    const book = myLibrary[i];

    const card = createBookCard(book);  
    const cloneRemoveButton = removeButton.cloneNode(true);
    
    card.append(cloneRemoveButton);

    cards.append(card);
   
    
}



// dilogue box and form

const openForm = document.querySelector(".openForm")

const close = document.querySelector(".close");



close.addEventListener("click",()=>{
    openForm.close();
})

const submit = document.querySelector(".submit");


//submit click

const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");



submit.addEventListener("click",()=>{
 


    const book5= new Book(title.value,author.value,pages.value,read.checked);
    
    console.log(read.checked);

    title.value="";
    author.value="";
    pages.value="";
    read.checked=false;

    addBookToLibrary(book5);
    
    

    const newCard = createBookCard(book5);

    const cloneRemoveButton = removeButton.cloneNode(true);
    
    newCard.append(cloneRemoveButton);


    openForm.close();

    cards.append(newCard);
});



//remove code

// cards.addEventListener("click", (event) => {
//     if (event.target.classList.contains("removeButton")) {
//         // Button with class "removeButton" was clicked
//         // myLibrary.pop();
//         console.log(myLibrary);
//         // You can access the specific button or perform removal logic here
//     }
// });


//test


// Get all elements with the specified class
// const elementsWithClass = document.getElementsByClassName(className);

// Iterate through the elements and log their index (position) in the DOM
// for (let i = 0; i < elementsWithClass.length; i++) {
   
//     cards.addEventListener("click", (event) => {
//         if (event.target.classList.contains("removeButton")) {
//             // Button with class "removeButton" was clicked
//             // myLibrary.pop();
//             console.log(myLibrary);
//             // You can access the specific button or perform removal logic here
//         }
//     });
// }

// Log the total count of elements with the specified class
cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeButton")) {
        // A button with class "removeButton" was clicked

        // Find the parent card element and remove it
        const card = event.target.closest(".card");
        if (card) {
            // Remove the card from the DOM
            removeCardAndUpdateArray(card);
        }
    }
});

function removeCardAndUpdateArray(card) {
    const cardIndex = Array.from(cards.children).indexOf(card);

    if (cardIndex !== -1) {
        // Remove the card from the DOM
        card.remove();

        // Remove the corresponding book from the array
        myLibrary.splice(cardIndex, 1);
    }
}