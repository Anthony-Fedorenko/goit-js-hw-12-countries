



export const fetchCountries = (name) => {

 return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res =>res.json())
   .then(res => {
     if (res.status > 400) {
       throw new Error(data.message || 'Something wrong')
     }

    return res
   })
}
