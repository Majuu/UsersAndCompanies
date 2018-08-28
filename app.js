//json-server --watch db.json -> odpala server w trybie watch

let companies;
let users;

/*
fetch("http://localhost:3000/companies").then(         //wrong solution, but working
    res => {return res.json()}
).then(res => {
    companies = res
    fetch("http://localhost:3000/users").then(
        res => {return res.json()}).then(res => {
        users = res
        console.log({companies, users})
    })
})
*/

fetch(`http://localhost:3000/users`)
    .then(usersResponse => {
        console.log('The users are fetched');
        return fetch(`http://localhost:3000/companies`);
    })
    .then(companiesResponse => {
        console.log('The companies are fetched', companiesResponse);
        return companiesResponse.json();
    })
    .then(companiesData => {
        console.log('List of companies', companiesData);
        return companiesData.length;
    })
    .then(companiesAmount => {
        console.log(companiesAmount); // just an amount of companies
    });
