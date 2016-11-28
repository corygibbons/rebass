
import React from 'react'
import withRebass from './withRebass'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

const Heading = ({
  level,
  size,
  big,
  alt,
  center,
  style,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, bold } = theme
  const Comp = `h${level}`

  const h = n => fontSizes[n]

  let fontSize = typeof size === 'number' ? h(size) : h(level)

  if (big) {
    fontSize *= 2
  }

  const styles = {
    fontSize,
    fontWeight: bold,
    lineHeight: 1.25,
    textAlign: center ? 'center' : null,
    margin: 0
  }

  return (
    <Comp
      {...props}
      {...sx(styles, style)}
    />
  )
}

Heading.propTypes = {
  /** Doubles the visual size - useful for marketing pages */
  big: React.PropTypes.bool,
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /** Applies alternate styling - useful for slugs and subheadings */
  alt: React.PropTypes.bool,
  /** Centers text alignment */
  center: React.PropTypes.bool
}

Heading.defaultProps = {
  level: 2
}

Heading.displayName = 'Heading'
Heading._name = 'Heading'

export default withRebass(Heading)

