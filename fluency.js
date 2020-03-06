const apiKey = `690e069462802134ec9356cbafc9a9a7
`
const getWeatherData = async function (city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const json = await data.json()
    return json
}
console.log(getWeatherData('London'));

const getTemp = async function (city) {
    const data = await getWeatherData(city);
    return (((data.main.temp) * (9 / 5)) - 459.67)
}

const getDesc = async function (city) {
    const data = await getWeatherData(city);
    return data.weather[0].description
}

const getSun = async function (city) {
    const data = await getWeatherData(city);
    console.log(data)
    return `Sunrise in ${city} is ${data.sys.sunrise} and the sunset is ${data.sys.sunset}`

}

const feelsLike = async function (city) {
    const data = await getWeatherData(city);
    return `${city}: feels like ${data.main.feels_like}`
}

const windAndCloudInfo = async function (city) {
    const data = await getWeatherData(city);
    return `In ${city} there are ${data.clouds.all} and wind speed is ${data.wind.speed}`
}

const getdata = async function (ingredients) {
    const data = await `http://www.recipepuppy.com/api/?i=${ingredients}`
    const json = await data.json()
    return json
}

const recipeTitle = async function (ingredients) {
    const data = getdata(ingredients);
    return data.results.title
}

const viewRecipe = async function (ingredients) {
    const data = getdata(ingredients);
    return `${data.results.title} and source is at ${data.results.href}`
}

const prepping = async function (ingredients) {
    const data = getdata(ingredients);
    return `The recipe is ${data.results.title}. You'll need ${data.results.ingredients}`
}
