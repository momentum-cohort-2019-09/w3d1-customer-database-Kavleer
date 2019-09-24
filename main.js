
const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customerToHTML (customer, states){
    return `
<div class="profile">

<img src="${customer.picture.large}" alt="Pic of ${customer.name.first}">
<div class="name">
${capitalize(customer.name.first)} ${capitalize(customer.name.last)}
</div>
<div class="email">
${customer.email}
</div>
<div class="street">
${customer.location.street}
</div>
${customer.location.city}, ${customer.location.state} ${customer.location.postcode}
<br>

DOB: ${customer.dob}
<br>
Customer since: ${customer.registered}
</div>
`
}



document.querySelector('#customerDB').innerHTML = customers.map(customerToHTML).join('\n')