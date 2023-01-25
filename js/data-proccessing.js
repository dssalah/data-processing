const queryString = window.location.search;

if(queryString.length > 0){
const urlParams = new URLSearchParams(queryString);

    let myData = "";
    let myCart ="";
    let myTotal =0;//will store
    //Log the values
    myCart += "<h3>Cart Contents</h3>";
    urlParams.forEach(function(value, key) {
   
    if(key == "Cart"){//process cart
        //alert("Cart" + value);
        switch(value){
            case "Widget":
                myCart += "Widget: $3.99<br>"
                myTotal += 3.99
                break;
             case "Sprocket":
                myCart += "Widget: $5.99<br>"
                myTotal += 5.99;
             break;

             case "Thingy":
                myCart += "Widget: $1.99<br>"
                myTotal += 1.99
             break;
        }

        }else{//process shipping
            key = key.split("_").join(" ");
            //console.log(key, value);
            myData += `<p>${key}: ${value}</p>`;
    }
});

    myCart +="Total: " + myTotal + '<br>';

    // WE WANT TEH CART DATA FIRST, THEN THE THE SHIPPING
    myData = myCart + myData;

    myData += '<p><a href="index.html">CLEAR</a></p>';
    document.getElementById("output").innerhtml = myData;
}

    


