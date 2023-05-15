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

import ApiClient from '../ApiClient';

/**
 * The PatientUpdate model module.
 * @module model/PatientUpdate
 * @version 1.0
 */
class PatientUpdate {
    /**
     * Constructs a new <code>PatientUpdate</code>.
     * @alias module:model/PatientUpdate
     */
    constructor() { 
        
        PatientUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatientUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatientUpdate} obj Optional instance to populate.
     * @return {module:model/PatientUpdate} The populated <code>PatientUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatientUpdate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PatientUpdate.prototype['description'] = undefined;

/**
 * @member {Object} properties
 */
PatientUpdate.prototype['properties'] = undefined;






export default PatientUpdate;

