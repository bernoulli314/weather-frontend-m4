document.addEventListener(
"DOMContentLoaded",
()=>{

    const parametros =
    new URLSearchParams(
        window.location.search
    );

    const id = parametros.get("id");


    const planeta = todosLosPlanetas.find(p=>p.id===id);

    const detalle = document.getElementById("detalle_planeta");
    const contenedor = document.getElementById("contenedor_tiempo_semanal");
    const zona_img = document.getElementById("img_planeta")


    if(planeta){

        detalle.innerHTML=`

        <h1>

            ${planeta.icono}
            ${planeta.nombre}

        </h1>

        <p>
            💧 Humedad:
            ${planeta.humedad}
        </p>

        <p>
            💨 Viento:
            ${planeta.viento}
        </p>

        <p>
            ⚖️ Gravedad:
            ${planeta.gravedad}
        </p>

        <p>
            🪨 Composición:
            ${planeta.composicion}
        </p>

        <p>

            ${planeta.descripcion}

        </p>

        `;

        zona_img.innerHTML=`
        <img
        max-width: 300px;
        height: auto;
        src="${planeta.imagen_url}"
        class="card-img-top"
        alt="${planeta.nombre}"
        >
        `


        planeta.pronostico.forEach(
        dia=>{

            const card=`

            <div class="col">

                <div class="card h-100">

                    <div class="card-body text-center">

                        <h3>
                            ${dia.dia}
                        </h3>

                        <div class="display-4">
                            ${dia.icono}
                        </div>

                        <h4>
                            ${dia.temp}
                        </h4>

                        <p>
                            ${dia.estado}
                        </p>

                    </div>

                </div>

            </div>

            `;

            contenedor.insertAdjacentHTML(
                "beforeend",
                card
            );

        });

    }

});