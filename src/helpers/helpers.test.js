import { addArrayItem } from './helpers'

test('addArrayItem should add the passed item to the array', () => {
  const startArray = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ]
  const newItem = { id: 3, name: 'three', isComplete: false }
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]

  const result = addArrayItem(newItem, startArray)

  expect(result).toEqual(expected)
})

test('addArrayItem should not mutate the existing array', () => {
  const startArray = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ]
  const newItem = { id: 3, name: 'three', isComplete: false }

  const result = addArrayItem(newItem, startArray)

  expect(result).not.toBe(startArray)
})
