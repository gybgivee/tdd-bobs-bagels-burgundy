class Basket {


    constructor(basket = [], capacity = 5) {
        this.basket = basket;
        this.basketSize = capacity;

    }
    getBasket() {
        return this.basket
    }
    getMenu() {

        const menu =
        {
            bagel: 2.99,
            brownie: 3.99,
            chocolateBagel: 4.99
        }

        return menu;
    }
    addItem(itemName, itemQuantity) {


        const product = this.getMenu();

        const insideBasket = {
            item: itemName,
            quantity: itemQuantity,
            price: product[itemName]
        }
        this.basket.push(insideBasket);

    }

    removeItem(itemName) {

        const myBasket = this.basket;
 

        for (let i = 0; i < myBasket.length; i++){

            if (myBasket[i].item === itemName) {
                myBasket.splice(i, 1)
                return myBasket
            }
            else if (myBasket.item !== itemName)
                return "This item is not in the basket."
        }
            
    }

    basketCapacity() {
        const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
        if (totalCapacity > this.basketSize) {
            return "Basket full, Please choose a bigger basket."
        }
    }

    priceChecker(itemName) {
        const fullMenu = this.getMenu();
        for (const items in fullMenu)
            if (itemName === items) { return fullMenu[items] }
    }

    basketTotal() {
        let eachItem = []
        for (let i = 0; i < this.basket.length; i++) {
            eachItem.push(this.basket[i].quantity * this.basket[i].price)
        }
        const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
        return ("£" + totalPrice)
    }
}


module.exports = Basket