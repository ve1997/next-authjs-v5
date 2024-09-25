import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	// 未ログインかつリクエストURLがサインインページでない場合、サインインページにリダイレクト
	if (!isLoggedIn && nextUrl.pathname !== "/auth/signin") {
		const encodedCallbackUrl = encodeURIComponent(req.url);
		return NextResponse.redirect(
			new URL(`/auth/signin?callbackUrl=${encodedCallbackUrl}`, req.url),
		);
	}
	// middlewareをカスタムする場合、自動でコールバックしてくれないので自力で実装
	// ログイン済みかつリクエストURLがサインインページの場合、リダイレクト先URLにリダイレクト
	if (isLoggedIn && nextUrl.pathname === "/auth/signin") {
		const callbackUrl = nextUrl.searchParams.get("callbackUrl") || "/";
		const targetUrl = new URL(callbackUrl, req.url);
		return NextResponse.redirect(targetUrl);
	}
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
