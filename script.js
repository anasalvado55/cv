document.addEventListener("DOMContentLoaded", function () {
    var imagesLeft = ["pe1.png", "pe2.png", "pe3.png", "pe4.png", "pe5.png", "pe6.png", "pe7.png", "pe8.png", "pe9.png", "pe10.png", "pe11.png", "pe12.png", "pe13.png", "pe14.png", "pe15.png", "pe16.png", "pe17.png", "pe18.png", "pe19.png", "pe20.png", "pe21.png", "pe22.png"]; 
    var imagesRight = ["pd1.png", "pd2.png", "pd3.png", "pd4.png", "pd5.png", "pd6.png", "pd7.png", "pd8.png", "pd9.png", "pd10.png", "pd11.png", "pd12.png", "pd13.png", "pd14.png", "pd15.png", "pd16.png", "pd17.png", "pd18.png", "pd19.png", "pd20.png", "pd21.png"]; 
    var leftImageIndex = 0;
    var rightImageIndex = 0;
    var leftImage = document.querySelector("#container img:first-child");
    var rightImage = document.querySelector("#container img:last-child");

    leftImage.addEventListener("click", function () {
        leftImageIndex = (leftImageIndex + 1) % imagesLeft.length;
        leftImage.src = "imagens/" + imagesLeft[leftImageIndex];
    });

    rightImage.addEventListener("click", function () {
        rightImageIndex = (rightImageIndex + 1) % imagesRight.length;
        rightImage.src = "imagens/" + imagesRight[rightImageIndex];
    });
});
