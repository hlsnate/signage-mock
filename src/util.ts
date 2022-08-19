import axios from "axios"

export const getJoke = () => axios("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  })
  .then(r => r.data)
  .catch(console.error)
    
export const getPerson = () => axios("https://randomuser.me/api/")
  .then(r => r.data?.results?.[0])
  .catch(console.error)

export const getRandomColor = () =>
  "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
