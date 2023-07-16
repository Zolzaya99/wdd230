const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener("click", ( )=>{
    if (input.value != '') { 
        displayList(input.value); 
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = ""; 
        input.focus(); 
    }
    });

function displayList (item) {
    const element = input.value;
    const liElement = document.createElement("li");
    const deleteButton = document.createElement("button");

    liElement.textContent = item;
    deleteButton.textContent ="❌";

    liElement.append(deleteButton);

    list.append(liElement);

    deleteButton.addEventListener("click", () =>{
        liElement.remove(liElement);
        input.focus();
    });

}
    
function setChapterList() {
    localStorage.setItem("MyBOMList", JSON.stringify(chaptersArray));
}
  
function getChapterList() {
    return JSON.parse(localStorage.getItem("MyBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
