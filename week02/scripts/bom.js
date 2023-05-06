const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener("click", ( )=>{
    const element = input.value;
    const liElement = document.createElement("li");
    const deleteButton = document.createElement("button");

    liElement.textContent = input.value;
    deleteButton.textContent ="❌";

    liElement.append(deleteButton);

    list.append(liElement);

    deleteButton.addEventListener("click", () =>{
        liElement.remove(liElement);
        input.focus();
    });

    input.focus();

    input.value = "";
})
    

  