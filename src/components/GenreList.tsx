import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
	const { data, error, isLoading } = useGenres();

	if (error) return null;

	return (
		<>
			{isLoading && <GenreListSkeleton />}
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								src={getCroppedImageURL(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								variant="link"
								whiteSpace={"normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}

export default GenreList;
