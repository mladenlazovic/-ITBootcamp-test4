import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const LAUNCHES = '/launches'

export const getLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}`)
export const getRockets = () => axios.get('https://api.spacexdata.com/v4/rockets')