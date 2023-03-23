import { Image, Card, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card width={"300px"} borderRadius={10} overflow="hidden">
			<Image src={getCroppedImageURL(game.background_image)} />
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justify={"space-between"}>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
