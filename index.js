
var customerName = "bob";


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

upperCaseCustomerName();

var  bestCustomer;

function setBestCustomer() {

    bestCustomer = 'not bob';
   return bestCustomer;

  }

   setBestCustomer();

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;

}
overwriteBestCustomer('maybe bob');

const leastFavoriteCustomer = 'mike';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'jane';
}

console.log(changeLeastFavoriteCustomer());
