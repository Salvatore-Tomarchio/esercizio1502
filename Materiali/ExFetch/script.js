const inputProductId = document.getElementById('productId'); // In caso di edit
const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputPrice = document.getElementById('price');
const formElement = document.getElementById('productForm');
const searchInput = document.getElementById('search');
const errorBox = document.getElementById('errorMessage');


const baseUrl = 'https://striveschool-api.herokuapp.com/api/agenda';

// GET https://striveschool-api.herokuapp.com/api/agenda
// POST https://striveschool-api.herokuapp.com/api/agenda
// PUT https://striveschool-api.herokuapp.com/api/agenda/{id}
// DELETE https://striveschool-api.herokuapp.com/api/agenda/{id}
// PATCH

let allProducts = [];

function fetchProducts() {
    fetch(baseUrl)
        .then((response) => response.json())
        .then((products) => {
            // console.log(products);
            allProducts = products;
            renderProducts(products);
        })
        .catch(error => {
            errorBox.innerText = 'Errore nel caricamento dei dati';
            console.log(error);
        });
}

function renderProducts(myProducts) {
    const tBody = document.getElementById("productTableBody");
    tBody.innerHTML = '';

    const rowProducts = myProducts.map((product) => createRow(product, product));
    // console.log(rowProducts);

    // rowProducts.forEach(rowProduct => {
    //     tBody.appendChild(rowProduct);
    // })
    tBody.append(...rowProducts);
}

function createRow({_id, name, description, price}) {
    const rowTable = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.innerText = _id;
    rowTable.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.innerText = name;
    rowTable.appendChild(nameCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.innerText = description;
    rowTable.appendChild(descriptionCell);

    const priceCell = document.createElement('td');
    priceCell.innerText = price;
    rowTable.appendChild(priceCell);

    
    const actionCell = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.className='btn btn-warning btn-sm w-100 mb-2';
    editButton.innerText="Modifica";
    editButton.addEventListener('click', () => {
        editProduct(name, description, price, _id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.className='btn btn-danger btn-sm w-100';
    deleteButton.innerText="Elimina";
    deleteButton.addEventListener('click', () => {
        deleteProduct(_id);
    })

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    rowTable.appendChild(actionCell);

    return rowTable;
}

function addProduct(event) {
    event.preventDefault();

    const productId = inputProductId.value;

    let method = 'POST';
    let url = baseUrl;
    if (productId) {
        method = 'PUT';
        url = url + '/' + productId;
    }

    const product = {
        description: inputDescription.value,
        name: inputName.value,
        price: inputPrice.value,
        time: "2025-04-10T13:50:00.000Z"
    };

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(() => {
        fetchProducts();
        resetForm();
    })
}

function editProduct(name, description, price, _id) {
    inputName.value = name;
    inputDescription.value = description;
    inputPrice.value = price;
    inputProductId.value = _id;
}

function deleteProduct(id) {
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then(() => {
        fetchProducts();
    });
}


// Semplice funzione per resettare i campi del form
function resetForm() {
    formElement.reset();
}

function searchProducts() {
    const searchValue = searchInput.value;
    // name;
    // description;
    // price;
    const filteredProducts = allProducts.filter((product) => {
        if (
            product.price === Number(searchValue) || 
            product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            product.description.toLowerCase().includes(searchValue.toLowerCase())
        ) {
            return true;
        }

        return false;
    });

    renderProducts(filteredProducts);
}

fetchProducts();