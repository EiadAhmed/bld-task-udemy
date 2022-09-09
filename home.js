function upload(keyword) {
  if (keyword !== "") keyword = `?title_like=${keyword}`;
  fetch("http://localhost:3000/courses" + keyword)
    .then((response) => response.json())
    .then((data) => {
      let ay = document.getElementById("bgbox");

      data.forEach((element) => {
        let x = `<div class="box">
<img src="${element.image}" alt="">
<h3>${element.title}</h3>
<p><sub>${element.instructors}</sub></p>
<span class="checked">${element.rating.toFixed(1)}</span>
`;
        for (let i = 0; i < Math.floor(element.rating); i++) {
          x += `  <span class="fa fa-star checked "></span>`;
        }
        x += ` <span class="fa-solid fa-star-half-stroke checked"></span>`;
        for (let i = Math.floor(element.rating); i < 4; i++) {
          x += `<span class="fa fa-star  empty "></span>`;
        }
        x += ` 
<span class="rate"> (7,423 ratings)</span>
<span>E£ ${element.price} E£ <del> ${(element.price * 2).toFixed(
          0
        )}</del> </span>
</div>`;
        ay.innerHTML += x;
      });
    });
}
document.getElementById("search-form").addEventListener("submit", () => {
  window.location.href += "?q=" + document.getElementById("search-text").value;
  /* console.log(document.getElementById("search-text").value);*/
});
let a = location.href;
let idx = a.indexOf("?");
let b = "";
if (idx !== -1) b = a.substring(idx + 3);
console.log(a);
upload(b);
