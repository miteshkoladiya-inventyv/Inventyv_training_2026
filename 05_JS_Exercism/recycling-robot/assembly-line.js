// @ts-check
import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 */
export function isNumber(value) {
  if (typeof value === 'number') {
    return Number.isFinite(value);
  }
  return typeof value === 'bigint';
}

/**
 * Checks if a value is an object (null is NOT an object here).
 */
export function isObject(value) {
  return typeof value === 'object' && value !== null;
}

/**
 * Checks if a value is a numeric string (integer only).
 */
export function isNumericString(value) {
  if (typeof value !== 'string') {
    return false;
  }
  return /^-?\d+$/.test(value);
}

/**
 * Checks if an object is an instance of ElectronicDevice or its subclasses.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non-empty array.
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}
/**
 * Checks if a value has a "type" property or method.
 */
export function hasType(object) {
  if (object === null || typeof object !== 'object') {
    return false;
  }

  return typeof object.type !== 'undefined';
}



/**
 * Throws an error if an object is missing an "id" property.
 */
export function assertHasId(object) {
  if (!object || typeof object !== 'object' || !('id' in object)) {
    throw new Error("Object is missing the 'id' property");
  }
}

/**
 * Checks if a value has an OWN "id" property (not inherited, not getter).
 */
export function hasIdProperty(object) {
  if (!object || typeof object !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, 'id');
}

/**
 * Checks if a value has a defined "type" property.
 */
export function hasDefinedType(object) {
  if (!object || typeof object !== 'object') {
    return false;
  }

  return (
    Object.prototype.hasOwnProperty.call(object, 'type') &&
    object.type !== undefined
  );
}

