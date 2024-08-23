import { SignIn, SignOut } from "@/components/auth-components";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";

export async function UserButton() {
	const session = await auth();
	if (!session?.user) return <SignIn provider="google" />;

	return (
		<div className="flex items-center gap-2">
			<span className="hidden text-sm sm:inline-flex">{session.user.name}</span>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="relative h-8 w-8 rounded-full">
						<Avatar className="h-8 w-8">
							{session.user.image && (
								<AvatarImage
									src={session.user.image}
									alt={session.user.name ?? ""}
								/>
							)}
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="font-medium text-sm leading-none">
								{session.user.name}
							</p>
							<p className="text-muted-foreground text-xs leading-none">
								{session.user.email}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuItem>
						<SignOut />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
