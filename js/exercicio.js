myInput = document.getElementById("recebe-item");
myButton = document.getElementById("insere-item");
myList = document.getElementById("lista-items");

myButton.addEventListener('click',()=>{
    if(myInput.value!=''){
        let newItem = document.createElement("li");
        newItem.innerHTML = myInput.value;
        myList.append(newItem);
        myInput.value ="";
    }else{
        alert("Campo texto vazio, não pode inserer item em branco :D")
    }
})
