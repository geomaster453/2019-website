import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

const HeaderInfo = () => {
	const style = {
		width: '20%',
	};
	const data = useStaticQuery(graphql`
		query {
			fileName: file(relativePath: { eq: "vhlogo.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div id="header-position">
			<div id="vhLogoContainer">
				<Img style={style} fluid={data.fileName.childImageSharp.fluid} />
				<div id="eventInfo">
					<div className="header-text" id="eventName">
						VandyHacks VI: Art Edition
					</div>
					<div id="eventLocale">Nov 1-3, 2019 • Nashville, TN </div>
				</div>
			</div>
		</div>
	);
};

export default HeaderInfo;
