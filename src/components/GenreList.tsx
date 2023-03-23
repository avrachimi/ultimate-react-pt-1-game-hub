import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
	const { data, error, isLoading } = useGenres();

	if (error) return null;

	return (
		<>
			{isLoading && <GenreListSkeleton />}
			<Heading fontSize={"2xl"} marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageURL(genre.image_background)}
							/>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								onClick={() => onSelectGenre(genre)}
								fontSize={"lg"}
								variant="link"
								whiteSpace={"normal"}
								textAlign="left"
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
