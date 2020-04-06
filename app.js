async function getUsers() {
    let users;
    const data = fetch(`http://localhost:3000/users`).then(
        res => res.json()
    );
    await data.then(
        res => users = res
    );
    return users;
}

async function getCompanies() {
    let companies;
    const data = fetch(`http://localhost:3000/companies`).then(
        res => res.json()
    );
    await data.then(
        res => companies = res
    );
    return companies;
}

async function mapUsersToCompanies() {
    const users = await getUsers();
    const companies = await getCompanies();
    const table = document.getElementById("myTable");

    for(let counter = 0; counter < companies.length; counter++) {
        let row = table.insertRow(counter + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerText = companies.filter((entry) => {
             return entry.uri === `/companies/${counter}`
        }).map(a => a.name);
        cell2.innerText = users.filter((entry) => {
            return entry.uris.company === `/companies/${counter}`
        }).map(a => a.name);
    }
}

mapUsersToCompanies();
