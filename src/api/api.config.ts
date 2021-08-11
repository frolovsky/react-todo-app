export const apiConfig = {
  baseURL: process.env.REACT_APP_NODE_ENV === 'development' ? 'localhost:3000' : '',
  timeout: 30000,
}
