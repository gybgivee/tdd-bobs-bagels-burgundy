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

        const checkSize = this.basketSize - this.basketCapacity()

        const product = this.getMenu();
        const total = (itemQuantity*product[itemName]).toFixed(2)

        const insideBasket = {
            item: itemName,
            quantity: itemQuantity,
            price: product[itemName],
            total: parseFloat(total)
        }

        if (checkSize >= itemQuantity) {

            this.basket.push(insideBasket);

            return this.basket
        }

        return "Basket full, Please choose a bigger basket."

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
        const currentBasketCapacity = this.basket.reduce((total, element) => { return total + element.quantity }, 0)
       
        return currentBasketCapacity
    }

    priceChecker(itemName) {

        const product = this.getMenu();

        return product[itemName]
    }

    basketTotal() {
       
        const totalPrice = this.basket.reduce((total, element) => { return total + element.total }, 0)
        
        return ("£" + totalPrice)
    }
}


module.exports = Basket