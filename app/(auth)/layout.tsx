import { Header } from "@/components/header";
import type { ReactNode } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="flex h-full min-h-screen w-full flex-col justify-between">
			<Header />
			<main className="mx-auto w-full max-w-3xl flex-auto px-4 py-4 sm:px-6 md:px-6 md:py-6">
				{children}
			</main>
		</div>
	);
}
