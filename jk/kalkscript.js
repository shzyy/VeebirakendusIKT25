function teisindamine() {
    let vastus=document.getElementById("vastus");
    let valik=document.getElementById("valik");
    let arv=document.getElementById("arv");

    const toll=39.37;
    const Meeter=0.0254;
    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value=="Meeter"){
                vastus.innerHTML=arv.value* + 'meetri' + arv.value*toll + 'tolli';
            }
        }
        else {
            vastus.innerHTML=arv.value*meeter + 'meeteri' + arv.value*meeter+'meetri';
        }
    }
}