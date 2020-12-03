class GoodsItem {
    constructor(price, kal) {
        this.price = price;
        this.kal = kal;
    }

    getTemplate() {
        return `
        <h3>Цена: ${this.price}</h3>
        <h3>Калорий: ${this.kal}</h3>
        `;
    }
}

class IngredientList {
    priceAndKal = [];
    totalPrice = 0;
    totalKal = 0;
    

    pushIngredients() {

        document.body.onclick = (event) => {
            if (event.target.classList == 'small-burger') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_1`);
                let findItem2 = this.priceAndKal.find(el => el.id == `prod_2`);
                if (!findItem) {
                    this.priceAndKal.push({price: 50, kal: 20, id: `prod_1`});
                    this.Calcsum();
                } if (findItem2) {
                    let strItem = this.priceAndKal.indexOf(findItem2);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                }
            }
            if (event.target.classList == 'big-burger') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_2`);
                let findItem2 = this.priceAndKal.find(el => el.id == `prod_1`);
                if (!findItem) {
                    this.priceAndKal.push({price: 100, kal: 40, id: `prod_2`});
                    this.Calcsum();
                } if (findItem2) {
                    let strItem = this.priceAndKal.indexOf(findItem2);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                }
            }
            if (event.target.classList == 'cheese') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_3`);
                let findItem2 = this.priceAndKal.find(el => el.id == `prod_4`);
                let findItem3 = this.priceAndKal.find(el => el.id == `prod_5`);

                if (!findItem) {
                    this.priceAndKal.push({price: 10, kal: 20, id: `prod_3`});
                    this.Calcsum();
                } if (findItem2) {
                    let strItem = this.priceAndKal.indexOf(findItem2);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                } if (findItem3) {
                    let strItem = this.priceAndKal.indexOf(findItem3);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                }
            }
            if (event.target.classList == 'salat') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_4`);
                let findItem2 = this.priceAndKal.find(el => el.id == `prod_3`);
                let findItem3 = this.priceAndKal.find(el => el.id == `prod_5`);

                if (!findItem) {
                    this.priceAndKal.push({price: 20, kal: 5, id: `prod_4`});
                    this.Calcsum();
                } if (findItem2) {
                    let strItem = this.priceAndKal.indexOf(findItem2);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                } if (findItem3) {
                    let strItem = this.priceAndKal.indexOf(findItem3);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                }

            }
            if (event.target.classList == 'potato') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_5`);
                let findItem2 = this.priceAndKal.find(el => el.id == `prod_3`);
                let findItem3 = this.priceAndKal.find(el => el.id == `prod_4`);

                if (!findItem) {
                    this.priceAndKal.push({price: 15, kal: 10, id: `prod_5`});
                    this.Calcsum();
                } if (findItem2) {
                    let strItem = this.priceAndKal.indexOf(findItem2);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                } if (findItem3) {
                    let strItem = this.priceAndKal.indexOf(findItem3);
                    this.priceAndKal.splice(strItem, 1);
                    this.Calcsum();
                }
            }
            if (event.target.classList == 'priprava') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_6`);
                if (!findItem) {
                    this.priceAndKal.push({price: 15, kal: 0, id: `prod_6`});
                    this.Calcsum();
                }
                
            }
            if (event.target.classList == 'mayonez') {
                let findItem = this.priceAndKal.find(el => el.id == `prod_7`);
                if (!findItem) {
                    this.priceAndKal.push({price: 20, kal: 5, id: `prod_7`});
                    this.Calcsum();
                }
            }
        }
    }

    Calcsum () {
        this.totalPrice = 0;
        this.priceAndKal.forEach(item => {
            this.totalPrice += item.price;
        });


        this.totalKal = 0;
        this.priceAndKal.forEach(item => {
            this.totalKal += item.kal;
        });


        const total = new GoodsItem(this.totalPrice, this.totalKal).getTemplate();
        

        document.querySelector(".result-area").innerHTML = total;
        
    }
}

const burgerCalc = new IngredientList();
burgerCalc.pushIngredients();