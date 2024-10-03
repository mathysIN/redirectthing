import { Inter } from "next/font/google";
import { redirectData } from "~/redirect-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Redirecting to <a className="underline" href={redirectData.link}>{redirectData.name}</a>
    </main>
  );
}
