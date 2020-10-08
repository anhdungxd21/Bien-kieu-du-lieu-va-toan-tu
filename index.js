//Tính trung bình và Tổng điểm
function doMatch() {
    let phys = +document.getElementById("physical").value;
    let match = +document.getElementById("match").value;
    let bio = +document.getElementById("biological").value;

    if(phys > 10 || match > 10 || bio > 10){
        alert("điểm phải nhỏ hơn 10");
    }else
    {
        let avr = (phys + match + bio) / 3;
        document.getElementById("avr").innerHTML = "Điểm trung bình: " + avr;

        let sum = phys + match + bio;
        document.getElementById("sum").innerHTML = "Điểm tổng kết: " + sum;
    }
}

function cChange() {
    let cDegrees = document.getElementById("c-degrees").value;
    let fDegrees =  (cDegrees * 1.8)+  32;
    document.getElementById("f-degrees").value = fDegrees;
    console.log("cChange done");
}

function fChange() {
    let fDegrees = document.getElementById("f-degrees").value;
    let cDegrees = (fDegrees - 32) / 1.8;
    document.getElementById("c-degrees").value = cDegrees;
    console.log("fChange done");
}

function resetInput(){
    document.getElementById("c-degrees").value = "";
    document.getElementById("f-degrees").value = "";
}

function circleArea() {
    let radius = document.getElementById("radius").value;
    let area = Math.PI * radius**2;
    document.getElementById("area").innerHTML = "Diện tích là: " + area;
}

function circleCircuit() {
    let radius = document.getElementById("radius").value;
    let circuit = Math.PI * radius * 2;
    document.getElementById("area").innerHTML = "Chu vi là là: " + circuit;
}