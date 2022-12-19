import React from 'react'
import Card from './Card'

const NamesList = (props) => {
	return (
		<>
			{
				props.names.map(e => <Card name={e} />)
			}
		</>
	)
}

export default NamesList