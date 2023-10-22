import BannerBemVindo from '../../components/views/home/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/views/home/BannerDesafioFinanceiro'
import BannerTransformacoes from '../../components/views/home/BannerTransformacoes'
import BannerTransforme from '../../components/views/home/BannerTransforme'
import Header from '../../components/views/home/Header'

const Home = () => {
	return (
		<div>
			<Header />
			<BannerBemVindo />
			<BannerDesafioFinanceiro />
			<BannerTransforme />
			<BannerTransformacoes />
		</div>
	)
}

export default Home
