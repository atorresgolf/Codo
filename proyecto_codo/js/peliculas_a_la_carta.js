
/*const render=(peliculas)=>{
    let render = `
    <article>
        <div class="contenedor">
            <h2>${peliculas.nombre}</h2>
            <img src="${peliculas.path}" alt="${peliculas.nombre}"/>
            <p><span>${peliculas.desc}</span></p>
        </div>
    </article>
`
let main = document.querySelector('main');
let renderizado = document.write(render)
//console.log(renderizado);
//main.appendChild();
}*/



let url = "./js/data.json";

let main = document.querySelector('main');
main.setAttribute('id', 'container');
let sectionGrid = document.createElement('section');


main.appendChild(sectionGrid);
sectionGrid.setAttribute('id', 'grid');

let cuerpo = document.getElementById('grid')

fetch(url)
    .then(res => res.json())
    .then(data =>
        {
            let peliculas = data.peliculas;

          // peliculas.forEach( peliculas => render(peliculas));
          peliculas.forEach( peliculas =>render(cuerpo, peliculas));
        });

function render(rootElement, peliculas) {
   
    let article = document.createElement('article');

    let div = document.createElement('div');
    div.className = 'contenedor';

    let h2 = document.createElement('h2');
    h2.innerHTML = peliculas.nombre;

    let img = document.createElement('img');
    img.src = peliculas.path;
    
    let p = document.createElement('p');
    p.innerHTML = peliculas.desc;

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);

    article.appendChild(div);
    
    rootElement.appendChild(article)
}
//let main = document.querySelector('main');
//main.setAttribute('id', 'container');

//let cuerpo = document.getElementById('container')

//peliculas.forEach(e =>(cuerpo,e));

