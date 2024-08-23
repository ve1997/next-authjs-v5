import type { Session } from "next-auth";

export function SessionData({
	session,
	loading = false,
}: { session: Session | null; loading?: boolean }) {
	return (
		<div className="flex w-full flex-col gap-4">
			<h2 className="font-bold text-xl">現在のセッションデータ</h2>
			<p>
				この例では、機密情報を公開しないために、ユーザーオブジェクトの一部のフィールドのみがページに渡されます。
			</p>
			<div className="flex flex-col rounded-md bg-neutral-100">
				<div className="rounded-t-md bg-neutral-200 p-4 font-bold">Session</div>
				<pre className="whitespace-pre-wrap break-all px-4 py-6">
					{loading ? "loading..." : JSON.stringify(session, null, 2)}
				</pre>
			</div>
		</div>
	);
}
