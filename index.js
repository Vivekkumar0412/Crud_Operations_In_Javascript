let productArray = [
    {name : "Burger", quantity : 10, price : 100},
    {name : "Dairy Milk", quantity : 100, price : 10},
    {name : "Milk", quantity : 70, price : 50},
    {name : "Kit-Kat", quantity : 150, price : 30},
];

// Function that will remove the item from the table

let removeFromTableFunction=(n)=>{
    // console.log(namee);
    let elem = productArray.findIndex((e)=>{
        return n == e.name;
    });
    // console.log(elem);

    productArray.splice(elem,1);
    showTableFunction();
}

// Function that will sort the data within the table

let sortData=(val)=>{
    if(val == 0){
        productArray.sort((a,b)=>{
            return a.quantity - b.quantity;
        });
    }else if(val == 1){
        productArray.sort((a,b)=>{
            return a.price - b.price;
        });
    }
    showTableFunction();
}

// Function that will add data to the table

let showTableFunction=()=>{
    let header = `<tr> <th>Name</th> <th onClick = "sortData(0)">Quantity</th> <th onClick = "sortData(1)">Price</th> <th></th></tr>`;
    let tableBody = productArray.map((elem)=>{
        return `<tr> <td>${elem.name}</td> <td>${elem.quantity}</td> <td>${elem.price}</td> <td> <button onClick = "removeFromTableFunction('${elem.name}')"> REMOVE </button> </td></tr>`;
    });

    let finalTable = `<table>${header} ${tableBody.join("")}</table>`;
    let tableData = document.getElementById("tableData");
    tableData.innerHTML = finalTable;
};

// Buuton that trriger the show table event
let showTable = document.getElementById("showTable");
showTable.addEventListener("click",()=>{
    showTableFunction();
})