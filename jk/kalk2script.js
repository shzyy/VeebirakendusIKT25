function jookidevalik() {
    let vastus2=document.getElementById("vastus2");
    let joogivalik=document.getElementById("joogivalik");
    let kogus=document.getElementById("kogus");

    if (joogivalik.selectedIndex==1) {
        vastus2.innerHTML=kogus.value*kohv.value+'kohv hind on' + kogus.value*kohv+'€';
        vastus.style.color="green";
    }
    if (joogivalik.selectedIndex==2) {
        vastus2.innerHTML=kogus.value+'Coke hind on' +kogus.value*coke+'€';
        vastus.style.color="green";
    }
    if (joogivalik.selectedIndex==3) {
        vastus2.innerHTML = kogus.value + 'Vesi hind on'+kogus.value * vesi + '€'
    }
    else{
        vastus2.innerHTML=kogus*;
        vastus.style.color="red";
    }
}