var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstname = theFirst;
        this.lastname = theLast;
    }
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
