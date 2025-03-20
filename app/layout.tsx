import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Budget Tracker",
	description: "App that let's you track your budget",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className="dark"
				style={{
					colorScheme: "dark",
				}}
			>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<Toaster richColors position="bottom-left" />
					<RootProviders>{children}</RootProviders>
				</body>
			</html>
		</ClerkProvider>
	);
}
