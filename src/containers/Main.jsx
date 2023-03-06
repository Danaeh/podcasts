import { IntroductionCard } from "../components/IntroductionCard/IntroductionCard";
import ItunesService from "../services/ItunesService";

export const Main = () => {

	console.log(ItunesService(), 'hasta el pepe')

	const cosa = {
		"image": "https://img2.freepng.es/20190610/tr/kisspng-portable-network-graphics-heart-vector-graphics-dr-5cfe33f5718746.214721841560163317465.jpg",
		"name": "You and yourself",
		"author": "Jazmine"

	}
	return (
		<IntroductionCard cosa={cosa} />
	)
}