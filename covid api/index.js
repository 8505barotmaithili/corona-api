let mainSection = document.getElementById("corona");

function fetchdata() {
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then((res) => res.json())
        .then((data) => {
            card(data.data.regional); 
        })
        .catch((err) => console.log("Error fetching data:"));
}
fetchdata();

function card(data) {
    const store = data.map((region) =>
        adddata(
            region.totalConfirmed, 
            region.confirmedCasesIndian, 
            region.confirmedCasesForeign, 
            region.discharged, 
            region.deaths
        )
    );
    mainSection.innerHTML = store.join('');
}

function adddata(total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths) {
    return `
        <div class="card-body">
            <h4 class="card-name"> ${total}</h4>
            <p class="card-category"> ${confirmedCasesIndian}</p>
            <p class="card-category"> ${confirmedCasesForeign}</p>
            <p class="card-category"> ${discharged}</p>
            <p class="card-category"> ${deaths}</p>
        </div>
    `;
}
