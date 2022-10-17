
const render=(peliculas)=>{
    let render = `
    <article>
        <div class="contenedor">
            <h2>${peliculas.nombre}</h2>
            <img src="${peliculas.path}" alt="${peliculas.nombre}"/>
            <p><span>${peliculas.desc}</span></p>
        </div>
    </article>
`
document.write(render);
}



let url = "./js/data.json";

fetch(url)
    .then(res => res.json())
    .then(data =>
        {
            let peliculas = data.peliculas;

            peliculas.forEach( peliculas => render(peliculas));
        });


