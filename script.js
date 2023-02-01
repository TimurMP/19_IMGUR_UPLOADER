const file = document.getElementById("file")
const input = document.querySelector("input")
let imagesArray = []
input.addEventListener("change", () => {
    const files = input.files
    imagesArray.push(files[0])
    console.log(files[0])
})

let myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 76f00d4ef97eb17");

let formdata = new FormData();
formdata.append("image", file[0]);


var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};

upload.onclick = e => {
    fetch("https://api.imgur.com/3/upload", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

// fetch("https://api.imgur.com/3/upload", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log(error));





