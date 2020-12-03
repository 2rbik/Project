function initBasket(){
    //let TITLES = [
    //    'MANGO PEOPLE T-SHIRT',
    //    'BANANA PEOPLE T-SHIRT',
    //];
    //let PRICES = [52, 68];
    //
    //let AMOUNTS = [4, 2];
    
    const basket = {
        items: [],
        total: null,
        container: null,
        wrapper: null,
        sum: 0,
        totalContainer: null,
        init() {
            this.container = document.querySelector('.basket-items');
            this.wrapper = document.querySelector('.cart')
            this.totalContainer = document.querySelector('.basket-sum')
        //  this.items = getBasketItems(TITLES, PRICES, AMOUNTS);
            this._render();
            this._hadleEvents();
        //    this._remove();
        },
        _render() {
            let htmlStr = '';
    
            this.items.forEach((item, i) => {
                htmlStr += renderBasketTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
            this._calcSum();
        },
        _calcSum() {
            this.sum = 0;
            this.items.forEach(item => {
                this.sum += item.productAmount * item.productPrice;
            });

            this.totalContainer.innerText = this.sum;
        },
        add(item) {
            let findItem = this.items.find(el => el.productId == item.productId); 

            if (findItem) {
                let strItem = this.items.indexOf(findItem);
                this.items[strItem].productAmount++;
            } else {
                this.items.push(item);
            }
            this._render();
        },

        _hadleEvents() {
            let openWindowBasket = document.querySelector ('.basket');
            let isOpenWindow = false;
            
            document.body.onclick = (event) => {
                if (event.target.classList == 'cart-open' && isOpenWindow == false) {
                    isOpenWindow = true;
                    openWindowBasket.classList.toggle('hidden');
                } else if (event.target.offsetParent.classList != 'basket' && event.target.classList != 'basket' && isOpenWindow == true) {
                    isOpenWindow = false;
                    openWindowBasket.classList.toggle('hidden');
                }
                if (event.target.classList == 'delete') {
                    let id = event.target.dataset.id;
                    this._remove(id);
                }
                
            }
        },

        _remove(id) {
            let item = this.items.find(el => el.productId == id); 
            
            if (item.productAmount > 1) {
                item.productAmount--;
            } else {
                let strItems = this.items.indexOf(item);
                this.items.splice((strItems), 1);
            }

            this._render();
        }

    }
    
    return basket;
    //basket.init();
}


function getBasketItems(TITLES, PRICES, AMOUNTS) {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createBasketItem(i, TITLES, PRICES, AMOUNTS));
    }

    return arr;
}


function createBasketItem(index, TITLES, PRICES, AMOUNTS) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productAmount: AMOUNTS[index],
        productId: `prod_${index + 1}` //'prod_1'
    }
}

function renderBasketTemplate(item, i) {
    return `
    <div class="basket-prod">
		<div>
			<img src="img/rectangle_24_182${item.productId}.png" alt="">
		</div>
		<div class="info">
			<p class="rebox">${item.productName}</p>
			<img src="img/______1824.png" alt="">
			<p class="price">${item.productAmount} x $${item.productPrice}</p>
		</div>
		<div>
            <img class="delete" src="img/__1827.png" alt="" data-id="${item.productId}">
		</div>
	</div>
	<div class="basket-line"></div>
`
}