var totsa = 0;
var disc = 0;
var discountPerc = 0
var GrossAmount = 0;
var arraynumber = 0;

record = [];

folder = [];

function add() {
    document.getElementById('myDIV1').style.display = 'block';

    var mc = document.getElementById("materialCode");
    var mn = document.getElementById("materialName");
    var q = document.getElementById("qty");
    var ppu = document.getElementById("pricePerUnit");
    var totse = q.value * ppu.value;
    var cusObj = {
        "materialCode": mc.value,
        "materialName": mn.value,
        "qty": q.value,
        "pricePerUnit": ppu.value,
        "total": totse
    };



    for (i = 0; i <= record.length; i++) {


        record.push(cusObj);

        console.log("r", record);


        viewAll(record);
        totalAmount(record);
    }

    mc.value = "";
    mn.value = "";
    q.value = "";
    ppu.value = "";



}
function totalAmount(arr) {

    a = document.getElementById('TotalAmount')
    console.log(arr)
    console.log(arr.length)
    totsa = 0;

    for (i = 0; i < arr.length; i++) {
        arr[i].total = arr[i].total;
        totsa += arr[i].total;

    }

    document.getElementById('eTotalAmount').innerHTML = totsa;
    discount(document.getElementById('Discount').value);
}
function discount(a) {

    var b = a;
    var c = b / 100;
    var e = document.getElementById('eTotalAmount').innerHTML;

    document.getElementById('discA').innerHTML = e * c;
    document.getElementById('GA').innerHTML = e - (e * c);
    disc = e * c;
    GrossAmount = e - (e * c);
    discountPerc = a;
}


function add2() {

    if (document.getElementById("bttnA").value == "Add New Record") {

        console.log(folder);
        var id = document.getElementById("orderId");
        var date = document.getElementById("orderDate");
        var name = document.getElementById("customerName");



        var file = {
            "id": id.value,
            "dateOrdered": new Date(date.value),
            "customerName": name.value,
            "total": totsa,
            "data": record,
            "discountPerc": discountPerc,
            "discount": disc,
            "grossAmount": GrossAmount

        }



        folder.push(file);
        console.log(folder);
        document.getElementById("orderId").value = "";
        document.getElementById("orderDate").value = "";
        document.getElementById("customerName").value = "";
        record = [];
        document.getElementById("dataTable").innerHTML = "";
        viewAllR(folder);

    }

    if (document.getElementById("bttnA").value == "Edit Record") {
        var id = document.getElementById("orderId");
        var date = document.getElementById("orderDate");
        var name = document.getElementById("customerName");

        var file = {
            "id": id.value,
            "dateOrdered": new Date(date.value),
            "customerName": name.value,
            "total": totsa,
            "data": record,
            "discountPerc": discountPerc,
            "discount": disc,
            "grossAmount": GrossAmount

        }
        if (document.getElementById("orderId")) {

            console.log(arraynumber)
            folder.splice(arraynumber, 1, file);



        }
        document.getElementById("orderId").value = "";
        document.getElementById("orderDate").value = "";
        document.getElementById("customerName").value = "";
        record = [];
        document.getElementById("dataTable").innerHTML = "";
        viewAllR(folder);
        document.getElementById("bttnA").value = "Add New Record";
    }


}


function viewAll(arr) {

    var clr = " ";
    document.getElementById("dataTable").innerHTML = clr;
    for (i = 0; i < arr.length; i++) {


        document.getElementById("dataTable").innerHTML += '<tr>'
            + "<td>" + (i + 1) + "</td>"
            + "<td>" + arr[i].materialCode + "</td>"
            + "<td>" + arr[i].materialName + "</td>"
            + "<td>" + arr[i].qty + "</td>"
            + " <td>" + arr[i].pricePerUnit + "</td>"
            + "<td>" + (arr[i].qty * arr[i].pricePerUnit) + "</td>"
            + "<td><input type='submit' value='Edit' onclick='editT(" + i + "," + i + "," + 'record' + ")'></td>"
            + "<td><input type='submit' value='Delete' onclick='deleteT(" + i + "," + i + "," + 'record' + ")'></td></tr>"



    }



}

