/**
 * @typedef {Object} SuccessDataInterface
 * @property {boolean} success
 * @property {*} data
 * @property {string} message
 * @property {*} otherData
 */

/**
 * @typedef {Object} SuccessResponseInterface
 * @property {boolean} success
 * @property {*} data
 * @property {string} message
 * @property {*} otherData
 */

/**
 * @typedef {Object} ErrorDataInterface
 * @property {ErrorDataInterface} data
 * @property {string} message
 * @property {number} code
 * @property {number} status
 * @property {number} responseCode
 * @property {Object} [errors]
 */

/**
 * @typedef {Object} ErrorResponseInterface
 * @property {string} message
 * @property {number} code
 * @property {number} responseCode
 * @property {boolean} error
 * @property {ValidationErrorMessageInterface[]} [errors]
 */

/**
 * @typedef {Object} ErrorBaseResponseInterface
 * @property {string} message
 * @property {number} code
 * @property {number} responseCode
 * @property {boolean} error
 * @property {ErrorDataInterface} response
 * @property {Object} [errors]
 */

/**
 * @typedef {Object} OptionInterface
 * @property {string} url
 * @property {string} method
 * @property {Object} [params]
 * @property {Object} [data]
 */

/**
 * @typedef {Object} ValidationErrorMessageInterface
 * @property {string} field
 * @property {string[]} messages
 */
