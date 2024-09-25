import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import GoogleLogo from "@/public/web_neutral_sq_SI.svg";
import Image from "next/image";
import { ProfileForm } from "./form";

export default function SignInPage() {
	async function handleSignIn() {
		"use server";
		await signIn("google");
	}
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-8">
			<ProfileForm />
			<form action={handleSignIn}>
				<p>社員はこっち</p>
				<Button variant="ghost" className="p-0">
					<Image src={GoogleLogo} alt="Google Logo" priority />
				</Button>
			</form>
		</div>
	);
}
