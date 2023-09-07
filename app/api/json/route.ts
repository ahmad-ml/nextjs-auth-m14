import { NextResponse } from "next/server";

const response = {
  message: "Welcome to our API!",

  version: "1.0",
};

export async function GET() {
  return NextResponse.json(response);
}
