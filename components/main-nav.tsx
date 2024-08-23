import { CustomLink } from "@/components/custom-link";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
	return (
		<div className="flex items-center gap-4">
			<CustomLink href="/">
				<Button>Home</Button>
			</CustomLink>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							href="/server-example"
							className={navigationMenuTriggerStyle()}
						>
							Server Side
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							href="/client-example"
							className={navigationMenuTriggerStyle()}
						>
							Client Side
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
