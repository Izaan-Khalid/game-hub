import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardComponentProps {
	children: ReactNode;
}

const GameCardComponent = ({ children }: GameCardComponentProps) => {
	return (
		<Box borderRadius={10} overflow={"hidden"}>
			{children}
		</Box>
	);
};

export default GameCardComponent;
