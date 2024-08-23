import { MainNav } from "@/components/main-nav";
import { UserButton } from "@/components/user-button";

export function Header() {
	return (
		<header className="sticky flex justify-center border-b">
			<div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
				<MainNav />
				<UserButton />
			</div>
		</header>
	);
}
