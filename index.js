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

function Book() {
  
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

for(let i=0;i<3;i++){

    const card = document.createElement("div");
card.classList="card";
    card.innerHTML="hello";
    card.style.width="50vw";
    card.style.height="50vh";
    
    card.style.backgroundColor="green";
    
    cards.append(card);
}
    


