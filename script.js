// $(document).ready(function () {
// })

var mainContainer = document.createElement('div')
mainContainer.id = 'main-container'

var carousel = document.createElement('div')
carousel.classList.add('carousel', 'autoplay')

for (i = 1; i < 5; i++) {
    var img = document.createElement('img')
    img.src = `carousel/image-${i}.png`
    img.alt = `image-${i}`
    carousel.append(img)
    // console.log(img)
}

mainContainer.append(carousel)
// console.log(mainContainer)

var homePageData;
$.ajax({
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
    method: 'GET',
    success: function (data) {
        console.log(data)
        homePageData = data
        // console.log(homePageData.isAccessory)
        // return(homePageData)


        var heading1 = document.createElement('h2')
        heading1.innerText = 'Clothing for Men and Women'
        heading1.classList.add('mainHeading')
        heading1.id = 'clothing'

        var clothingContainer = document.createElement('div')
        clothingContainer.id = 'clothingContainer'



        // localStorage.setItem('itemCount', '0')
        var miniCart = document.getElementById('cartCount')
        miniCart.innerText = localStorage.getItem('itemCount');
        




        for (i = 0; i < data.length; i++) {

            if (data[i].isAccessory == false) {
                var productId = i+1

                var cardLink = document.createElement('a')
                cardLink.href = '/PDP/pdp.html?productId='+productId

                var card = document.createElement('div')
                card.classList.add('card')

                var imgContainer = document.createElement('div')
                imgContainer.classList.add('imgContainer')

                var img = document.createElement('img')
                img.src = data[i].preview
                img.alt = data[i].name

                imgContainer.append(img)

                var names = document.createElement('p')
                names.classList.add('name')
                names.innerText = data[i].name

                var brand = document.createElement('p')
                brand.classList.add('brand')
                brand.innerText = data[i].brand

                var price = document.createElement('p')
                price.classList.add('price')
                price.innerText = "Rs " + data[i].price

                card.append(imgContainer, names, brand, price)

                cardLink.append(card)

                clothingContainer.append(cardLink)
            }

            // mainContainer.append(clothingContainer)

        }


        mainContainer.append(heading1, clothingContainer)

        var heading2 = document.createElement('h2')
        heading2.innerText = 'Accessories for Men and Women'
        heading2.classList.add('mainHeading')
        heading2.id = 'accessories'

        var accessoriesContainer = document.createElement('div')
        accessoriesContainer.id = 'accessoriesContainer'

        for (i = 0; i < data.length; i++) {

            if (data[i].isAccessory == true) {
                var productId = i+1
                
                var cardLink = document.createElement('a')
                cardLink.href = '/PDP/pdp.html?productId='+productId

                var card = document.createElement('div')
                card.classList.add('card')

                var imgContainer = document.createElement('div')
                imgContainer.classList.add('imgContainer')

                var img = document.createElement('img')
                img.src = data[i].preview
                img.alt = data[i].name

                imgContainer.append(img)

                var names = document.createElement('p')
                names.classList.add('name')
                names.innerText = data[i].name

                var brand = document.createElement('p')
                brand.classList.add('brand')
                brand.innerText = data[i].brand

                var price = document.createElement('p')
                price.classList.add('price')
                price.innerText = "Rs " + data[i].price

                card.append(imgContainer, names, brand, price)

                cardLink.append(card)

                accessoriesContainer.append(cardLink)
            }


        }
        mainContainer.append(heading2, accessoriesContainer)
        



    }
})

$('main').append(mainContainer)

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
    cssEase: 'linear',
    arrows: false
});