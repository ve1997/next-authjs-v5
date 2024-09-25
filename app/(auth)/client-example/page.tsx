import { ClientExample } from "@/components/client-example";
import { SessionProvider } from "next-auth/react";

export default function ClientPage() {
	return (
		<SessionProvider>
			<ClientExample />
		</SessionProvider>
	);
}
