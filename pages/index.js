import Link from "next/link";
import styles from "../src/css/index.module.css";

function HomePage() {
  return (
    <div>
      <Link href="/other-page">
        <a>Other Page</a>
      </Link>
      <div className={"moreGeneralClass " + styles.moreSpecificClass}>
        Welcome to Next.js!
      </div>
    </div>
  );
}

export default HomePage;
