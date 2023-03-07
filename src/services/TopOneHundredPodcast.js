import { useState, useCallback, useEffect } from "react";

const TopOneHundredPodcast = () => {
	const [podcastApiResponse, setPodcastApiResponse] = useState(null)
	const [topPodcast, setTopPodcast] = useState(null)
	let storage = window.localStorage;

	const fetchData = async () => {
		try {
			const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
			const data = await response.json();
			setPodcastApiResponse(data);
			storage.setItem('podcast', data)
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	const transformData = useCallback(() => {
		const entry = podcastApiResponse?.feed?.entry ? podcastApiResponse?.feed?.entry : [];
		const filterInfo = [];
		entry.forEach( element => {
			const info = {
				'id': element.id.attributes['im:id'],
				'image': element['im:image'],
				'title': element['im:name'],
				'author': element['im:artist'].label,
			}
			filterInfo.push(info)
		} )
		setTopPodcast(filterInfo);
	}, [podcastApiResponse]);

	useEffect(() => {
		transformData();
	}, [transformData])

	return topPodcast;
}

export default TopOneHundredPodcast;
