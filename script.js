// we are taking id's form the HTML file with the help of queryselector

const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

//  next we are using event listener for keys
// it has a function which will execute after calling the function
item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = "";
        }
    }
)
// this is the main content of javascript. 
//function addToDo(item){ }
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = 
    `
         ${item}
        <i class="fas fa-times"></i>
    `;
// this is another event listener when u clicked inside the box it will work.
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}