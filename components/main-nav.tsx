import { CustomLink } from "@/components/custom-link";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from "react";

export function MainNav() {
	return (
		<div className="flex items-center gap-4">
			<CustomLink href="/">
				<Button>Home</Button>
			</CustomLink>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="px-2">
							Server Side
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<ListItem href="/server-example" title="RSC Example">
									Protecting React Server Component.
								</ListItem>
								<ListItem href="/middleware-example" title="Middleware Example">
									Using Middleware to protect pages & APIs.
								</ListItem>
								<ListItem href="/api-example" title="Route Handler Example">
									Getting the session inside an API Route.
								</ListItem>
							</ul>
						</NavigationMenuContent>
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

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className,
						)}
						{...props}
					>
						<div className="font-medium text-sm leading-none">{title}</div>
						<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	},
);
