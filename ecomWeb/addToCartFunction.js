  
export function addToCart(container) {

    let cartNodeList =
        container.querySelectorAll('.addToCart');

    let addToCartArray =
        JSON.parse(localStorage.getItem('addToCart')) || [];

    cartNodeList.forEach(cartBtn => {

        cartBtn.addEventListener('click', eventObj => {

            let product =
                eventObj.target.closest('.productCard');

            let productInfo = {

                productId: product.dataset.id,

                productCategory: product.dataset.category,

                img: product.querySelector('img').src,

                name: product.querySelector('p').innerText,

                rs: product.querySelector('span').innerText

            };

            addToCartArray.push(productInfo);

            localStorage.setItem(
                'addToCart',
                JSON.stringify(addToCartArray)
            );
           
        //    if(eventObj.target.style.backgroundColor = "green"){
        //     eventObj.target.style.backgroundColor = none
        //    }
        //    eventObj.target.style.backgroundColor = "green";
        });

    });
}