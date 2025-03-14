const accountId = 1512
let accountEmail = "shahryar@haider.com"
var accountPassword = "12345"
accountCity = "Rawalpindi"

// prefer not to use var because of functional scope
console.log(accountCity);
console.table([accountEmail,accountId,accountPassword])
