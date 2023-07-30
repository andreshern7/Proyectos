//import 'nanoid.js'

// document.querySelector('input[name="celular"]').addEventListener('invalid', function(event) {
//     if (event.target.validity.patternMismatch) {
//         event.target.setCustomValidity("Telefono iniciando con un 3 y 9 digitos del 1 al 9");
//     }
//   })

document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    const code_id = uniqueId(12); 
    document.getElementById("code_id").value = code_id;
    // console.log(document.getElementById("code").value);
    $.ajax({
        url:"https://api.apispreadsheets.com/data/WZNnmisnCPT2ayZr/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Datos registrados exitosamente")
            $("#myForm")[0].reset()
            location.href = `payment.html?code_id=${code_id}`;
        },
        error: function(){
            alert("Hubo un error")
        }
    });
})


function getData(){
    uniqueId(8)
    $.ajax({
    //url: https://api.apispreadsheets.com/data/WZNnmisnCPT2ayZr/?query=[query]&dataFormat=[dataFormat],
    //url: "https://api.apispreadsheets.com/data/WZNnmisnCPT2ayZr/?query=SELECT * FROM WZNnmisnCPT2ayZr WHERE id='1'",
    url: "https://api.apispreadsheets.com/data/WZNnmisnCPT2ayZr/",
    type: "get",
    dataType: 'json',
    success: function (res) {
        console.log(res)
    }
    })
}

const uniqueId = (length=12) => {
    id = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
    // id = Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", "");
    // id = Math.ceil(Math.random() * Date.now()).toPrecision(length);
    id = insertEach(id.toString(), "-", 4);
    return id;
}

function insertAtIndex(str, substring, index) {
    // str = "Hello my love"
    // console.log(str.slice(6))
    return str.slice(0, index) + substring + str.slice(index);
}

function insertEach(str, substring, index){
    str = str.match(/.{1,4}/g) ?? [];
    return str.join(substring);
}



