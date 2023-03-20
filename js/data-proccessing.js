

// Define the titleCase function
function titleCase(str) {
    return str.toLowerCase().split(" ").map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ");
  }
  
  // Get the query string from the URL
  const queryString = window.location.search;
  
  if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);
  
    let myData = "";
    let myCart ="";
    let myTotal =0;
  
    // Log the values
    myCart += "<h3>Cart Contents</h3>";
    urlParams.forEach(function(value, key) {
      if(key == "Cart"){
        switch(value){
          case "Widget":
            myCart += "Widget: $3.99<br>";
            myTotal += 3.99;
            break;
          case "Sprocket":
            myCart += "Sprocket: $5.99<br>";
            myTotal += 5.99;
            break;
          case "Thingy":
            myCart += "Thingy: $1.99<br>";
            myTotal += 1.99;
            break;
        }
      } else {
        // Convert the key to title case
        let formattedKey = titleCase(key.split("_").join(" "));
        // Convert the value to title case
        let formattedValue = titleCase(value);
        myData += `<p>${formattedKey}: ${formattedValue}</p>`;
      }
    });
  
    myCart +="Total: " + myTotal.toFixed(2) + '<br>';
  
    // We want the cart data first, then the shipping
    myData = myCart + myData;
  
    myData += '<p><a href="index.html">CLEAR</a></p>';
    document.getElementById("output").innerHTML = myData;
  }
  