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
 * The PatientCreation model module.
 * @module model/PatientCreation
 * @version 1.0
 */
class PatientCreation {
    /**
     * Constructs a new <code>PatientCreation</code>.
     * @alias module:model/PatientCreation
     * @param type {String} 
     * @param properties {Object} 
     */
    constructor(type, properties) { 
        
        PatientCreation.initialize(this, type, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, properties) { 
        obj['type'] = type;
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>PatientCreation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatientCreation} obj Optional instance to populate.
     * @return {module:model/PatientCreation} The populated <code>PatientCreation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatientCreation();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
PatientCreation.prototype['description'] = undefined;

/**
 * @member {String} type
 */
PatientCreation.prototype['type'] = undefined;

/**
 * @member {Object} properties
 */
PatientCreation.prototype['properties'] = undefined;






export default PatientCreation;

