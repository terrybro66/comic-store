import axios from 'axios'

const DEV_URL = 'http://localhost:8000'
const PROD_URL = 'https://terrybro61.eu.pythonanywhere.com'

const instance = axios.create({
  baseURL: `${process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL}/comics/`
})

export default instance