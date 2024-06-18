import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSekeleton from "./GenreListSekeleton";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
						<Button
							onClick={() => onSelectGenre(genre)}
							fontWeight={
								genre.id === selectedGenre?.id
									? "bold"
									: "normal"
							}
							fontSize="lg"
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
