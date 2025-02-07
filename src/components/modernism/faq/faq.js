import React from 'react';
import styled from 'styled-components';

import FAQItem from './faqItem';

const data = require('../../../../content/faq.json');

const StyledDiv = styled.div`
	font-family: sans-serif;
	border-radius: 50%;
	border: 1px solid black;
	width: 50vw;
	height: 50vw;
	background: transparent;
	margin: 6vw 0 0 0;
	padding: 1vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow-y: hidden;
`;

class FAQ extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.initializeState();
	}

	initializeState() {
		const items = [];
		for (let q in data) {
			items.push(<FAQItem key={q} question={q} answer={data[q]} />);
		}
		return { items: items };
	}

	render() {
		return (
			<div id="FAQ-position">
				<h2 className="header-text" id="FAQ">
					FAQ
				</h2>
				<StyledDiv>{this.state.items}</StyledDiv>
			</div>
		);
	}
}

export default FAQ;
