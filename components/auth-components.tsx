import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/lib/auth";
import type { ComponentPropsWithRef } from "react";

export function SignIn({
	provider,
	...props
}: { provider?: string } & ComponentPropsWithRef<typeof Button>) {
	async function handleSignIn() {
		"use server";
		await signIn(provider);
	}
	return (
		<form action={handleSignIn}>
			<Button {...props}>サインイン</Button>
		</form>
	);
}

export function SignOut({
	provider,
	...props
}: { provider?: string } & ComponentPropsWithRef<typeof Button>) {
	async function handleSignOut() {
		"use server";
		await signOut();
	}
	return (
		<form className="w-full" action={handleSignOut}>
			<Button variant="ghost" className="w-full p-0" {...props}>
				ログアウト
			</Button>
		</form>
	);
}
