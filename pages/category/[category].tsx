
import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/ArticlePreview";
import { getArticlesByAuthor, getArticlesByCategory, getPublishedArticles } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";

interface Params {
	params: {
		category: string
	}
}

interface Props {
	category: string,
	articles: article[]
}

export async function getServerSideProps({ params }: Params) {
	// runs server side, maybe switch to static props later
	return {
		props: {
			category: params.category,
			articles: await getArticlesByCategory(params.category)
		},
	};
}

export default function Category({category, articles}: Props) {
	return(
		<div className="category">
			<Head>
				<title>{expandCategorySlug(category)} | The Tower</title>
			</Head>
			<h1>{expandCategorySlug(category)}</h1>
			{articles.map(article => (
				<ArticlePreview key={article.id} article={article} />
			))}
		</div>
	);
}
