import BannerBemVindo from '../../components/views/home/BannerBemVindo'
import BannerDesafioFinanceiro from '../../components/views/home/BannerDesafioFinanceiro'
import Header from '../../components/views/home/Header'

const Home = () => {
	return (
		<div>
			<Header />
			<BannerBemVindo />
			<BannerDesafioFinanceiro />
		</div>
	)
}

export default Home
