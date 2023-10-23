import Label from '../Label'

type FieldsetProps = {
	children: React.ReactNode
	name: string
	id: string
}

const Fieldset = ({ children, name, id }: FieldsetProps) => {
	return (
		<div>
			<Label text={name} id={id} />
			{children}
		</div>
	)
}

export default Fieldset
