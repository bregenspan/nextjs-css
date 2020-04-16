import Link from "next/link";

function OtherPage() {
  return (
    <div>
      <Link href="/">
        <a>Main Page</a>
      </Link>
      <div className="moreGeneralClass">Welcome to Next.js!</div>
    </div>
  );
}

export default OtherPage;
