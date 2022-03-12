const myModal = document.querySelector("#myModal");
const imgModal = document.querySelector("#img1");

function openModal(img) {
    imgModal.src = img.src;
    myModal.style.display = "flex";
    console.log(imgModal);
}

function closeModal() {
    myModal.style.display = "none";
}
