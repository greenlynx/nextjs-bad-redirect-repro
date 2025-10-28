"use server";

import { redirect } from "next/navigation";

export default async function submitAction(): Promise<void> {
	return redirect("/success");
}
