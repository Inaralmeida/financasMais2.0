type LabelProps = {
	text: string
	id: string
}
const Label = ({ text, id }: LabelProps) => {
	return <label htmlFor={id}>{text}</label>
}

export default Label
