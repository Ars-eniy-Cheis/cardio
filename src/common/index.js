import SwaggerClient from 'swagger-client'

let client = null

export async function getClient() {
    if(!client){
        client = await SwaggerClient('./Cardio.yaml')
    }
    return client
}