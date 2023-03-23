import { Image, Card, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card>
			<Image src={getCroppedImageURL(game.background_image)} />
			<CardBody>
				<HStack justify={"space-between"} marginBottom={3}>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize={{ sm: "2xl", md: "2xl", lg: "sm", xl: "md" }}>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;
