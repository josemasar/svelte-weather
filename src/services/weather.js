const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6af74f64emsh0adca7d3281302ap13f4f7jsn92ef916feac6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export function getWeatherFrom (query = 'Buenos Aires'){
    return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
	.then(response => response.json())
	.then(response => { 
        const { location, current}  = response; 
        const { country, localtime, name } = location;
        const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current;
        const { code, text } = condition;
        return { 
            conditionText: text,
            conditionCode: code,
            country, 
            localtime, 
            name, 
            humidity, 
            isDay: is_day, 
            feelsLike:feelslike_c, 
            temperature: temp_c, 
            windSpeed: wind_kph, 
            windDir: wind_dir
        }
    })
	.catch(err => console.error(err));
}
