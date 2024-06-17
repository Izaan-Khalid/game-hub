import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [err, setErr] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>("/xgames")
			.then((res) => setGames(res.data.results))
			.catch((err) => setErr(err.message));
	});

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
