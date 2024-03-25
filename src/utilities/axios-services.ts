import axios, { type AxiosResponse, AxiosError } from 'axios'

export type ServerResponse<T = null> = {
  status: HTTPCODE
  message: string
  success: boolean
  results: T | null
}

export enum HTTPCODE {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  EXPECTATION_FAILED = 417,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504
}

const axiosService = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosService.interceptors.response.use(
  (response: AxiosResponse) => {
    const formattedResponse: ServerResponse = {
      status: response.data.status,
      message: response.data.message || 'OK',
      success: true,
      results: response.data.results || null
    }
    return formattedResponse
  },
  (error: AxiosError) => {
    const errorResponse: ServerResponse = {
      status: error.response ? error.response.status : HTTPCODE.INTERNAL_SERVER_ERROR,
      message: error.response
        ? (error.response.data as ServerResponse).message
        : 'Internal Server Error',
      success: false,
      results: null
    }
    return Promise.reject(errorResponse)
  }
)

const handleResponse = <T>(response: AxiosResponse<ServerResponse<T>>): T => {
  const responseData = response

  if (!responseData.success) {
    throw new Error(responseData.message)
  }

  return responseData as T
}

export { axiosService, handleResponse }
