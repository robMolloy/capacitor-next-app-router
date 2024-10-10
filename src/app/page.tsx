import { StoreController } from "@/stores/StoreController";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-red-300">asd</div>
      <div className="mt-64">
        <Link href={`/hello`}>to hello</Link>
        <br />
        <br />
        <Link href={`/bye`}>to bye</Link>

        <br />
        <br />
        <StoreController />
      </div>
    </>
  );
}
