document.addEventListener("DOMContentLoaded", function () {
    var images = [
        "v1.jpeg", "v2.jpeg", "v3.jpeg", "v4.jpeg", "v5.jpeg", "v6.jpeg", "v7.jpeg",
"v8.jpeg", "v9.jpeg", "v10.jpeg", "v11.jpeg", "v12.jpeg", "v13.jpeg", "v14.jpeg",
"v15.jpeg", "v16.jpeg", "v17.jpeg", "v18.jpeg", "v19.jpeg", "v20.jpeg", "v21.jpeg",
"v22.jpeg", "v23.jpeg", "v24.jpeg", "v25.jpeg", "v26.jpeg", "v27.jpeg", "v28.jpeg",
"v29.jpeg", "v30.jpeg", "v31.jpeg", "v32.jpeg", "v33.jpeg", "v34.jpeg", "v35.jpeg",
"v36.jpeg", "v37.jpeg"

    ];

    var gridContainer = document.getElementById("imageGrid");

    images.forEach(function (imageSrc) {
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        var img = document.createElement("img");
        img.src = "imagens/" + imageSrc;

        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
});
