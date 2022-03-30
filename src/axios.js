import axios from 'axios'
const BASE_URL = "http://localhost:8800/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDJhYTA1ZTg3MTJkY2Y2ZGYzODE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODY1MDUxMSwiZXhwIjoxNjQ4OTA5NzExfQ.YZ_0ligAXWdT6fH3gY7PW0r9L3crHa0PRuJtlAuC2qk"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})