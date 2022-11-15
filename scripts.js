const  pokemons = [{
    id:1,
    nombre:'Charmander',
    tipo: 'Fuego',
    Descripcion:"Pokemon tipo fuego, que representa un pequeño lagarto bípedo con un color de piel anaranjado y su cola con la punta envuelta en llamas.",
    img:"https://i.imgur.com/XXI53.jpeg",},
{   id:2,
    nombre:'Bulbasaur',
    tipo:'Planta',
    Descripcion:'Pokémon tipo planta/veneno, cuadrúpedo y de color verde que posee manchas de una tonalidad más oscura con distintas formas geométricas',
    img:'https://www.teleport.mx/wp-content/uploads/2019/06/Pokemon-Bulbasaur.jpg'},
{   id:3,
    nombre:'Squirtle',
    tipo:'Agua',
    Descripcion:'Pokemon tipo agua, posee forma de una tortuga de una tonalidad azulada, su caparazón es color café, las placas periféricas de color blanco y finalmente su plastrón de una tonalidad crema',
    img:'https://pm1.narvii.com/6159/3ef6c4a73a478bb9c7de0bcd6bab6c085bbc2923_hq.jpg'},
{   id:4,
    nombre:'Gastly',
    tipo:'Fantasma',
    Descripcion:'Pokemon tipo fuego, que representa un pequeño lagarto bípedo con un color de piel anaranjado y su cola con la punta envuelta en llamas.',
    img:'https://i.pinimg.com/236x/bd/f0/91/bdf091e8a36ce0a395ab7288d8044e90.jpg'},
{   id:5,
    nombre:'Abra',
    tipo:'Psiquico',
    Descripcion:'Pokemon tipo psitico en un fénec o un zorro. Además, dispone de una coraza marrón que lo protegeTiende a tener los ojos cerrados y por esto mismo es difícil saber si está dormido o si simplemente está utilizando sus poderes telequinéticos.',
    img:'https://img.pokemondb.net/artwork/original/abra-gen1.jpg'},
{   id:6,
    nombre:'Geodude',
    tipo:'Roca',
    Descripcion:'Pokemon tipo roca, los geodudes más longevos suelen tener una forma más esférica y una superficie más lisa, debido a la erosión y desgaste que sufre durante su vida, sin embargo su pétreo corazón permanece siempre duro, rocoso y tosco',
    img:'https://i.pinimg.com/564x/fb/09/8a/fb098a8291834d6f35c2baaf3d3a2ccf--pokemon.jpg'},
]

let carrito=[]

const ContenedorPokemons= document.getElementById('#Contenedor')
const carritoContenedor=document.querySelector('#carritoContenedor')

document.addEventListener('DOMContentLoaded', ()=>{
    carrito=JSON.parse(localStorage.getItem('carritoPokemon')) || []
    mostrarCarrito()
} )
pokemons.forEach((pokemon)=>{
   const {id, nombre, tipo, Descripcion, img} = pokemon
   Contenedor.innerHTML += 
`
<div class="card" style="width: 18rem;">
<img class="card-img-top mt-2" src="${img}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <p class="card-text">${Descripcion}</p>
  <button onclick="pickPokemon(${id})" class="btn btn-primary">pick</button>
</div>
</div>
`
                                
})

function pickPokemon(id){
    const item= pokemons.find((pokemon)=> pokemon.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito=()=>{
    const modalBody=document.querySelector(".modal .modal-body")
    modalBody.innerHTML= ''

    carrito.forEach((pokemon)=>{
    const {id, nombre, tipo, img, Descripcion} = pokemon
    modalBody.innerHTML =
    `<div class="modal-contenedor">
    <div>
    <p>entrenador=${Entrenador}</p>
    <img class="img-fluid img-carrito" src="${img}"/>
    </div>
    <div>
    <p class="text-uppercase">Pokemon:${nombre}</p>
    <p>Tipo:${tipo}</p>

    <button onclick="eliminarPokemon([${id}])" class="btn btn-danger"> Elegir otro pokemon</button>

    </div>`
    })
    carritoContenedor.textContent= carrito.length
    guardarStorage()
}

function eliminarPokemon(id){
    const pokemonId= id
    carrito= carrito.filter((pokemon)=> pokemon.id !== pokemonId)
    mostrarCarrito() 
}

function guardarStorage(){
    localStorage.setItem("carritoPokemon", JSON.stringify(carrito))
}




