fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let datos = ``

        for(let usuario of data){
            datos += `
             <div class="col-lg-4 col-sm-12 p-5">
            <div class="card" style="width: 18rem;">
                <img src="${usuario.avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${usuario.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${usuario.email}</li>
                  <li class="list-group-item">${usuario.password}</li>

                </ul>
            </div>
            </div>
            `
        }
        document.getElementById("tabla").innerHTML = datos
    })