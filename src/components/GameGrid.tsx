import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, err, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{err && <Text>{err}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding="10px"
				spacing={10}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardSkeleton key={skeleton} />
					))}
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
