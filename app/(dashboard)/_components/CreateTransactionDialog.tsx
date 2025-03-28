"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
	CreateTransactionSchema,
	CreateTransactionSchemaType,
} from "@/schema/transaction";
import { ReactNode } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
	children: ReactNode;
	type: TransactionType;
}

function CreateTransactionDialog({ children, type }: Props) {
	const form = useForm<CreateTransactionSchemaType>({
		resolver: zodResolver(CreateTransactionSchema),
		defaultValues: {
			type,
			date: new Date(),
		},
	});

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Create a new
						<span
							className={cn(
								"m-1",
								type === "income" ? "text-emerald-500" : "text-red-500"
							)}
						>
							{type}
						</span>
						transaction
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form className="space-y-4">
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input defaultValue={""} {...field} />
									</FormControl>
									<FormDescription>
										Transaction description (optional)
									</FormDescription>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export default CreateTransactionDialog;
