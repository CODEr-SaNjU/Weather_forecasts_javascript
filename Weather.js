var button = document.querySelector('.btn')
var inputValue = document.querySelector('.form-control')
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var max_tem = document.querySelector('.max_tem');
var min_temp = document.querySelector('.min_temp');
var humidity = document.querySelector('.humidity');
var wind_speed = document.querySelector('.wind_speed');
var desc = document.querySelector('.desc');





button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=706b854629f2bdc189041532abf754fd')
    .then(response=>response.json())
    .then(data =>{
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var max_temValue = data['main']['temp_max'];
        var min_tempValue = data['main']['temp_min'];
        var humidityValue = data['main']['humidity'];
        var wind_speedValue = data['wind']['speed'];
        var descValue = data['weather'][0]['description'];
       
       
        
        
        name.innerHTML = "City Name : "+nameValue
        temp.innerHTML = "temperature : "+tempValue+"&deg;C"
        max_tem.innerHTML = "max_temperature : "+max_temValue+"&deg;C"
        min_temp.innerHTML = "min_temperature : "+min_tempValue+"&deg;C"
        humidity.innerHTML = "Humidity at : "+humidityValue+" %"
        wind_speed.innerHTML ="Wind Speed  : "+wind_speedValue+" m/s"
        desc.innerHTML = "cloudiness :: "+descValue
          
      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

})

.catch(err => alert("city not found "))
})