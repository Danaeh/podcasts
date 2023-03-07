import { IntroductionCard } from "../components/IntroductionCard/IntroductionCard";
import TopOneHundredPodcast from "../services/TopOneHundredPodcast";
import {Spinner} from "../components/Spinner/Spinner";

export const Main = async () => {
	try {
		const data = await TopOneHundredPodcast();

		if (data) {
			return (
				<>
					{data.map((podcast) => (
						<IntroductionCard cosa={podcast} />
					))}
				</>
			);
		} else {
			return (
				<>
					<h3>En este momento nuestra web no está operativa, por favor, inténtelo de nuevo más tarde</h3>
					<Spinner />
				</>
			);
		}
	} catch (error) {
		// Manejar el error
		console.error(error);
		return (
			<>
				<h3>Hubo un error al cargar los datos, por favor inténtelo de nuevo más tarde</h3>
				<Spinner />
			</>
		);
	}
};
