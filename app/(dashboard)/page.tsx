import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CreateTransactionDialog from "./_components/CreateTransactionDialog";

async function page() {
	const user = await currentUser();
	if (!user) redirect("/sign-in");

	const userSettings = await prisma.userSettings.findUnique({
		where: {
			userId: user.id,
		},
	});

	if (!userSettings) redirect("/wizard");

	return (
		<div className="h-full bg-background">
			<div className="border-b bg-card flex justify-center">
				<div className="container flex flex-wrap items-center justify-between gap-6 p-8">
					<p className="text-3xl font-bold">Hello, {user.firstName}! 👋</p>

					<div className="flex items-center gap-3">
						<CreateTransactionDialog type="income">
							<Button
								variant={"outline"}
								className="!border-emerald-500 !bg-emerald-950 !text-white hover:!bg-emerald-700 hover:text-white cursor-pointer"
							>
								New income 🤑
							</Button>
						</CreateTransactionDialog>
						<CreateTransactionDialog type="expense">
							<Button
								variant={"outline"}
								className="!border-rose-500 !bg-rose-950 !text-white hover:!bg-rose-700 hover:text-white cursor-pointer"
							>
								New expense 😤
							</Button>
						</CreateTransactionDialog>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
