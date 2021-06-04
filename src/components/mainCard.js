

export const mainCard = (data, root) => {
  const {name, languages, population, capital, flag} = data

console.log(JSON.stringify(data, null, 2))

  const lang = languages.map(item => `<li>${item.name}</li>`).join(' ')


  const div = `<div>
                    <h2>${name}</h2>

                    <div class="mainCard">
                            <div>
                                <p>Capital <span>${capital}</span> </p>
                                <p>Population<span>${population}</span> </p>
                                <p>Languages</p>
                                 <ul>${lang}</ul>
                            </div>
                             <div><img src="${flag}" alt="flad" width="200"></div>
                    </div>
                </div>`

  root.insertAdjacentHTML('beforeend', div)

}
