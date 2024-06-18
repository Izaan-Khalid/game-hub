import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface PlatformSelectorProp {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({
	onSelectPlatform,
	selectedPlatform,
}: PlatformSelectorProp) => {
	const { data, err } = usePlatforms();

	if (err) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
