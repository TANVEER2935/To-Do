let inp = document.querySelector('.in');
let  tx=document.querySelector('.text');


function Add(){
    if(inp.value == ""){
        alert("please Enter Task");
    }
    else{
        let newel=document.createElement("ul");
        newel.innerHTML=`${inp.value}  <i class="fas fa-trash"></i>`;
        tx.append(newel);
        inp.value="";
        newel.querySelector("i").addEventListener('click',re);
        function re(){
            newel.remove();
        }
    }
}


