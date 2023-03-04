import { GetStaticProps, NextPage } from "next"
import { renderMetaTags } from "react-datocms"
import { HomeDocument, HomeQuery } from "../graphql/generated"
import { request } from "../lib/request"
import Head from "next/head"

type Props = { data: HomeQuery }

const Home: NextPage<Props> = ({ data }) => {
	return (
		<>
			<Head>
				{renderMetaTags(data.homePage!.seo.concat(data.site.favicon))}
			</Head>
			<div className='container'>Home</div>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const data = await request(HomeDocument)
	return {
		props: { data },
	}
}

export default Home
