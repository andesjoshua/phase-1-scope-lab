// Write your solution in this file!
var customerName = 'bob'
var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase()
    return customerName    
}
var setBestCustomer = () => {
    bestCustomer = 'not bob';
}
var overwriteBestCustomer = () => {
    return bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'mary';
var changeLeastFavoriteCustomer = () => {
    return leastFavoriteCustomer = 'cho'
}