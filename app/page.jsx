import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js CRUD Assignment</h1>
      <Link href="/users">Go to Users</Link>
    </div>
  );
}
