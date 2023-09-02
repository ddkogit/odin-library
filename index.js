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
    return myLibrary.push(this.title,this.author,this.pages,this.read);
    
}

function addBookToLibrary(title,author,pages,read) {
    
    myLibrary.push({
        title,author,pages,read
    })
}



console.log(myLibrary);
addBookToLibrary("book4","author4",500,false);
console.log(myLibrary);


const cards = document.getElementById("cards");

for(let i=0;i<myLibrary.length-1;i++){

    const book = myLibrary[i];

    const card = document.createElement("div");
    card.classList="card";

    const bookInfo = `Title: ${book.title}<br>Author: ${book.author}<br>Pages: ${book.pages}<br>Read: ${book.read ? "Yes" : "No"}`;
    card.innerHTML=bookInfo;
    
 

    cards.append(card);
   
    
}


const addBook = document.getElementById("addBook");

addBook.addEventListener("click",()=>{
    Book();
});
    


