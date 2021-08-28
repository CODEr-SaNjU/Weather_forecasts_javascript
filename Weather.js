let button = document.querySelector('.btn')
let inputValue = document.querySelector('input')
let city_name = document.querySelector('.city_name');
let temp = document.querySelector('.temp');
let max_tem = document.querySelector('.max_tem');
let min_temp = document.querySelector('.min_temp');
let humidity = document.querySelector('.humidity');
let wind_speed = document.querySelector('.wind_speed');
let desc = document.querySelector('.desc');



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=706b854629f2bdc189041532abf754fd')
    .then(response=>response.json())
    .then(data =>{
        let nameValue = data['name']
        let tempValue = data['main']['temp']
        let max_temValue = data['main']['temp_max'];
        let min_tempValue = data['main']['temp_min'];
        let humidityValue = data['main']['humidity'];
        let wind_speedValue = data['wind']['speed'];
        let descValue = data['weather'][0]['description'];
        
        city_name.innerHTML = "City Name : "+nameValue
        temp.innerHTML = "temperature : "+tempValue+"&deg;C"
        max_tem.innerHTML = "max_temperature : "+max_temValue+"&deg;C"
        min_temp.innerHTML = "min_temperature : "+min_tempValue+"&deg;C"
        humidity.innerHTML = "Humidity at : "+humidityValue+" %"
        wind_speed.innerHTML ="Wind Speed  : "+wind_speedValue+" m/s"
        desc.innerHTML = "cloudiness :: "+descValue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

})

.catch(err => alert("city not found "))
})