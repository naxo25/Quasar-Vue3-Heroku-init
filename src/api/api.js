
const getDataUsers = () => {
	return fetch('https://randomuser.me/api/?results=12').then(async response => {
	  const data = await response.json()
	  return data.results
  })
}

export { 
	getDataUsers
}