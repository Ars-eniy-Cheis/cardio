import SwaggerClient from 'swagger-client'
import axios from 'axios';

let client = null

// Enable axios logging
axios.interceptors.request.use(request => {
    return request;
  });

export async function getClient(handleLogout) {
  if(!client) {
    client = new SwaggerClient({
      url: './Cardio.yaml',
      requestInterceptor: req => {
        return req;
      },
      responseInterceptor: res => {
        // Проверяем код ошибки, если он указывает на просроченность токена
        if (res.status === 401 || res.status === 403) {
          // Предполагая, что у вас есть действие выхода из системы logoutAction
          //handleLogout()
        }
        return res;
      },
    })
    }
    return client
}

export function setClient(newClient) {
    client = newClient
}

//