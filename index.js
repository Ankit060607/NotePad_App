let todo = [];
let req = prompt("Enter Your Request : ");
while(true){
    if(req == "quit"){
        console.log("Quitting The Game!");
        break;
    }

    if(req == "list"){
        for(let i = 0;i<todo.length;i++){
            console.log(i ,todo[i])
        }
    }

    else if(req == "add"){
        let task = prompt("Enter the task you want to add : ");
        todo.push(task);
        console.log("Task Added!");
    }

    else if(req == "delete"){
        let inde = prompt("Enter the task index You Want to Delete : ");
        todo.splice(inde,1);
        console.log("Task Deleted!");
    }

    else{
        console.log("You Choice Invalid Task To Perform By The NotePad!")
    }

    req = prompt("Enter Your Request : ");   
}