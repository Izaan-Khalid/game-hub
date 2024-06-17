import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";

const GameGrid = () => {
	const { data, err, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{err && <Text>{err}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding="10px"
				spacing={3}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardComponent key={skeleton}>
							<GameCardSkeleton />
						</GameCardComponent>
					))}
				{data.map((game) => (
					<GameCardComponent>
						<GameCard key={game.id} game={game} />
					</GameCardComponent>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
