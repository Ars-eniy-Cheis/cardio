/**
 * Cardio-in-the-VaiN
 * The API for the Cardio Center project
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthorizationScheme from '../model/AuthorizationScheme';
import Error from '../model/Error';

/**
* Tokens service.
* @module api/TokensApi
* @version 1.0
*/
export default class TokensApi {

    /**
    * Constructs a new TokensApi. 
    * @alias module:api/TokensApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the refreshToken operation.
     * @callback module:api/TokensApi~refreshTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthorizationScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns new authorization token
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {module:model/AuthorizationScheme} opts.authorizationScheme User refresh token
     * @param {module:api/TokensApi~refreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthorizationScheme}
     */
    refreshToken(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['authorizationScheme'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling refreshToken");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthorizationScheme;
      return this.apiClient.callApi(
        '/users/{userId}/tokens/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
