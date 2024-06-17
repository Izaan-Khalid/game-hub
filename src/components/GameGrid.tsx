import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
	const { games, err } = useGames();

	return (
		<>
			{err && <Text>{err}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
