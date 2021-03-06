import React, {PropTypes} from 'react'
// WORKSHOP_START
// import the css styles using: `import './03-styling.css'`
// this will use webpack to load the css styles into your app.
// WORKSHOP_END
// FINAL_START
import './03-styling.css'
// FINAL_END

function Box(props) {
  return (
    // WORKSHOP_START
    // render a div with the props:
    // - className that is assigned to `Box Box--${props.size}`
    // - style that is assigned to props.style
    // inside the div, forward along props.children
    <div>Incomplete</div>
    // WORKSHOP_END
    // FINAL_START
    <div className={`Box Box--${props.size}`} style={props.style}>
      {props.children}
    </div>
    // FINAL_END
  )
}

// I'm gonna give this one to you. Isn't that nice? :)
Box.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

// WORKSHOP_START
export const example = () => (
  <div>
    Examples go in here...
    Give me 3 usages of your {`<Box>`} component. One for each size.
    And for each, specify a `style` prop with some custom styling
    (whatever you want, maybe consider `backgroundColor`)
  </div>
)
// WORKSHOP_END
// FINAL_START
export const example = () => (
  <div>
    <Box
      size="small"
      style={{backgroundColor: 'lightblue'}}
    >
      I'm in a small box!
    </Box>
    <Box
      size="medium"
      style={{backgroundColor: 'lightgreen'}}
    >
      I'm in a medium box!
    </Box>
    <Box
      size="large"
      style={{backgroundColor: 'orange'}}
    >
      I'm in a large box!
    </Box>
  </div>
)
// FINAL_END

export default Box
