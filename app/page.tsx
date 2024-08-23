import { CustomLink } from "@/components/custom-link";
import { SessionData } from "@/components/session-data";

export default function Home() {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="font-bold text-3xl">🚀 NextAuth.js Tutorial</h1>
			<div>
				<CustomLink href="/server-example" className="underline">
					サーバー
				</CustomLink>
				と
				<CustomLink href="/client-example" className="underline">
					クライアント
				</CustomLink>
				の例を見て、ページを保護してセッションデータを取得する方法を確認してください。
			</div>
			<SessionData />
		</div>
	);
}
