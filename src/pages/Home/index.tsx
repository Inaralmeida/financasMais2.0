import BannerBemVindo from '../../components/views/home/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/views/home/BannerDesafioFinanceiro'
import BannerTransforme from '../../components/views/home/BannerTransforme'
import Header from '../../components/views/home/Header'

const Home = () => {
	return (
		<div>
			<Header />
			<BannerBemVindo />
			<BannerDesafioFinanceiro />
			<BannerTransforme />
		</div>
	)
}

export default Home
