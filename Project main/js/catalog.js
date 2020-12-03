function initCatalog() {
    let TITLES = [
        'MANGO PEOPLE T-SHIRT',
        'BANANA PEOPLE T-SHIRT',
        'POTATO PEOPLE T-SHIRT',
        'CUCUMBER PEOPLE T-SHIRT',
        'PEPPER PEOPLE T-SHIRT',
        'GOROKCH PEOPLE T-SHIRT',
        'ORANGE PEOPLE T-SHIRT',
        'KIWI PEOPLE T-SHIRT'
    ];
    let PRICES = [52, 68, 36.1, 700, 87, 50, 67.5, 120.03];
    
    const catalog = {
        items: [],
        container: null,
        basket: null,
        init(basket) {
            this.container = document.querySelector('#catalog');
            this.items = getCatalogItems(TITLES, PRICES);
            this.basket = basket;
            this._render();
            this._handleEvents();
        },
        _render() {
            let htmlStr = '';
    
            this.items.forEach((item, i) => {
                htmlStr += renderCatalogTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
        }, 

        _handleEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name == 'add') {
                    let id = event.target.dataset.id;
                    let item = this.items.find(el => el.productId == id);

                    item = Object.assign({}, item, {productAmount: 1 })
                    this.basket.add(item);
                }
            })
        }
    };
    
    return catalog;
}



function getCatalogItems(TITLES, PRICES) {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createCatalogItem(i, TITLES, PRICES));
    }

    return arr;
}


function createCatalogItem(index, TITLES, PRICES) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}` //'prod_1'
    }
}

function renderCatalogTemplate(item, i) {
    return `
    <div class="main-fetured-mango">
        <div class="main-fetured-mango-photo">
            <div class="main-fetured-mango-korzina">
                <button 
                    name="add"
                    data-id="${item.productId}"
                >
                    <img src="img/forma_1_copy_1287.png" alt="">
                    &nbsp; Add to Cart
                </button>
            </div>
            <img src="img/rectangle_5_copy_119${1 + i}.jpg" alt="">
        </div>
        <div class="mango-text">${item.productName}</div>
        <div class="mango-price">$${item.productPrice}</div>
    </div>
`
}

