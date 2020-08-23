$(()=>{
  $('#btn').click(()=>{
    let val=$('#country').val()
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=e8ca7a87017d19b99fcd447e50580ca9`,data=>{
        let temp =data.main.temp
        temp=parseFloat(temp)-273.15
        $('#temp').val(parseInt(temp))
        let feels_like=data.main.feels_like
        feels_like=parseFloat(feels_like)-273.15
        $('#feels_like').val(parseInt(feels_like))
        let temp_min=data.main.temp_min
        temp_min=parseFloat(temp_min)-273.15
        $('#temp_min').val(parseInt(temp_min))
        let temp_max=data.main.temp_max
        temp_max=parseFloat(temp_max)-273.15
        $('#temp_max').val(parseInt(temp_max))
        let humidity=data.main.humidity
        $('#humidity').val(humidity+"%")
        let pressure=data.main.pressure
        $('#pressure').val(pressure+" hPa")
    })

  })
})