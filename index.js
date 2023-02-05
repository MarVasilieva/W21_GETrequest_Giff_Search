function onSearch(){
    let wordsearch =document.getElementById("userGiff").value;
    fetch ("https://api.giphy.com/v1/gifs/search?q=" + wordsearch + "&api_key=b11HdOMgaljN360FcyhSLpDQ4plP203S&limit=5")
    .then (response => response.json())
    .then(user =>{
        console.log(user.data);
        let array = user.data;
        console.log(array);
        array.forEach(function(image) {
            const imageCat = document.createElement("img");
            const divContainer = document.querySelector("#result");
            imageCat.src = image.images.fixed_height.url;
            divContainer.appendChild(imageCat);
        });
       })
    .catch(error => console.log(error));
}
function onDelete(){
    document.querySelector("#result").innerHTML = '';
}
   