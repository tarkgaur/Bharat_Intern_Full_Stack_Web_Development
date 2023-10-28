document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const imageInput = document.getElementById("image-input");
    const imagePreview = document.getElementById("image-preview");
    const videoInput = document.getElementById("video-input");
    const videoPreview = document.getElementById("video-preview");
    const addButton = document.getElementById("add-button");
    const content = document.getElementById("content");

    addButton.addEventListener("click", function () {
        const text = textInput.value;
        const imageFile = imageInput.files[0];
        const videoFile = videoInput.files[0];

        if (text || imageFile || videoFile) {
            const elementDiv = document.createElement("div");

            if (text) {
                const textElement = document.createElement("p");
                textElement.textContent = text;
                elementDiv.appendChild(textElement);
            }

            if (imageFile) {
                const imageElement = document.createElement("img");
                imageElement.src = URL.createObjectURL(imageFile);
                elementDiv.appendChild(imageElement);
            }

            if (videoFile) {
                const videoElement = document.createElement("video");
                videoElement.src = URL.createObjectURL(videoFile);
                videoElement.controls = true;
                elementDiv.appendChild(videoElement);
            }

            content.appendChild(elementDiv);
        }

        textInput.value = "";
        imageInput.value = "";
        imagePreview.src = "";
        videoInput.value = "";
        videoPreview.src = "";
    });

    imageInput.addEventListener("change", function () {
        const imageFile = imageInput.files[0];
        if (imageFile) {
            imagePreview.src = URL.createObjectURL(imageFile);
        }
    });

    videoInput.addEventListener("change", function () {
        const videoFile = videoInput.files[0];
        if (videoFile) {
            videoPreview.src = URL.createObjectURL(videoFile);
        }
    });
});
