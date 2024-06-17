import {
	HStack,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import React from "react";

const GenreListSekeleton = () => {
	return (
		<List>
			<ListItem paddingY="5px">
				<HStack>
					<Skeleton boxSize="32px" borderRadius={8} />
					<Skeleton>
						<Text fontSize="md">11111111111111</Text>
					</Skeleton>
				</HStack>
			</ListItem>
		</List>
	);
};

export default GenreListSekeleton;
