import images from '../../../assets/images'
type ButtonMenuResponsivoProps = {
	isOpen: boolean
	onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonMenuResponsivo = ({
	isOpen,
	onClose
}: ButtonMenuResponsivoProps) => {
	const { IconOpenMenu, IconClose } = images.icons
	return (
		<div onClick={() => onClose((prev: boolean) => !prev)}>
			{isOpen ? <IconClose /> : <IconOpenMenu />}
		</div>
	)
}

export default ButtonMenuResponsivo
