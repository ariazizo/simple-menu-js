const categories = ["Sandwich", "Pizza", "Drink", "Desert", "salad"]
const shopping = [""]
const products = [
    {
        id: 1,
        category: "Drink",
        pic: "mojito.jpg",
        type: "mohito",
        price: 8,
        isActive: true,
    },
    {
        id: 2,
        category: "deser",
        pic: "cup3.jpg",
        type: "cupCace",
        price: 10,
        isActive: true,
    },
    {
        id: 3,
        category: "Sandwich",
        pic: "berger.jpg",
        type: "berger",
        price: 20,
        isActive: true,
    },
    {
        id: 4,
        category: "Pizza",
        pic: "peperoni.jpg",
        type: "peperoni",
        price: 30,
        isActive: true,
    },
    {
        id: 5,
        category: "Pizza",
        pic: "Special.jpg",
        type: "Special",
        price: 39,
        isActive: true,
    },
    {
        id: 6,
        category: "Pizza",
        pic: "Gurgan.jpg",
        type: "Gurgan",
        price: 35,
        isActive: true,
    },
    {
        id: 7,
        category: "Drink",
        pic: "soda.jpg",
        type: "Soda",
        price: 4,
        isActive: true,
    },
    {
        id: 8,
        category: "Drink",
        pic: "cola.jpg",
        type: "Cola",
        price: 5,
        isActive: true,
    },
    {
        id: 9,
        category: "Sandwich",
        pic: "hotDog.jpg",
        type: "Hot Dog",
        price: 15,
        isActive: true,
    },
    {
        id: 10,
        category: "Sandwich",
        pic: "hookame.jpg",
        type: "Hookame",
        price: 10,
        isActive: true,
    },
    {
        id: 11,
        category: "Desert",
        pic: "pannacotta.jpg",
        type: "Panna Cotta",
        price: 12,
        isActive: true,
    },
    {
        id: 12,
        category: "Desert",
        pic: "malinowy.jpg",
        type: "Malinowy",
        price: 30,
        isActive: true,
    },
]
const catalog = document.getElementById("showCatalog")
const totalCash = document.getElementById("totalCash")
const basket = document.getElementById("basket")
window.onload = function () {
    categoriesBinder()
    catalogBinder()
}

function categoriesBinder() {
    const cmbCategories = document.getElementById("cmbCategories");
    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement("option")
        option.innerText = categories[i]
        cmbCategories.appendChild(option)
    }
}

function showCatalog(products) {
    catalog.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        let box = document.createElement("div")
        box.classList = "box col-md-3"
        let img = document.createElement("img")
        img.src = "img/" + products[i].pic
        box.appendChild(img)
        let name = document.createElement("h4")
        name.innerText = products[i].type
        box.appendChild(name)
        let price = document.createElement("h5")
        price.innerText = "price: " + products[i].price + "$"
        box.appendChild(price)
        let addBtn = document.createElement("button")
        addBtn.type = "button"
        addBtn.innerText = "Add"
        addBtn.classList = "btn btn-info btns"
        box.appendChild(addBtn)
        catalog.appendChild(box)
    }
    let test = ''
    const btns = document.querySelectorAll(".btns");
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener("click", () => {
            let x = 0
            const input = document.createElement("input")
            const cashPrice = document.createElement("div")
            for (let j = 0; j < shopping.length; j++) {
                // if (shopping.includes(products[i].type)) {
                //     input.value = Number(input.value) + 1
                //     // cashPrice.innerText = Number(cashPrice.textContent) + Number(products[i].price)
                //     // let tot = totalCash.textContent
                //     totalCash.innerText = Number(totalCash.textContent) + products[i].price
                // }
                if (!shopping.includes(products[i].type)) {
                    shopping.push(products[i].type)
                    let tot = totalCash.textContent
                    totalCash.innerText = ''
                    const cashContainer = document.createElement("div")
                    cashContainer.classList = "cashContainer"
                    const cashType = document.createElement("div")
                    cashType.innerText = products[i].type
                    cashType.classList = "cashType"
                    cashPrice.innerText = products[i].price
                    cashPrice.classList = "cashPrice"
                    input.type = "number"
                    input.value = "1"
                    const cashDelete = document.createElement("div")
                    cashDelete.innerText = "x"
                    cashDelete.classList = "cashDelete"
                    totalCash.innerText = Number(cashPrice.textContent) + Number(tot)
                    btn.addEventListener("click", () => {
                        for (let j = 0; j < shopping.length; j++) {
                            if (shopping[j] == products[i].type) {
                                input.value = Number(input.value) + 1
                                cashPrice.innerText = Number(cashPrice.textContent) + Number(products[i].price)
                                totalCash.innerText = Number(totalCash.textContent) + (products[i].price)
                            }
                        }
                    })
                    input.addEventListener("change", () => {
                        test = cashPrice.textContent
                        let changeVal = products[i].price * input.value
                        cashPrice.innerText = changeVal
                        if (input.value < 1) {
                            input.value = 1
                            cashPrice.innerText = products[i].price * input.value
                        } else {

                            let tot = totalCash.textContent
                            totalCash.innerText = ''
                            if (Number(changeVal) > Number(test)) {
                                totalCash.innerText = Number(tot) + Number(products[i].price)
                            } else {
                                totalCash.innerText = Number(tot) - Number(products[i].price)
                            }
                        }
                    })
                    cashDelete.addEventListener("click", () => {
                        let tot = totalCash.textContent
                        // let changeVal = products[i].price * input.value
                        totalCash.innerText = ''
                        totalCash.innerText = Number(tot) - Number(products[i].price * input.value)
                        cashContainer.remove()
                        input.value = 0
                        for (let j = 0; j < shopping.length; j++) {
                            if (shopping[j] == products[i].type) {
                                shopping[j] = ''
                            }
                        }
                    })
                    cashContainer.appendChild(cashType)
                    cashContainer.appendChild(cashPrice)
                    cashContainer.appendChild(input)
                    cashContainer.appendChild(cashDelete)
                    basket.appendChild(cashContainer)
                }
            }
        })
    }
}

function catalogBinder() {
    let currentCategorie = document.getElementById("cmbCategories").value;
    let items = []
    if (currentCategorie === "All") {
        for (let i = 0; i < products.length; i++) {
            if (products[i].isActive == true) {
                items.push(products[i])
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].category === currentCategorie && products[i].isActive == true) {
                items.push(products[i])
            }
        }
    }
    if (items.length > 0) {
        showCatalog(items)
    } else {
        catalog.innerHTML = ''
        const notFound = document.createElement("h4")
        notFound.innerText = "There is no Product in this Category !!!!!"
        notFound.classList = "alert-danger"
        catalog.appendChild(notFound)
    }
}


