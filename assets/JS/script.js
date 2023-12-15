
const apiKey ="947c7ef8f4775424300be7866e5163a0";
//let City = "london";

weatherArray = [];

// 5 days variable let Monday =


const buttonSub = $("#search-form");






buttonSub.on('click', 'button', function(event) {

    event.preventDefault();

console.log("YH");

let City = $("#search-input").val();


const QueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + City +"&appid=" + apiKey;


// do we need to push all the data points into the array then stringify and add to local storage? then parse?
weatherArray.push(City);

fetch(QueryURL)
.then(function (response) {

    return response.json();
})
.then(function (data){

   
    console.log(JSON.stringify(data, null, 2));
   console.log(data);
   console.log(weatherArray);

   let cityTitle = $('.card-body-city');
   cityTitle.text(data.city.name);

   
})




});




/*To do:

1. When user searches for a city in the input, call weather API and show the result in HTML

a- add event listener to form submit yup
b)get the user input value (make it into variable(local storage) yup
c) build query URL based on user input value yup
d) call the API (inside event listener) and render the result in html
-get city name and show it in main weather forecast card
-get the first weather forecast item [0] and get the following values:
.date
.temperature
.wind speed
.humidity
.icon

>render these values to the main card in html .attr()

loop through weather array and and get the values again:
.date
.temperature
.wind speed
.humidity
.icon


-render those values to the smaller card-




2. When user searches for a city, store it in local storage.
(add to an array, styringify and display. use pop/push/shift/unshift to keep them at 5)

3. On initial page load, load the search history and show it as a list in HTML

- build the API query URL based on the history stored in local storage
call the API and render the result in the HTML


4. When user clicks on the search history, Call weather API and show the 
result in the HTML

fetch.(QueryURL)

ICON
https://openweathermap.org/img/w/" + weather[0].icon + ".png"

*/

