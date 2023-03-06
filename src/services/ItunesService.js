import { useState, useCallback, useEffect } from "react";

const ItunesService = () => {
	const [podcastApiResponse, setPodcastApiResponse] = useState(null)
	const [topPodcast, setTopPodcast] = useState(null)

	const fetchData = async () => {
		try {
			const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
			const data = await response.json();
			setPodcastApiResponse(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	const transformData = useCallback(() => {
		const entry = podcastApiResponse?.feed?.entry ? podcastApiResponse?.feed?.entry : [];
		console.log(entry[0], 'keys')
		entry.forEach( element => {
			const info = {
				'id': element.id.atributes['im:id']
				'image': element['im:image'],
				'author': element['im:name'],
			}
			console.log(element.id, 'mas pruebas', element['im:image'] )
			console.log(Object.keys(element), 'sigo probando')
		} )
	}, [podcastApiResponse]);

	useEffect(() => {
		transformData();
	}, [transformData])

	return topPodcast;
}

export default ItunesService;