function backB() {

    document.getElementById('myDIV2').style.display = 'none';
    document.getElementById('myDIV3').style.display = 'block';
}

function viewAllR(arr) {
    document.getElementById('myDIV2').style.display = 'block';
    document.getElementById('myDIV3').style.display = 'none';
    document.getElementById("viewTable").innerHTML = " ";

    var vlr = "";

    vlr = document.getElementById("viewTable");

    vlr.innerHTML = "";
    for (i = 0; i < arr.length; i++) {
        var k = i;
        var no = arr[i].data.length;




        vlr.innerHTML += "<tr>"
            + "<td>" + (i + 1) + "</td>"
            + "<td>" + arr[i].id + "</td>"
            + "<td>" + arr[i].dateOrdered + "</td>"
            + "<td>" + arr[i].customerName + "</td>"
            + "<td>" + no + "</td>"
            + "<td>" + arr[i].total + "</td>"
            + "<td>" + arr[i].discountPerc + "%" + "</td>"
            + "<td>" + arr[i].discount + "</td>"
            + "<td>" + arr[i].grossAmount + "</td>"
            + "<td><input type='submit' value='Edit' onclick='editF(" + i + ")'></td>"
            + "<td><input type='submit' value='Delete' onclick='deleteF(" + i + ")'></td></tr>"
            + "<td>sno</td>"
            + "<td>Material Code</td>"
            + "<td>Material Name</td>"
            + "<td>Qty</td>"
            + "<td>Price Per Unit</td>"
            + "<td>Total</td>"
            + "</tr>"






        for (j = 0; j < arr[i].data.length; j++) {
            vlr.innerHTML += "<tr>"
                + "<td>" + (j + 1) + "</td>"
                + "<td>" + arr[i].data[j].materialCode + "</td>"
                + "<td>" + arr[i].data[j].materialName + "</td>"
                + "<td>" + arr[i].data[j].qty + "</td>"
                + " <td>" + arr[i].data[j].pricePerUnit + "</td>"
                + "<td>" + arr[i].data[j].total + "</td></tr>"



        }
    }
}

function editT(j, i, array) {
    document.getElementById('myDIV').style.display = 'block';
    var emc = document.getElementById("ematerialCode");
    var emn = document.getElementById("ematerialName");
    var eq = document.getElementById("eqty");
    var eppu = document.getElementById("epricePerUnit");
    var arrayc = document.getElementById("hidden");
    emc.value = array[j].materialCode;
    emn.value = array[j].materialName;
    eq.value = array[j].qty;
    eppu.value = array[j].pricePerUnit;
    arrayc.value = array;

    editT.editFo = function () {
        document.getElementById('myDIV').style.display = 'none';
        var etotse = document.getElementById("eqty").value * document.getElementById("epricePerUnit").value;
        cusObj = {
            "materialCode": document.getElementById("ematerialCode").value,
            "materialName": document.getElementById("ematerialName").value,
            "qty": document.getElementById("eqty").value,
            "pricePerUnit": document.getElementById("epricePerUnit").value,
            "total": etotse,
        }
        console.log(cusObj)
        if (document.getElementById("ematerialCode")) {
            console.log(j)
            array.splice(j, 1, cusObj);
            totalAmount(array);
            viewAll(array);
            console.log(array);

            emc.value = "";
            emn.value = "";
            eq.value = "";
            eppu.value = "";
        }


    }



}



function deleteT(j, i, array) {
    ;
    record.splice(j, 1);
    totalAmount(array);

    viewAll(array);


}

function deleteF(index) {
    folder.splice(index, 1);

    viewAllR(folder);


}






