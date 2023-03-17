let products = [
    {
        id: 1,
        name: 'AC',
        description: 'For Cooling',
        price: '200'
    },
    {
        id: 2,
        name: 'Washing Machine',
        description: 'For dry cleaning clothes and beddings',
        price: '500'
    },
    {
        id: 3,
        name: 'Screen',
        description: 'For viewing content',
        price: '300'
    },
    {
        id: 4,
        name: '	Keyboard',
        description: 'Typing',
        price: '50'
    },
    {
        id: 5,
        name: 'Phone',
        description: 'Making Calls',
        price: '1150'
    },
    {
        id: 6,
        name: 'Marker',
        description: 'Writing',
        price: '50'
    },
    {
        id: 7,
        name: 'Table',
        description: 'Placing items',
        price: '50'
    },
    {
        id: 8,
        name: 'Chair',
        description: 'Sitting',
        price: '5'
    },
    {
        id: 9,
        name: 'Cap',
        description: '	For providing shade',
        price: '2'
    },
    {
        id: 10,
        name: 'Electricity',
        description: '	For providing power',
        price: '500'
    },
]

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

const table = document.createElement('table')
table.setAttribute('border', '1')
table.setAttribute('width', '100%')
table.setAttribute('cellpadding', '5')
table.setAttribute('cellspacing', '5')

const tableHeaderRow = document.createElement('tr')

const tableHeaderItem = ['S/N', 'Name', 'Description', 'Price']


tableHeaderItem.forEach(item => {
    const tableHeader = document.createElement('th')
    tableHeader.innerText = item
    tableHeaderRow.appendChild(tableHeader)
})
table.appendChild(tableHeaderRow)

const createTabeleRows = () => {
    products.forEach(product => {
        const tableProductRow = document.createElement('tr')

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

    tableProductRow.remove()
    createTabeleRows()
})

newProductForm.appendChild(btn)


createTabeleRows()
document.body.appendChild(table)
document.body.appendChild(newProductForm)