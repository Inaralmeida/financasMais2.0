import React from 'react'
import Label from '../Label'

type FieldsetProps = {
	children: React.ReactNode
	name: string
	id: string
}

const Fieldset = ({ children, name, id }: FieldsetProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Label text={name} id={id} />
			{children}
		</div>
	)
}

export default Fieldset
