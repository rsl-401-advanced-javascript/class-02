'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function () {
  for (let arg of arguments) {
    this.data[this.length] = arg;
    this.length++;
  }
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function () {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function () {
  let returnValue = this.data[1];
  delete this.data[0];
  let newData = {};
  for (let entry of Object.entries(this.data)) {
    Object.assign(newData, entry);
  }
  this.data = newData;
  this.length--;
  return returnValue;
};

List.prototype.unshift = function () {
  let args = arguments;
  for (let arg of args) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i.toString()];
    }
    this.data[0] = arg;
    this.length++;
  }
  return this.length;
};

List.prototype.forEach = function (items, callback) {
  if (typeof callback !== 'function')
    return null;
  for (let item of items) {
    callback(item);
  }
};

List.prototype.map = function (items, callback) {
  if (typeof callback !== 'function')
    return null;
  let result = new List();
  for (let item of items) {
    result.push(callback(item));
  }
  return result.data;
};

List.prototype.filter = function (items, callback) {
  if (typeof callback !== 'function')
    return null;
  let result = new List();
  for (let item of items) {
    if (callback(item))
      result.push(item);
  }
  return result.data;
};

List.prototype.reduce = function (items, callback, init) {
  if (typeof callback !== 'function')
    return null;
  let result;
  if (Array.isArray(init)) {
    result = init;
    for (let item of items)
      callback(result, item);
  } else {
    init ? result = init : result = items[0];
    for (let i = init ? 0 : 1; i < items.length; i++) {
      result = callback(result, items[i]);
    }
    typeof result === 'string' ? result = result.trim() : '';
  }
  return result;
};

List.prototype.slice = function (start, end) {
  if (isNaN(start) || isNaN(end) || start < 0)
    return null;
  let result = new List();
  if (end > 0) {
    for (let i = start; i < end; i++) {
      result.push(this.data[i.toString()]);
    }
  } else {
    for (let i = start; i < this.length - 1 + end; i++) {
      result.push(this.data[i.toString()]);
    }
  }
  return Object.values(result.data);
};

List.prototype.reverse = function () {
  let result = new List();
  let arr = Object.values(this.data);
  for (let i = 0; i < arr.length; i++) {
    if (i >= arr.length / 2) {
      break;
    } else {
      let front = arr[i];
      let back = arr[arr.length - i - 1];
      arr[i] = back;
      arr[arr.length - i - 1] = front;
    }
  }
  for (let item of arr) {
    result.push(item);
  }
  this.data = result.data;
};

module.exports = List;