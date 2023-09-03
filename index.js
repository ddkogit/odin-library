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




for(let i=0;i<myLibrary.length;i++){

    const book = myLibrary[i];

    const card = createBookCard(book);  
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent="Remove";
    
    card.append(removeButton);

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
 

    const book4= new Book("book4","author4",500,false);
    const book5= new Book(title.value,author.value,pages.value,read.value);
    
    title.value="";
    author.value="";
    pages.value="";
    read.value="";

    addBookToLibrary(book5);
    
    

    const newCard = createBookCard(book5);

    openForm.close();

    cards.append(newCard);
});





