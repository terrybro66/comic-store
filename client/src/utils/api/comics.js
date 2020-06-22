const DEV_URL = 'http://localhost:8000'
const PROD_URL = 'https://terrybro61.eu.pythonanywhere.com'

const instance = `${process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL}/comics/`;

export default instance