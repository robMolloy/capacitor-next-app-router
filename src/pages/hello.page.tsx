import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-red-300">asd</div>
      <div className="mt-64">
        <Link href={`/`}>to home</Link>
      </div>
    </>
  );
}
