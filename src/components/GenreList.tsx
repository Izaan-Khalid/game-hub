import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSekeleton from "./GenreListSekeleton";

const GenreList = () => {
	const { data, isLoading, err } = useGenres();
	const skeletons = [1, 2, 3, 4];

	if (err) return null;
	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GenreListSekeleton key={skeleton} />
				))}
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
