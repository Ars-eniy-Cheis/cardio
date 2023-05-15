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
import Error from '../model/Error';
import Patient from '../model/Patient';
import PatientCreation from '../model/PatientCreation';
import PatientUpdate from '../model/PatientUpdate';
import PatientsPagination from '../model/PatientsPagination';

/**
* Patients service.
* @module api/PatientsApi
* @version 1.0
*/
export default class PatientsApi {

    /**
    * Constructs a new PatientsApi. 
    * @alias module:api/PatientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addPatient operation.
     * @callback module:api/PatientsApi~addPatientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Patient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds patient
     * @param {Object} opts Optional parameters
     * @param {module:model/PatientCreation} opts.patientCreation Patient data
     * @param {module:api/PatientsApi~addPatientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Patient}
     */
    addPatient(opts, callback) {
      opts = opts || {};
      let postBody = opts['patientCreation'];

      let pathParams = {
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
      let returnType = Patient;
      return this.apiClient.callApi(
        '/patients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePatient operation.
     * @callback module:api/PatientsApi~deletePatientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes patient
     * @param {Number} patientId patient id
     * @param {module:api/PatientsApi~deletePatientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePatient(patientId, callback) {
      let postBody = null;
      // verify the required parameter 'patientId' is set
      if (patientId === undefined || patientId === null) {
        throw new Error("Missing the required parameter 'patientId' when calling deletePatient");
      }

      let pathParams = {
        'patientId': patientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/patients/{patientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPatient operation.
     * @callback module:api/PatientsApi~getPatientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Patient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets patient
     * @param {Number} patientId patient id
     * @param {module:api/PatientsApi~getPatientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Patient}
     */
    getPatient(patientId, callback) {
      let postBody = null;
      // verify the required parameter 'patientId' is set
      if (patientId === undefined || patientId === null) {
        throw new Error("Missing the required parameter 'patientId' when calling getPatient");
      }

      let pathParams = {
        'patientId': patientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Patient;
      return this.apiClient.callApi(
        '/patients/{patientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPatients operation.
     * @callback module:api/PatientsApi~getPatientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PatientsPagination>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets patients list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Requested page
     * @param {Number} opts.pageSize Page size
     * @param {module:api/PatientsApi~getPatientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PatientsPagination>}
     */
    getPatients(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwtAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PatientsPagination];
      return this.apiClient.callApi(
        '/patients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCovidPatient operation.
     * @callback module:api/PatientsApi~updateCovidPatientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Patient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates patient
     * @param {Number} patientId patient id
     * @param {Object} opts Optional parameters
     * @param {module:model/PatientUpdate} opts.patientUpdate patient data
     * @param {module:api/PatientsApi~updateCovidPatientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Patient}
     */
    updateCovidPatient(patientId, opts, callback) {
      opts = opts || {};
      let postBody = opts['patientUpdate'];
      // verify the required parameter 'patientId' is set
      if (patientId === undefined || patientId === null) {
        throw new Error("Missing the required parameter 'patientId' when calling updateCovidPatient");
      }

      let pathParams = {
        'patientId': patientId
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
      let returnType = Patient;
      return this.apiClient.callApi(
        '/patients/{patientId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
