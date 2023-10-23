import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/shared/Layout'

const Transactions = () => {
	const params = useParams()
	return (
		<Layout
			titlePage={`${params.type}s`}
			textButtonPrincipal={`Adicionar ${params.type}`}
			onClickPrincipal={() => {}}
		>
			dashboard
		</Layout>
	)
}

export default Transactions
