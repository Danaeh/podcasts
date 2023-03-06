import React from 'react';

export const IntroductionCard = ({cosa}) => {
	const { image, name, author } = cosa;
	return (
		<div  className="podcast-card-wrapper">
			<div className="podcast-card-data">
				<img className="podcast-image" src={image} alt="imagen del podcast"/>
				<h2 className="podcast-title">{name}</h2>
				<h3 className="podcast-subtitle"> Author: {author} </h3>
			</div>
		</div>
	)
}
