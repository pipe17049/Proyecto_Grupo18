
const arrayProductos = [{

    id: 123456,
    description: "Prueba",
    valor: 5000,
    state: "on"
},
{
    id: 623466,
    description: "Prueba 21312412",
    valor: 20000,
    state: "off"
},
{
    id: 3214124,
    description: "Prueba putos ssss sadasdas asdqweqw qweqwqwrwqr",
    valor: 50000,
    state: "off"
}
]

const idDivTable = document.querySelector("#divTable");
const arrayElementsTable = [["Ingrese el ID", "number"], ["Ingrese la Descripcion", "text"],
["Ingrese el Valor", "number"], ["Ingrese el Estado", "text"]]
const elemAddInput = []
const elemAddLabel = []



const addProducts = () => {

    let Productos = arrayProductos;
    idDivTable.innerHTML = ""
    const elemForm = document.createElement("form");
    elemForm.className = "form"

    for (let i = 0; i < arrayElementsTable.length; i++) {

        elemAddLabel[i] = document.createElement("label");
        elemAddLabel[i].innerText = arrayElementsTable[i][0];
        elemAddLabel[i].className = "form-label"
        elemAddLabel[i].setAttribute("for", "formControlInput")
        elemForm.appendChild(elemAddLabel[i]);

        elemAddInput[i] = document.createElement("input");
        elemAddInput[i].className = "d-grid";
        elemAddInput[i].setAttribute("type", arrayElementsTable[i][1]);
        elemForm.appendChild(elemAddInput[i]);



    }
    idDivTable.append(elemForm)
    const bntAddSubmit = document.createElement("button")
    bntAddSubmit.innerHTML = "Enviar"
    bntAddSubmit.setAttribute("onclick", "enviar()")
    idDivTable.append(bntAddSubmit)

}

const enviar = () => {
    let Productos = arrayProductos;
    let salida = []
    const response = document.querySelectorAll("input");

    for (let i = 0; i < response.length; i++) {

        salida.push(response[i].value);
    }

    const [id, description, valor, state] = salida;

    Productos.push({ id, description, valor, state })

}

const showProducts = () => {

    idDivTable.innerHTML = ""
    let productos = arrayProductos;
    let row = "";

    createTable();

    let contador = 0;
    const divTable = document.querySelector('#tableBody');



    const products = productos.map((producto) => {


        row = divTable.insertRow(contador);
        contador++;
        for (let i = 0; i < 4; i++) {
            i == 0 ? row.insertCell(i).innerText = producto.id :
                i == 1 ? row.insertCell(i).innerText = producto.description :
                    i == 2 ? row.insertCell(i).innerText = producto.valor :
                        row.insertCell(i).innerText = producto.state;


        }

    })




}

const createTable = () => {

    const elemTable = document.createElement("table");
    const elemThead = document.createElement("thead");
    const elemTbody = document.createElement("tbody");
    const elemTh1 = document.createElement("th");
    const elemTh2 = document.createElement("th");
    const elemTh3 = document.createElement("th");
    const elemTh4 = document.createElement("th");



    elemTbody.setAttribute("id", "tableBody");


    elemTh1.innerText = "Identificado";
    elemThead.appendChild(elemTh1);
    elemTh2.innerText = "Descripcion";
    elemThead.appendChild(elemTh2);
    elemTh3.innerText = "Valor";
    elemThead.appendChild(elemTh3);
    elemTh4.innerText = "Estado";
    elemThead.appendChild(elemTh4);



    elemTable.appendChild(elemThead)
    elemTable.appendChild(elemTbody)
    elemTable.className = "table"
    idDivTable.append(elemTable)
}

const searchProducts = () => {




    idDivTable.innerHTML = ""

    createTable()

    const divTable = document.querySelector('#tableBody');


    const elemSearchInput = document.createElement("input")

    elemSearchInput.setAttribute("type", arrayElementsTable[0][1]);
    elemSearchInput.setAttribute("id", "input-search")


    const elemSearchBoton = document.createElement("button")
    elemSearchBoton.className = "btn btn-primary"
    elemSearchBoton.innerHTML = "Buscar"

    elemSearchBoton.addEventListener('click', () => {
        let productos = arrayProductos;
        let idTableClass = document.querySelector(".table")
        const response = document.querySelector("#input-search");
        console.log(response.value)
        let row = idTableClass.insertRow();
        let salidaProducto = productos.findIndex(producto => producto.id == response.value)
        console.log(salidaProducto)
        let ceil1 = row.insertCell(0);
        ceil1.innerHTML = productos[salidaProducto].id;
        let ceil2 = row.insertCell(1)
        ceil2.innerText = productos[salidaProducto].description;
        let ceil3 = row.insertCell(2)
        ceil3.innerText = productos[salidaProducto].valor;
        let ceil4 = row.insertCell(3)
        ceil4.innerText = productos[salidaProducto].state;
        row.appendChild(ceil1)
        row.appendChild(ceil2)
        row.appendChild(ceil3)
        row.appendChild(ceil4)
        idTableClass.appendChild(row)
        //divTable.append(idTableClass)

    })


    //idDivTable.append(divTable)
    idDivTable.append(elemSearchInput)
    idDivTable.append(elemSearchBoton)


    // let salidaProducto = productos.find(x => x, id ===)

}

