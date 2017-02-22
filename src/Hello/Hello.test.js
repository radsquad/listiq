import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Hello from './Hello'

it('matches snapshot', function () {
  var component = shallow(<Hello />)
  var tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
