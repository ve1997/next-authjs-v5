import { cn } from "@/lib/utils";
import Link from "next/link";
import type { LinkHTMLAttributes } from "react";

interface CustomLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

export function CustomLink({
	href,
	children,
	className,
	...rest
}: CustomLinkProps) {
	const isInternalLink = href.startsWith("/");
	const isAnchorLink = href.startsWith("#");

	if (isInternalLink || isAnchorLink) {
		return (
			<Link href={href} className={className} {...rest}>
				{children}
			</Link>
		);
	}

	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"inline-flex items-center gap-1 align-baseline underline underline-offset-4",
				className,
			)}
			{...rest}
		>
			<span>{children}</span>
		</Link>
	);
}
