let t = "python";
function upload(keyword, tab) {
  if (tab == "") tab = "python";
  t = tab;

  if (keyword !== "") keyword = `?title_like=${keyword}`;
  fetch("http://localhost:3000/" + tab + "/" + keyword)
    .then((response) => response.json())
    .then((data) => {
      let ay = document.getElementById("bgbox");
      let temp = ` <div class="info">
      <h3>${data[0].head3}</h3>
      
        <br>

        <p>
        ${data[0].p1}
        </p>
        <br>
        <div>  <a href="#" class="in">Explore ${tab}</a></div>
     
    </div>`;
      console.log(data);
      temp += `<div class="carousel-item active">
<div class="cards-wrapper">`;
      let cnt = 0;
      data.forEach((element) => {
        if (cnt % 5 == 0 && cnt != 0) {
          temp += `</div>
            </div>
          <div class="carousel-item">
            <div class="cards-wrapper">`;
        }
        cnt++;
        temp += `<div class="box">
<img src="${element.image}" alt="">
<h3>${element.title}</h3>
<p><sub>${element.instructors}</sub></p>
<span class="checked">${element.rating.toFixed(1)}</span>
`;
        for (let i = 0; i < Math.floor(element.rating); i++) {
          temp += `  <span class="fa fa-star checked "></span>`;
        }
        temp += ` <span class="fa-solid fa-star-half-stroke checked"></span>`;
        for (let i = Math.floor(element.rating); i < 4; i++) {
          temp += `<span class="fa fa-star  empty "></span>`;
        }
        temp += ` 
<span class="rate"> (7,423 ratings)</span>
<span>E£ ${element.price} E£ <del> ${(element.price * 2).toFixed(
          0
        )}</del> </span>
</div>`;
      });
      temp += `</div>
      </div>`;
      ay.innerHTML = temp;
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
console.log(t);
upload(b, t);
