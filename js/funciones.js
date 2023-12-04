const url = " https://apidonantes.onrender.com/donantes ";
// const url = 'http://localhost:5000/donantes'
const regresarListar = () => {
  window.location.href = "index.html";
};
const listarDonantes = async () => {
  let objectId = document.getElementById("contenido");
  let contenido = "";
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then(function (data) {
      let listarDonante = data.msg;

      listarDonante.map(function (donantes) {
        objetoDonante = Object.keys(donantes)
          .map((key) => key + "=" + encodeURIComponent(donantes[key]))
          .join("&");

        contenido =
          contenido +
          "<tr>" +
          `<td>` +
          donantes.id_Donante +
          `</td>` +
          `<td>` +
          donantes.nombre_Donante +
          `</td>` +
          `<td>` +
          donantes.direccion_Donante +
          "</td>" +
          `<td>` +
          donantes.telefono_Donante +
          `</td>` +
          `<td>` +
          donantes.email_Donante +
          `</td>` +
          `<td>` +
          donantes.tipo_Donante +
          `</td>` +
          `<td>` +
          donantes.documento_Identidad +
          `</td>` +
          `<td>` +
          donantes.fecha_Registro +
          `</td>` +
          `<td>` +
          donantes.entidad_Asociada +
          `</td>` +
          `<td> <button type="button" onclick="redirreccionarEditar('${objetoDonante}')" class="btn btn-primary">Editar</button></td>` +
          `<td> <button type="button" onclick=" confirmarEliminar('${donantes.id_Donante}')"" class="btn btn-danger">Eliminar</button></td>` +
          `</tr>`;
      });

      objectId.innerHTML = contenido;
    });
};

const registrarDonante = () => {
  const ID = document.getElementById("id").value
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const tipo = document.getElementById("tipo").value;
  const documento = document.getElementById("documento").value;
  const fecha = document.getElementById("fecha").value;
  const entidad = document.getElementById("entidad").value;

  if (nombre.length == 0) {
    document.getElementById("nombreHelp").innerHTML = "Dato requerido";
  } else if (documento.length == 0) {
    document.getElementById("documentoHelp").innerHTML = "Dato requerido";
  } else if (ID.length == 0) {
    document.getElementById("idHelp").innerHTML = "Dato requerido";
  } else if (tipo == 0) {
    document.getElementById("tipoHelp").innerHTML = "Dato requerido";
  } else if (email == 0) {
    document.getElementById("emailHelp").innerHTML = "Dato requerido";
  } else if (telefono == 0) {
    document.getElementById("telefonoHelp").innerHTML = "Dato requerido";
  } else if (fecha == 0) {
    document.getElementById("fechaHelp").innerHTML = "Dato requerido";
  } else if (direccion == 0) {
    document.getElementById("direccionHelp").innerHTML = "Dato requerido";
  } else {
    let donante = {
      id_Donante: ID, //lo primero es la clave, lo segundo es lo que se va a enviar.
      nombre_Donante: nombre,
      direccion_Donante: direccion,
      telefono_Donante: telefono,
      email_Donante: email,
      tipo_Donante: tipo,
      documento_Identidad: documento,
      fecha_Registro: fecha,
      entidad_Asociada: entidad
    };
    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(donante), //Convertir el objeto a JSON
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json()) //Obtener respuesta de la petición
      .then((json) => {
        console.log(json.msg)
        Swal.fire({
          position: "center",
          icon: "success",
          title: json.msg,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          regresarListar();
        }, 1000);
      });
  }
};

const actualizarDonante = () => {
  const ID = document.getElementById("id").value
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const tipo = document.getElementById("tipo").value;
  const documento = document.getElementById("documento").value;
  const fecha = document.getElementById("fecha").value;
  const entidad = document.getElementById("entidad").value;

  if (nombre.length == 0) {
    document.getElementById("nombreHelp").innerHTML = "Dato requerido";
  } else if (documento.length == 0) {
    document.getElementById("documentoHelp").innerHTML = "Dato requerido";
  } else if (ID.length == 0) {
    document.getElementById("idHelp").innerHTML = "Dato requerido";
  } else if (tipo == 0) {
    document.getElementById("tipoHelp").innerHTML = "Dato requerido";
  } else if (email == 0) {
    document.getElementById("emailHelp").innerHTML = "Dato requerido";
  } else if (telefono == 0) {
    document.getElementById("telefonoHelp").innerHTML = "Dato requerido";
  } else if (fecha == 0) {
    document.getElementById("fechaHelp").innerHTML = "Dato requerido";
  } else if (direccion == 0) {
    document.getElementById("direccionHelp").innerHTML = "Dato requerido";
  } else {
    let donante = {
      id_Donante: ID, //lo primero es la clave, lo segundo es lo que se va a enviar.
      nombre_Donante: nombre,
      direccion_Donante: direccion,
      telefono_Donante: telefono,
      email_Donante: email,
      tipo_Donante: tipo,
      documento_Identidad: documento,
      fecha_Registro: fecha,
      entidad_Asociada: entidad
    };
    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(donante), //Convertir el objeto a JSON
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json()) //Obtener respuesta de la petición
      .then((json) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: json.msg,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          regresarListar();
        }, 1000);

        //Imprimir el mensaje de la transacción
      });
  }
};

const redirreccionarEditar = (donante) => {
  document.location.href = "editarDonante.html?donante" + donante;
};

const editarDonante = () => {
  var urlparams = new URLSearchParams(window.location.search);

  document.getElementById("id").value = urlparams.get("id_Donante");
  document.getElementById("nombre").value = urlparams.get("nombre_Donante");
  document.getElementById("email").value = urlparams.get("email_Donante");
  document.getElementById("direccion").value = urlparams.get("direccion_Donante");
  document.getElementById("telefono").value = urlparams.get("telefono_Donante");
  document.getElementById("tipo").value = urlparams.get("tipo_Donante");
  document.getElementById("documento").value = urlparams.get("documento_Identidad");
  document.getElementById("fecha").value = urlparams.get("fecha_Registro");
  document.getElementById("entidad").value = urlparams.get("entidad_Asociada");
};

if (document.querySelector("#btnRegistrar")) {
  //Si objeto exitste
  document
    .querySelector("#btnRegistrar")
    .addEventListener("click", registrarDonante);
}

if (document.querySelector("#btnActualizar")) {
  //Si objeto existe
  document
    .querySelector("#btnActualizar")
    .addEventListener("click", actualizarDonante);
}

const eliminarDonante = async (id_Donante) => {
  try {
    const deleteUrl = `${url}`; // Solo la ruta base, ya que el ID irá en el cuerpo de la solicitud

    const response = await fetch(deleteUrl, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id_Donante }), // Incluye el ID en el cuerpo de la solicitud
    });

    if (!response.ok) {
      throw new Error(
        `Error al eliminar. Código de respuesta: ${response.status}`
      );
    }

    const json = await response.json();
    Swal.fire({
      position: "center",
      icon: "success",
      title: json.msg,
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      regresarListar();
    }, 1000);

    // Puedes realizar alguna acción adicional después de eliminar, como recargar la lista de donaciones
    // por ejemplo:
    // recargarListaDonaciones();
  } catch (error) {
    console.error("Error al eliminar el donante:", error.message);
    // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
    alert(
      "Error al eliminar el donante. Por favor, inténtalo de nuevo más tarde."
    );
  }
};
function confirmarEliminar(id_Donante) {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este donante?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarDonante(id_Donante);
    }
  });
}
