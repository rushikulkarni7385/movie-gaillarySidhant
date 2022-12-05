let cl = console.log;
const btnclick = document.getElementById("Btn");
const backDrop = document.getElementById("backDrop");
const myModal = document.getElementById("myModal");
const cancel = Array.from(document.querySelectorAll("#Cancel")); 
const text = document.getElementById("text");
const Moves = document.getElementById("movieUrl");
const rating = document.getElementById("Rating");
const movieform = document.getElementById("movieform");
const AddUI = document.getElementById("add");
// cl(movieUrl);

let MoviArray =[];

const showHandlar = function(event){
     cl(event.type);
     backDrop.classList.remove("d-none");
     myModal.classList.remove("d-none");
};

const Hideandler = (event)=>{
    event.target.classList.add('d-none');
}
const hideall = (event)=>{
    myModal.classList.add("d-none");
    backDrop.classList.add("d-none")
};
const MovieAdd = ((event)=>{
     event.preventDefault();
     let obj = {
        text: text.value,
        movie1 : Moves.value,
        rating : rating.value
     }
    cl(obj)
    MoviArray.push(obj);
     AddUiof(MoviArray);
    event.target.reset();
        hideall();

});
function AddUiof(element){
    let result = "";
    element.forEach((arr)=>{
        result+= ` <div class="col-md-4">
        <h1>${arr.text}</h1>
        <figure>
            <img src="${arr.movie1}">
        </figure>
        <figcaption>
            <p>${arr.rating}</p>
        </figcaption>
    </div>`;
    })
    cl(result);
    add.innerHTML = result;
}; 





btnclick.addEventListener("click", showHandlar);
backDrop.addEventListener("click", Hideandler);
movieform.addEventListener("submit", MovieAdd);
 cancel.forEach((iems)=>{
    iems.addEventListener("click", hideall);
 });

 



