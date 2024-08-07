import classname from 'classnames'
import styled from 'styled-components'

const ClassNames = (...args: classNames.ArgumentArray) => {
	return classname(args)
}

ClassNames.styled = styled

export default ClassNames

