import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const client = axios.create({ baseURL });

client.interceptors.response.use((response) => response.data);

export default client;
