/** @format */

import Link from "next/link";

interface Props {
	author: string;
	small?: boolean;
}

export default function CreditLink({ author, small }: Props) {
	return (
		<>
			<style jsx>{`
				a {
					margin-right: 8px;
					${small ? "color: #8b8b8b;" : "font-size: large;"}
				}
				a:hover {
					text-decoration: underline;
				}
			`}</style>
			<Link className="credit-link" href={"/credit/" + encodeURI(author)}>
				<a>{author}</a>
			</Link>
		</>
	);
}
