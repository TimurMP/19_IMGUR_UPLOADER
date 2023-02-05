const file = document.getElementById("file")
const input = document.querySelector("input")
let imagesArray = []


let myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 76f00d4ef97eb17");

let formdata = new FormData();

input.addEventListener("change", () => {
    const files = input.files
    // imagesArray.push(files[0])
    console.log(files[0])
    formdata.append("image", files[0]);
})


var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};


upload.onclick = e => {
    fetch("https://api.imgur.com/3/upload", requestOptions)
        .then(response => response.json())
        .then(res => {
            console.log(res.data.link)
            console.log(res);
            const pic = document.createElement('div');
            pic.appendChild(document.createTextNode(`Link to your image: ${res.data.link}`));
            picture.appendChild(pic);
            const img = document.getElementById("img")
            img.src = res.data.link;
            // console.log(res.link)

        })
        // .then(result => console.log(result))
        .catch(error => console.log(error));
}

// fetch("https://api.imgur.com/3/upload", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log(error));





