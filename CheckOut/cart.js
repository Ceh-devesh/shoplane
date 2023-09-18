var miniCart = document.getElementById('cartCount')
miniCart.innerText = localStorage.getItem('itemCount');

var checkoutHeading = document.createElement('p')
checkoutHeading.id = 'checkout-heading'
checkoutHeading.innerText = 'Checkout'

var mainContainer = document.createElement('div')
mainContainer.id = 'main-container'


var productContainer = document.createElement('div')
productContainer.id = 'product-container'

var placeOrderContainer = document.createElement('div')
placeOrderContainer.id = 'place-order-container'

// var Items = 0


$.ajax({
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
    method: 'GET',
    success: function (data) {
        console.log(data)

        var fAmount = 0

        for (i = 0; i < data.length; i++) {
            var key = 'product' + data[i].id
            // var j = 0
            if (localStorage.getItem(key) != undefined) {
                // console.log(key)

                // j += 1

                var itemContainer = document.createElement('div')
                // itemContainer.id = 'item-container'
                itemContainer.classList.add('item-container')

                var imgContainer = document.createElement('div')
                imgContainer.classList.add('imgContainer')

                var img = document.createElement('img')
                img.src = data[i].preview
                img.alt = data[i].name

                imgContainer.append(img)

                var itemRightSection = document.createElement('div')
                itemRightSection.classList.add('right-section')

                var names = document.createElement('p')
                names.classList.add('name')
                names.innerText = data[i].name

                var quantity = document.createElement('p')
                quantity.classList.add('quantity')
                quantity.innerText = 'x' + localStorage.getItem(key)

                var price = localStorage.getItem(key) * data[i].price

                fAmount += price

                var amount = document.createElement('p')
                amount.classList.add('amount')
                amount.innerText = "Amount : Rs " + price

                itemRightSection.append(names, quantity, amount)

                itemContainer.append(imgContainer, itemRightSection)


                productContainer.append(itemContainer)
            }
        }


        var totalAmount = document.createElement('p')
        totalAmount.id = 'total-amount'
        totalAmount.innerText = 'Total Amount'

        var amountSpan = document.createElement('span')
        amountSpan.id = 'fAmount'
        amountSpan.innerText = fAmount

        var finalAmount = document.createElement('p')
        finalAmount.id = 'final-amount'
        finalAmount.innerText = 'Amount : Rs '

        finalAmount.append(amountSpan)

        var confirmPageLink = document.createElement('a')
        confirmPageLink.href = '/Confirm/confirm.html'

        var placeOrderBtn = document.createElement('button')
        placeOrderBtn.id = 'place-order-btn'
        placeOrderBtn.innerText = 'Place Order'

        placeOrderBtn.addEventListener('click', onPlaceOrder);

        function onPlaceOrder() {
            localStorage.clear()

            var postData = {
                createdAt: new Date(),
                name: "Virender Sunkria",
                avatar: 'http://127.0.0.1:5500/CheckOut/header-footer/Photo.jpg',
                id: '101'
            }

            $.ajax({
                url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/order',
                method: 'POST',
                data: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    console.log(data)
                },
            })
        }

        confirmPageLink.append(placeOrderBtn)


        placeOrderContainer.append(totalAmount, finalAmount, confirmPageLink)


        mainContainer.append(productContainer, placeOrderContainer)
    }
})


// console.log (localStorage.length)
var totalItems = document.createElement('p')
totalItems.id = 'total-items'

if (localStorage.length != 0) {
    var Items = localStorage.length - 1

    totalItems.innerText = 'Total Items: ' + Items
}
else {
    totalItems.innerText = 'Total Items: 0'
}


$('main').append(checkoutHeading, totalItems, mainContainer)