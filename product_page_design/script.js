let image = document.querySelector("#product-image");
let allBoxes = document.querySelectorAll(".box");

let htmlArr = Array.from(allBoxes)

for (let span of htmlArr) {
    span.addEventListener("click", function (e) {
        allBoxes[0].classList.remove("checked")
        allBoxes[1].classList.remove("checked")
        allBoxes[2].classList.remove("checked")
        e.target.classList.add("checked")

        if (e.target.id === "box1") {
            image.src = "./assets/image1.png"
        }
        if (e.target.id === "box2") {
            image.src = "./assets/image2.png"
        }
        if (e.target.id === "box3") {
            image.src = "./assets/image3.png"
        }

    })
}
