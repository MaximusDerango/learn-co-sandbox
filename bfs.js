function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

function find(iterable, criteriaFn) {

  let current = iterable
  let next = []

  while (current) {

    if (criteriaFn(current)) {
      return current
    }

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    } else if (isObject(current)) {
      for (var key in current) {
        next.push(current[key]);
      }
    }

    current = next.shift()
  }

  return null
}

const collections = [1, [2, [4, [5, [6]], 3]]]

const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}

console.log(find(person, n => (typeof n === 'number' && n === 2)))

