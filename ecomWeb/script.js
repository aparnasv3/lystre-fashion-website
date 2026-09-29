
let heroCat = document.querySelector("#herocate");

fetch("./data.json")
  .then(response => {
    console.log("Response:", response);
    return response.json();
  })
  .then(data => {
    console.log("JSON DATA:", data);

    data.findyourlook.map((obj) => {
      heroCat.innerHTML += `
        <div class="categoryCard" style="background-image:url('${obj.img}')">
        <button class='categoryBtn'>${obj.homeCategory}</button>
        </div>
      `;
    });

    // Category Navigation
    let catgeoryBtn = document.querySelectorAll('.categoryBtn');
    catgeoryBtn.forEach(btn =>{
     btn.addEventListener('click', (e)=>{
      console.log('clicked navigation btn')
       if(e.target.innerText == 'women'){
        location.href = 'women.html'
       }else if(e.target.innerText == 'men'){
             location.href = 'men.html'  }
         else if( e.target.innerText == 'kids'){
               location.href = 'kids.html'}
     })
    })
//category navigation ends her


  })

  .catch(error => {
    console.log("ERROR:", error);
  });

  

  let hero2Img = document.querySelector("#hero2Rimg");
   fetch("./data.json")
     .then (response => {return response.json();})
     .then( data =>{
             data.hero2R.map((obj)=>{
             hero2Img.innerHTML += `
             <div class="img">
             <img src="${obj.img}" alt="${obj.text}">
             <p>${obj.text}</p>
             </div>
             `;
             });
            } ) .catch(error => console.log("error:", error));

let trend = document.querySelector(".trend");
fetch("./data.json")
.then(respones => respones.json())
.then(data => {
  data.trending.map((obj)=>{
    trend.innerHTML += `
    <div class="trendJs"> 
    <img src="${obj.img}" alt="img not found">
    <h4>${obj.name}</h4>
    <p>${obj.Rs}</p>
    </div>
    `
  }
  )
})

// responsive
let menuIcon = document.querySelector('#menuIcon');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {

    nav.classList.toggle('active');

});