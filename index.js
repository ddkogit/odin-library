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

const addBook = document.getElementById("addBook");

addBook.addEventListener("click",()=>{
    const book4= new Book("book4","author4",500,false);
    
    addBookToLibrary(book4);

    

});
    









const cards = document.getElementById("cards");

for(let i=0;i<myLibrary.length;i++){

    const book = myLibrary[i];

    const card = document.createElement("div");
    card.classList="card";

    const bookInfo = `Title: ${book.title}<br>Author: ${book.author}<br>Pages: ${book.pages}<br>Read: ${book.read ? "Yes" : "No"}`;
    card.innerHTML=bookInfo;
    
 

    cards.append(card);
   
    
}