function editF(index) {
    document.getElementById("bttnA").value = "Edit Record"
    backB();
    record = [];
    for (j = 0; j < folder[index].data.length; j++) {
        var totsu = folder[index].data[j].qty * folder[index].data[j].pricePerUnit;
        var cusObj = {
            "materialCode": folder[index].data[j].materialCode,
            "materialName": folder[index].data[j].materialName,
            "qty": folder[index].data[j].qty,
            "pricePerUnit": folder[index].data[j].pricePerUnit,
            "total": totsu
        };

        record.push(cusObj);
    }
    console.log(record);
    var wid = document.getElementById("orderId");
    var wd = document.getElementById("orderDate");
    var wcn = document.getElementById("customerName");

    wid.value = folder[index].id;
    wd.value = folder[index].dateOrdered;
    wcn.value = folder[index].customerName;
    viewAll(record);
    arraynumber = 0;
    arraynumber = index;
   


}


function byDate() {
    aD = document.getElementById("fromDate");
    bD = document.getElementById("toDate");
    a = new Date(aD.value);
    b = new Date(bD.value);

    console.log('from date', a);
    console.log('to date', b);

    var newFolder = folder.filter(checkDate);

    function checkDate(folderindex) {
        return folderindex.dateOrdered.getTime() >= a.getTime() && folderindex.dateOrdered.getTime() <= b.getTime();
    }
    console.log(newFolder);


    viewAllR(newFolder);




}

function byCustomer() {

    var cNewFolder = folder.sort(cSorting);
    function cSorting(a, b) {
        // Use toUpperCase() to ignore character casing
        customerA = a.customerName.toUpperCase();
        customerB = b.customerName.toUpperCase();

        let comparison = 0;
        if (customerA > customerB) {
            comparison = 1;
        } else if (customerA < customerB) {
            comparison = -1;
        }
        return comparison;
    }
    console.log(cNewFolder);

    viewAllR(cNewFolder);


}

function byPriceAsc() {
    var aPriceFolder = folder.sort(cSortingn);
    function cSortingn(a, b) {


        var totalA = a.total;
        var totalB = b.total;

        let comparison = 0;
        if (totalA > totalB) {
            comparison = 1;
        } else if (totalA < totalB) {
            comparison = -1;
        }
        return comparison;



    }

    console.log(aPriceFolder);

    viewAllR(aPriceFolder);


}


function byPriceDesc() {
    var dPriceFolder = folder.sort(dSortingn);
    function dSortingn(a, b) {


        var totalA = a.total;
        var totalB = b.total;

        let comparison = 0;
        if (totalA < totalB) {
            comparison = 1;
        } else if (totalA > totalB) {
            comparison = -1;
        }
        return comparison;



    }

    console.log(dPriceFolder);

    viewAllR(dPriceFolder);


}



function filtered() {

    if (document.getElementById('searchBy').options[document.getElementById('searchBy').selectedIndex].value == "date") {
        document.getElementById('myDIV5').style.display = 'block';

    }
    else {
        document.getElementById('myDIV5').style.display = 'none';
    }
    if (document.getElementById('searchBy').options[document.getElementById('searchBy').selectedIndex].value == "searchCustomer") {
        document.getElementById('myDIV6').style.display = 'block';

    }
    else {
        document.getElementById('myDIV6').style.display = 'none';
    }
    if (document.getElementById('filterBy').options[document.getElementById('filterBy').selectedIndex].value == "Customer") {
        //customer
        byCustomer();
    }
    if (document.getElementById('filterBy').options[document.getElementById('filterBy').selectedIndex].value == "aPrice") {
        //Aprice
        byPriceAsc();

    }
    if (document.getElementById('filterBy').options[document.getElementById('filterBy').selectedIndex].value == "dPrice") {
        //Dprice
        byPriceDesc();
    }

}

    function searchCustomerBy(){
        
        var searchArray = folder.filter(fSorting);
        function fSorting(a) {
            // Use toUpperCase() to ignore character casing
            customerA = a.customerName.toUpperCase();
            bcustomerName = document.getElementById("searchName").value;
            customerB = bcustomerName.toUpperCase();


            let customerSer=0;
            if (customerA==customerB)
            {
               
                customerSer=1;
        }

      
        return customerSer;
    }

        console.log(searchArray);
  

        viewAllR(searchArray);



    }
