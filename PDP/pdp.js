var idParam = location.search
var param = new URLSearchParams(idParam)
var productId = param.get('productId')
console.log(productId)


$.ajax({
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId,
    method: 'GET',
    success: function (data) {
        console.log(data)


        var pdpContainer = document.createElement("div");
        pdpContainer.classList.add("pdp-container");

        $('main').append(pdpContainer)

        var previewImageContainer = document.createElement("div");
        previewImageContainer.classList.add("preview-container");

        var detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details-container");

        pdpContainer.append(previewImageContainer, detailsContainer);

        var previewImg = document.createElement("img");
        previewImg.classList.add("preview-img");
        previewImg.src = data.photos[0];
        previewImageContainer.append(previewImg);

        var productName = document.createElement("p");
        productName.id = 'name'
        productName.innerText = data.name;

        var brand = document.createElement("p");
        brand.id = 'brand'
        brand.innerText = data.brand;

        var priceContainer = document.createElement("div");
        priceContainer.classList.add("price-container");
        priceContainer.innerText = "Price: Rs ";

        var price = document.createElement("span");
        price.classList.add("price-value");
        price.innerText = data.price;

        priceContainer.append(price);

        var descHeading = document.createElement("p");
        descHeading.id = 'desc-heading'
        descHeading.innerText = "Description";

        var descriptionText = document.createElement("p");
        descriptionText.id = 'desc-text'
        descriptionText.innerText = data.description;

        var productOverviewHeading = document.createElement("p");
        productOverviewHeading.id = 'product-overview'
        productOverviewHeading.innerText = "Product Overview";

        var productImgContainer = document.createElement("div");
        productImgContainer.classList.add("images-container");

        var productImages = data.photos;

        for (var counter = 0; counter < productImages.length; counter++) {
            var productImg = document.createElement("img");
            productImg.classList.add("product-img");
            productImg.src = productImages[counter];
            productImg.addEventListener("click", onProductImgClick);

            productImgContainer.append(productImg);
        }

        var atcBtn = document.createElement("button");
        atcBtn.innerText = "Add to Cart";
        atcBtn.addEventListener('click', onAddToCart);

        // var miniCart = document.createElement('span');
        // miniCart.innerText = 0;

        var miniCart = document.getElementById('cartCount')
        // miniCart.innerText = 0
        // console.log(miniCart)
        miniCart.innerText = localStorage.getItem('itemCount');



        detailsContainer.append(
            productName,
            brand,
            priceContainer,
            descHeading,
            descriptionText,
            productOverviewHeading,
            productImgContainer,
            atcBtn,
        );

        productImgContainer.childNodes[0].classList.add("active");

        function onProductImgClick(e) {
            previewImg.src = e.target.src;

            var images = productImgContainer.childNodes;
            for (var counter = 0; counter < images.length; counter++) {
                images[counter].classList.remove("active");
            }

            e.target.classList.add("active");
        }


        var product = []

        var q = 0

        product.id = data.id
        product.name = data.name
        product.price = data.price
        product.image = data.preview



        var itemsInCart = localStorage.getItem('itemCount');
        
        function onAddToCart() {
            itemsInCart++;
            localStorage.setItem('itemCount', itemsInCart)
            miniCart.innerText = localStorage.getItem('itemCount');

            q += 1
            product.quantity = q

            // product.id = data.id
            // product.name = data.name
            // product.price = data.price
            // product.image = data.preview

            var item = 'product'+productId
            // localStorage.setItem(item, JSON.stringify(product))

            localStorage.setItem(item, product.quantity)

            console.log(product)
        }
        // localStorage.clear()


    }
})