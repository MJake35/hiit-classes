import { allProducts } from './products.js'

let products = allProducts

const addProduct = (objValue) => {
    products = [...products, objValue]
    console.log(products)
}

const removeProduct = (id) => {
    products = products.filter(product => product.id !== id)

}

// console.log(products)

// let newProduct1 = {
//     id: products.length + 1,
//     name: 'Laptop',
//     description: 'For processing data',
//     price: '5000'
// }


// To create the table
const table = document.createElement('table')
table.setAttribute('border', '1')
table.setAttribute('width', '100%')
table.setAttribute('cellpadding', '5')
table.setAttribute('cellspacing', '5')
document.body.appendChild(table)

const tableHeaderRow = document.createElement('tr')

const tableHeaderItem = ['S/N', 'Name', 'Description', 'Price']


// to create the table header
tableHeaderItem.forEach(item => {
    const tableHeader = document.createElement('th')
    tableHeader.innerText = item
    tableHeaderRow.appendChild(tableHeader)
})
table.appendChild(tableHeaderRow)


const createTabeleRows = () => {    // to populate the table with data
    products.forEach(product => {
        const tableProductRow = document.createElement('tr')
        tableProductRow.setAttribute('class', 'product-row')

        const data1 = document.createElement('td')
        data1.innerText = product.id + '.'
        tableProductRow.appendChild(data1)

        const data2 = document.createElement('td')
        data2.innerText = product.name
        tableProductRow.appendChild(data2)

        const data3 = document.createElement('td')
        data3.innerText = product.description
        tableProductRow.appendChild(data3)

        const data4 = document.createElement('td')
        data4.innerText = '#' + product.price
        tableProductRow.appendChild(data4)

        const del = document.createElement('button')
        del.innerText = 'delete'

        del.addEventListener('click', () => {
            removeProduct(product.id)

            // to get the existing table data rows
            const tableData = document.querySelectorAll('.product-row')
            tableData.forEach(row => {
                row.remove()    // to remove all the existing table
            })

            createTabeleRows()  // to repopulate the table with the updated product list
        })
        tableProductRow.appendChild(del)

        table.appendChild(tableProductRow)
    })
}


// Form
const newProductForm = document.createElement('form')

const nameInput = document.createElement('input')
nameInput.setAttribute('type', 'text')
nameInput.setAttribute('placeholder', 'Name of Product')
newProductForm.appendChild(nameInput)

const descriptionInput = document.createElement('input')
descriptionInput.setAttribute('type', 'text')
descriptionInput.setAttribute('placeholder', 'Description of Product')
newProductForm.appendChild(descriptionInput)

const priceInput = document.createElement('input')
priceInput.setAttribute('type', 'text')
priceInput.setAttribute('placeholder', 'Price of Product')
newProductForm.appendChild(priceInput)

const btn = document.createElement('button')
btn.innerText = 'Add New Product'

// to submit the form
btn.addEventListener('click', (e) => {
    e.preventDefault()

    addProduct(
        {
            id: products.length + 1,
            name: nameInput.value,
            description: descriptionInput.value,
            price: priceInput.value
        }
    )

    // to get the existing table data rows
    const tableData = document.querySelectorAll('.product-row')
    tableData.forEach(row => {
        row.remove()    // to remove all the existing table
    })

    createTabeleRows()  // to repopulate the table with the updated product list
})

newProductForm.appendChild(btn)
document.body.appendChild(newProductForm)


createTabeleRows()      // populates the table with the product list on first page load