import Head from 'next/head'
import HomePage from './home'

export default function Home() {
	return (
		<>
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage/>
		</>
	)
}
