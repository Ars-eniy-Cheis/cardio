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
 * The UserCreation model module.
 * @module model/UserCreation
 * @version 1.0
 */
class UserCreation {
    /**
     * Constructs a new <code>UserCreation</code>.
     * @alias module:model/UserCreation
     * @param firstName {String} 
     * @param lastName {String} 
     * @param username {String} 
     * @param password {String} 
     */
    constructor(firstName, lastName, username, password) { 
        
        UserCreation.initialize(this, firstName, lastName, username, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, username, password) { 
        obj['firstName'] = firstName;
        obj['lastName'] = lastName;
        obj['username'] = username;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>UserCreation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCreation} obj Optional instance to populate.
     * @return {module:model/UserCreation} The populated <code>UserCreation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreation();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
UserCreation.prototype['firstName'] = undefined;

/**
 * @member {String} middleName
 */
UserCreation.prototype['middleName'] = undefined;

/**
 * @member {String} lastName
 */
UserCreation.prototype['lastName'] = undefined;

/**
 * @member {String} username
 */
UserCreation.prototype['username'] = undefined;

/**
 * @member {String} password
 */
UserCreation.prototype['password'] = undefined;






export default UserCreation;

