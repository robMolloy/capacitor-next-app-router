import { StoreController } from "@/stores/StoreController";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-yellow-300">asd</div>
      <div className="mt-64">
        <Link href={`/`}>to home</Link>
        <br />
        <br />
        <Link href={`/hello`}>to hello</Link>
        <br />
        <br />
        <StoreController />
      </div>
    </>
  );
}
