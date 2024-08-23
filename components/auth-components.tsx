import { Button } from "@/components/ui/button";
import type { ComponentPropsWithRef } from "react";

export function SignIn({
	provider,
	...props
}: { provider?: string } & ComponentPropsWithRef<typeof Button>) {
	return (
		<form>
			<Button {...props}>サインイン</Button>
		</form>
	);
}

export function SignOut({
	provider,
	...props
}: { provider?: string } & ComponentPropsWithRef<typeof Button>) {
	return (
		<form className="w-full">
			<Button variant="ghost" className="w-full p-0" {...props}>
				ログアウト
			</Button>
		</form>
	);
}
