// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        result.push(array[i]);
      }
    }
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    const result = [];
    this.each(collection, (x) => {
      result.push(iteratee(x));
    });
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    return this.filter(collection, (element) => {
      if (test(element)) {
        return false;
      }
      return true;
    });
  }

  reduce(collection, iterator, accumulator) {
    let result;
    if (accumulator) {
      this.each(collection, (memo, item) => {
        accumulator = iterator(item);
      });
    }
    this.each(collection, (memo, item) => {
      result = memo + iterator(item);
    });
    return result;
  }

  every() {
    // YOUR CODE HERE
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let run = false;

    return function() {
      if (!run) {
        run = true;
        func();
      }
    };
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
