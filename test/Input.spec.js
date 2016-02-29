
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Input, Label } from '../src'

const renderer = TestUtils.createRenderer()

describe('Input', () => {
  let tree, input, label

  beforeEach(() => {
    renderer.render(<Input name='test_input' label='Test' />)
    tree = renderer.getRenderOutput()
    input = tree.props.children[1]
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Input')
  })

  it('should have a Label', () => {
    expect(tree.props.children[0].type).toEqual(Label)
  })

  it('should have an input element', () => {
    expect(input.type).toEqual('input')
  })

  context('when type is set', () => {
    beforeEach(() => {
      renderer.render(<Input type='number' name='test_input' label='Test' />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have a number type', () => {
      expect(input.props.type).toEqual('number')
    })
  })

  context('when hideLabel is set', () => {
    beforeEach(() => {
      renderer.render(<Input hideLabel name='test_input' label='Test' />)
      tree = renderer.getRenderOutput()
      label = tree.props.children[0]
    })

    it('should have a label', () => {
      expect(label).toExist()
    })

    it('should set the hide prop', () => {
      expect(label.props.hide).toEqual(true)
    })
  })

  context('when rounded is false', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={false} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should not have a border radius', () => {
      expect(input.props.style.borderRadius).toEqual(0)
    })
  })

  context('when rounded is top', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'top'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have top border radii', () => {
      expect(input.props.style.borderRadius).toEqual('2px 2px 0 0')
    })
  })

  context('when rounded is right', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'right'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have right border radii', () => {
      expect(input.props.style.borderRadius).toEqual('0 2px 2px 0')
    })
  })

  context('when rounded is bottom', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'bottom'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have bottom border radii', () => {
      expect(input.props.style.borderRadius).toEqual('0 0 2px 2px')
    })
  })

  context('when rounded is left', () => {
    beforeEach(() => {
      renderer.render(<Input name='test' label='Test' rounded={'left'} />)
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })
    it('should have left border radii', () => {
      expect(input.props.style.borderRadius).toEqual('2px 0 0 2px')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(
        <Input
          name='test_input'
          label='Test'
          style={{ color: 'tomato' }} />
      )
      tree = renderer.getRenderOutput()
      input = tree.props.children[1]
    })

    it('should have a custom color', () => {
      expect(input.props.style.color).toEqual('tomato')
    })
  })
})
