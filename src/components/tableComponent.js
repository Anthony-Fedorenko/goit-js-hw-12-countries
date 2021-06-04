

export const tableComponent = (data, root) => {

  if (!Array.isArray(data)) return

  const element  = data.map(item => `<li>${item.name}</li>`).join('')
  const ul = `<ul>
                   ${element}
              </ul>


                  `

  root.insertAdjacentHTML('beforeend', ul)

}
