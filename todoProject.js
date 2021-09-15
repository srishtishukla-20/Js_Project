
function deletetask(index) {
    var list = JSON.parse(localStorage.getItem("keys"));
    list.splice(index, 1);
    localStorage.setItem("keys", JSON.stringify(list));
    ShowTask();
}

function ShowTask() {
    var local = JSON.parse(localStorage.getItem("keys"))
    li = ""
    index = 0
    for (j of local) {
        li += "<li>" + j + "<input type='button' value='delete' onclick='deletetask(" + index + ")'/> </li>"
        index++
    }
    document.getElementById("todoList").innerHTML = li
    // var list = JSON.parse(localStorage.getItem("keys"))
    var to_show = "you have" + index + "tasks"
    document.getElementById("footer").innerHTML = to_show;
}
function clearList( ) {
    // var docid = document.getElementById("input1");
    // var footer = document.getElementById("footer");
    localStorage.removeItem("keys");
    document.getElementById("todoList").innerHTML=" ";
    document.getElementById("footer").innerHTML=" ";
    

}

function addToList() {
    // console.log("I will do this task")
    var DocumentGet = document.getElementById("input1");
    var loc = localStorage.getItem("keys");
    list = []
    if (loc == null) {
        list.push(DocumentGet.value)
        localStorage.setItem("keys", JSON.stringify(list))
    } else {
        var storage = JSON.parse(loc);
        storage.push(DocumentGet.value)
        localStorage.setItem("keys", JSON.stringify(storage))
    }
    DocumentGet.value = " "
    ShowTask()

   

}


