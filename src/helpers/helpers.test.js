import { addArrayItem } from './helpers'

test('addArrayItem should add the passed item to the array', () => {
  const startArray = [
    { name: 'one', isComplete: false },
    { name: 'two', isComplete: false }
  ]
  const newItem = { name: 'three', isComplete: false }
  const expected = [
    { name: 'one', isComplete: false },
    { name: 'two', isComplete: false },
    { name: 'three', isComplete: false }
  ]

  const result = addArrayItem(newItem, startArray)

  expect(result).toEqual(expected)
})

test('addArrayItem should not mutate the existing array', () => {
  const startArray = [
    { name: 'one', isComplete: false },
    { name: 'two', isComplete: false }
  ]
  const newItem = { name: 'three', isComplete: false }

  const result = addArrayItem(newItem, startArray)

  expect(result).not.toBe(startArray)
})
