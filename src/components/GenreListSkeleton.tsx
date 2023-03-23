import { HStack, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
	let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<List>
			{data.map((num) => (
				<ListItem key={num} paddingY="5px">
					<HStack>
						<Skeleton boxSize={"32px"} borderRadius={8} />
						<SkeletonText />
					</HStack>
				</ListItem>
			))}
		</List>
	);
}

export default GenreListSkeleton;
