import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Welcome = () => (
	<StaticQuery
		query={graphql`
			query WelcomeQuery {
				allContentJson {
					edges {
						node {
							description
						}
					}
				}
			}
		`}
		render={data => (
			<div id="welcome-position">
				<div id="welcome">
					<h2 className="header-text" id="welcome-header">
						Welcome!
					</h2>
					<div>{data.allContentJson.edges[1].node.description}</div>
				</div>
			</div>
		)}
	/>
);

export default Welcome;
