const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener("click", ( )=>{
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ""; // clear the input
        input.focus(); // set the focus back to the input
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
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
