import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
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
							<Text fontSize={"lg"}>{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}

export default GenreList;
