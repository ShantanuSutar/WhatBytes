import { redirect } from "next/navigation";
export default function Home() {
  redirect("/skilltest");
  return <div></div>;
}
