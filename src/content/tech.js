import html from '../images/tech/html.svg';
import css from '../images/tech/css.svg';
import javascript from '../images/tech/javascript.svg';
import react from '../images/tech/react.svg';
import gatsby from '../images/tech/gatsby.svg';
import firebase from '../images/tech/firebase.svg';
import graphql from '../images/tech/graphql.svg';
import bootstrap from '../images/tech/bootstrap.svg';
import java from '../images/tech/java.svg';
import c from '../images/tech/c.svg';
import mongodb from '../images/tech/mongodb.svg';
import mysql from '../images/tech/mysql.svg';
import node from '../images/tech/node.svg';
import express from '../images/tech/express.svg';
import sass from '../images/tech/sass.svg';
import styledComponents from '../images/tech/styled-components.svg';

const tech = [
	{ name: 'HTML5', image: html, inProgress: false, invert: false },
	{ name: 'CSS3', image: css, inProgress: false, invert: false },
	{ name: 'Sass', image: sass, inProgress: false, invert: false },
	{ name: 'Bootstrap', image: bootstrap, inProgress: false, invert: false },
	{ name: 'JavaScript', image: javascript, inProgress: false, invert: false },
	{ name: 'NodeJS', image: node, inProgress: false, invert: false },
	{ name: 'Express', image: express, inProgress: false, invert: true },
	{ name: 'React', image: react, inProgress: false, invert: false },
	{ name: 'GraphQL', image: graphql, inProgress: false, invert: false },
	{ name: 'Gatsby', image: gatsby, inProgress: false, invert: false },
	{
		name: 'Styled Components',
		image: styledComponents,
		inProgress: false,
		invert: false,
	},
	{ name: 'Firebase', image: firebase, inProgress: false, invert: false },
	{ name: 'Java', image: java, inProgress: false, invert: false },
	{ name: 'C', image: c, inProgress: true, invert: false },
	{ name: 'MySQL', image: mysql, inProgress: true, invert: false },
	{ name: 'MongoDB', image: mongodb, inProgress: false, invert: false },
];

export default tech;
