
var users = [{ id: "admin", pass: "password" }]
console.log(users);

function signupshow(){
    
    document.getElementById('spoiler4').style.display = 'block';
    document.getElementById('spoiler3').style.display = 'none';
}

function signup(u,p,cp)
 {  if(p.length>=6)
    {
    if(p==cp)
    {
        newUser = {
            "id":u ,
            "pass":p
        }
        users.push(newUser);
        console.log("users",users);
        document.getElementById('spoiler3').style.display = 'block';
    document.getElementById('spoiler4').style.display = 'none';
                    return;
    }
    else
    {
        alert("password is not the same")
        return;
    }
}
else{
    document.getElementById("errors").innerHTML="Pasword is not more than 6 charachters";
    console.log(document.getElementById("errors").innerHTML);
}
    
   
}

function login() {
           
    var l = document.getElementById("username");
    var p = document.getElementById("password");
    for (i = 0; i < users.length; i++) {
        if (l.value == users[i].id && p.value == users[i].pass) {

            window.location.href = "home.html";
            return;

        }

        else {
            document.getElementById("error").innerHTML = "wrong credentials";
        }
    }
}


var data = [{
    "salesOrderCode": "SS/318",
    "customer": "Asim",
    "details": [
        {

            "materialCode": "Mat/3142",
            "materialName": "tata salt",
            "materialDescription": "test ertet",
            "qty": 500,
            "pricePerUnit": 5,
            "total": 2500,
        }, {

            "materialCode": "Mat/3143",
            "materialName": "ayurveda",
            "materialDescription": "test ertet",
            "qty": 10,
            "pricePerUnit": 25,
            "total": 250,
        }, {

            "materialCode": "Mat/3144",
            "materialName": "Sugar",
            "materialDescription": "test ertet",
            "qty": 10,
            "pricePerUnit": 5,
            "total": 50,
        }
    ]

},

/* 2 createdAt:8/12/2020, 1:06:08 PM*/
{
    "salesOrderCode": "SS/317",
    "customer": "Manan",
    "details": [
        {

            "materialCode": "Mat/3145",
            "materialName": "Mobile Phones",
            "materialDescription": "test ertet",
            "qty": 10,
            "pricePerUnit": 10,
            "total": 100,
        }, {

            "materialCode": "Mat/3146",
            "materialName": "Laptops",
            "materialDescription": "test ertet",
            "qty": 30,
            "pricePerUnit": 5,
            "total": 150,
        }, {

            "materialCode": "Mat/3147",
            "materialName": "Charger",
            "materialDescription": "test ertet",
            "qty": 50,
            "pricePerUnit": 10,
            "total": 500,
        }
    ]

}]




function asearch() {
    document.getElementById('spoiler').style.display = 'block';
    this.a = document.getElementById('TotalAmount');
    this.a.innerHTML = 0;
    for (i = 0; i < data.length; i++) {
        if (document.getElementById('oid').value == data[i].salesOrderCode) {
            document.getElementById('customername').innerHTML = "Customer Name : " + data[i].customer;
            document.getElementById('details').innerHTML = " ";

            for (j = 0; j < data[i].details.length; j++) {
                console.log(data[i].details.length)
                document.getElementById('details').innerHTML
                    += '<tr>'
                    + '<td>' + (j + 1) + '</td>'
                    + '<td>' + data[i].details[j].materialName + '</td>'
                    + '<td>' + data[i].details[j].materialCode + '</td>'
                    + '<td>' + data[i].details[j].materialDescription + '</td>'
                    + '<td>' + data[i].details[j].qty + '</td>'
                    + '<td>' + data[i].details[j].pricePerUnit + '</td>'
                    + '<td>' + data[i].details[j].total + '</td></tr>';


                this.a.innerHTML = parseInt(this.a.innerHTML) + parseInt(data[i].details[j].total);

            }



            return;

        }
        else {
            document.getElementById('customername').innerHTML = 'Data Not Found';
            document.getElementById('details').innerHTML = " ";
            document.getElementById('details').innerHTML += "<td></td>"
                + "<td></td>"
                + "<td></td>"
                + "<td><p style='color:red'>Data</p></td>"
                + "<td><p style='color:red'>Not</p></td>"
                + "<td><p style='color:red'>Found</p></td>"
                + "<td>total</td>";
            alert("Data Does not Exist");
        }
    }

}
function discount(a) {
    document.getElementById('spoiler2').style.display = 'block';
    var b = a;
    var c = b / 100;
    var e = document.getElementById('TotalAmount').innerHTML;

    document.getElementById('discA').innerHTML = e * c;
    document.getElementById('GA').innerHTML = e - (e * c);
}




