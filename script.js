const pr = fetch("https://dummyjson.com/products");
pr.then((res) => {
  const pr2 = res.json();
  pr2.then((data) => {
    createUI(data);
  });
}).catch((err) => {
  console.log(err);
});

const main = document.getElementById("root");

function createUI(data) {
  const products = data.products;
  main.innerHTML='';
  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement("div");

    // const img = document.createElement('img');
    // img.setAttribute('src',products[i].thumbnail);
    // newCard.appendChild(img);

    // const title = document.createElement('h3');
    // title.innerText= products[i].title;
    // newCard.appendChild(title);

    // const des = document.createElement('p');
    // des.innerText= products[i].description;
    // newCard.appendChild(des);

    // const price = document.createElement('p');
    // price.innerText= products[i].price;
    // newCard.appendChild(price);

    // main.appendChild(newCard);

    newCard.innerHTML = `
            <div>
               <img src="${products[i].thumbnail}"/>
               <h3>${products[i].title}</h3>
               <p>${products[i].price}</p>
            </div>
        `;
    main.appendChild(newCard);
  }
}

function searchProducts(e) {

  const searchText = e.target.value;
  const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  pr.then((res)=>{
    const pr2 = res.json();
    pr2.then((data)=>{
        createUI(data);
    })
  });
}
