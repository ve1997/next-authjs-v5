import NextAuth, { type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const config: NextAuthConfig = {
	providers: [Google],
	basePath: "/api/auth",
	callbacks: {
		authorized({ request, auth }) {
			try {
				const { pathname } = request.nextUrl;
				if (pathname === "/protected-page") return !!auth;
				return true;
			} catch (e) {
				console.error(e);
			}
		},
		jwt({ token, trigger, session }) {
			if (trigger === "update") token.name = session.user.name;
			return token;
		},
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
