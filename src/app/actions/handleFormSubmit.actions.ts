"use server";

import { prisma } from "@/src/lib/prisma";
import { formData } from "@/src/constants/formSubmit.constants";

export async function storeUserData(userData: formData) {
  try {
    await prisma.formData.create({
      data: {
        name: userData?.name,
        email: userData?.email,
        note: userData?.note,
      },
    });
    return { success: true as const };
  } catch (e: unknown) {
    console.error("Error while creating user data entry", e);
    return { success: false as const, message: "We couldn't save your note. Please try again." };
  }
}

// we can add any function we want to call here, for example sending a confirmation email.
