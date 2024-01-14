import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create({ baseURL });

client.interceptors.response.use((response) => response.data);

const getFields = () => {
    return client.get(`${baseURL}/api/fields`);
}

const getItems = (group, order, family, genus, species, area, country, origin)=> {
    return client.get(`${baseURL}/api/items/?group=${group}&order=${order}&family=${family}&genus=${genus}&species=${species}&area=${area}&country=${country}&origin=${origin}`);
}

const getItemDetail = (id) => {
    return client.get(`/api/items/${id}`);
}

export { getFields, getItems, getItemDetail }
