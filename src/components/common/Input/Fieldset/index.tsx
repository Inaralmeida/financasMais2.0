import React from 'react'
import Label from '../Label'

type FieldsetProps = {
	children: React.ReactNode
	name: string
	id: string
	width?: string
}

const Fieldset = ({
	children,
	name,
	id,
	width = 'fit-content'
}: FieldsetProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				width: width
			}}
		>
			<Label text={name} id={id} />
			{children}
		</div>
	)
}

export default Fieldset
