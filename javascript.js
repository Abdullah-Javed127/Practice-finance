let inputFloor=document.getElementById("input-floor");
let saveBtn=document.getElementById("save-button1");
let list=document.getElementById("list");
let EnterBtn="";
let save=[];
let finalSave="";
EnterBtn=document.getElementById("list");

saveBtn.addEventListener("click",function()
    {
        for(let x=0;x<inputFloor.value;x++)
        {
            save[x]+=`<input id=inputJS><br>`;
        }
        EnterBtn=`<button onclick="button()">save</button>`;
        list.innerHTML=save+EnterBtn;
        inputFloor.value=null;
    }
)


function button()
{
    finalSave;
    for(let i=0;i<inputFloor.value;i++)
    {
        save[i].value=save[i].value+finalSave;
    }
    alert(save[1].value);
}

