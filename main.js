function validateForm() {
  let company = document.getElementById("inputCompany").value;
  let product = document.getElementById("inputProduct").value;
  let weight = document.getElementById("inputWeight").value;
  let cantidad = document.getElementById("inputCantidad").value;

  if (company == "") {
    alert("El campo empresa es requerido");
    return false;
  }
  if (product == "") {
    alert("El campo nombre es requerido");
    return false;
  }
  if (weight == "") {
    alert("El campo peso es requerido");
    return false;
  }
  if (cantidad == "") {
    alert("El campo cantidad es requerido");
    return false;
  }

  return true;
}

// read
document.addEventListener("DOMContentLoaded", function () {
  ReadData();
});
function readDAta() {
  let listCompany;
  if (localStorage.getItem("listCompany") == null) {
    listCompany = [];
  } else {
    listCompany = JSON.parse(localStorage.getItem("listCompany"));
  }

  var html = "";
  listCompany.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.company + "</td>";
    html += "<td>" + element.product + "</td>";
    html += "<td>" + element.weight + "</td>";
    html += "<td>" + element.cantidad + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Eliminar Dato</button>';
    html +=
      '<td><button onclick="editData(' +
      index +
      ')" class="btn btn-warning">Editar Dato</button>';
    html += "</tr>";
  });

  document.querySelector("#tableData tbody").innerHTML = html;
}

// create

document.onload = readDAta();

function AddData() {
  if (validateForm() == true) {
    let company = document.getElementById("inputCompany").value;
    let product = document.getElementById("inputProduct").value;
    let weight = document.getElementById("inputWeight").value;
    let cantidad = document.getElementById("inputCantidad").value;

    let listCompany;

    if (localStorage.getItem("listCompany") == null) {
      listCompany = [];
    } else {
      listCompany = JSON.parse(localStorage.getItem("listCompany"));
    }

    listCompany.push({
      company: company,
      product: product,
      weight: weight,
      cantidad: cantidad,
    });

    localStorage.setItem("listCompany", JSON.stringify(listCompany));

    readDAta();

    document.getElementById("inputCompany").value = "";
    document.getElementById("inputName").value = "";
    document.getElementById("inputWeight").value = "";
    document.getElementById("inputCantidad").value = "";
  }
}

// delete

function deleteData(index) {
  let listCompany;
  if (localStorage.getItem("listCompany") == null) {
    listCompany = [];
  } else {
    listCompany = JSON.parse(localStorage.getItem("listCompany"));
  }

  listCompany.splice(index, 1);
  localStorage.setItem("listCompany", JSON.stringify(listCompany));

  readDAta();
}
