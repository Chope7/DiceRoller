

let d2,d4,d6,d8,d10,d12,d20,d100;
let totd2=0;
let totd4=0;
let totd6=0;
let totd8=0;
let totd10=0;
let totd12=0;
let totd20=0;
let totd100=0;

//D2 total
document.getElementById("rolld2_button").onclick= function d2roll(){

    let v=document.getElementById("howManyD2").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd2+=Math.floor(Math.random() * 2) + 1
    }

    document.getElementById("d2label").innerHTML = "Your roll is: " + totd2;
}

//D4 total
document.getElementById("rolld4_button").onclick= function d4roll(){
    
    let v=document.getElementById("howManyD4").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd4+=Math.floor(Math.random() * 4) + 1
    }

    document.getElementById("d4label").innerHTML = "Your roll is: " + totd4;
}

//D6 total
document.getElementById("rolld6_button").onclick= function d6roll(){
    
    let v=document.getElementById("howManyD6").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd6+=Math.floor(Math.random() * 6) + 1
    }

    document.getElementById("d6label").innerHTML = "Your roll is: " + totd6;
}

//D8 total
document.getElementById("rolld8_button").onclick= function d8roll(){
    
    let v=document.getElementById("howManyD8").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd8+=Math.floor(Math.random() * 8) + 1
    }

    document.getElementById("d8label").innerHTML = "Your roll is: " + totd8;
}

//D10 total
document.getElementById("rolld10_button").onclick= function d10roll(){
    
    let v=document.getElementById("howManyD10").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd10+=Math.floor(Math.random() * 10) + 1
    }

    document.getElementById("d10label").innerHTML = "Your roll is: " + totd10;
}

//D12 total
document.getElementById("rolld12_button").onclick= function d12roll(){
    
    let v=document.getElementById("howManyD12").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd12+=Math.floor(Math.random() * 12) + 1
    }

    document.getElementById("d12label").innerHTML = "Your roll is: " + totd12;
}

//D20 total
document.getElementById("rolld20_button").onclick= function d20roll(){
    
    let v=document.getElementById("howManyD20").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd20+=Math.floor(Math.random() * 20) + 1
    }

    document.getElementById("d20label").innerHTML = "Your roll is: " + totd20;
}

//D100 total
document.getElementById("rolld100_button").onclick= function d100roll(){
    
    let v=document.getElementById("howManyD100").value;
    v=Number(v);
    for(let i=0;i<v;i++){
        totd100+=Math.floor(Math.random() * 100) + 1
    }

    document.getElementById("d100label").innerHTML = "Your roll is: " + totd100;
}

//Calculate Total
document.getElementById("getTotal_button").onclick= function total(){
    let tot=totd2+totd4+totd6+totd8+totd10+totd12+totd20+totd100;
    document.getElementById("total_label").innerHTML = "The total is: " + tot+".";
}
