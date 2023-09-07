"use server";

import { cookies } from "next/headers";

export const setTheme = (theme:string) => {
    cookies().set('theme', theme)

  }
