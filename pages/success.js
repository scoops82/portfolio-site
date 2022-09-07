import Link from "next/link";

export default function Success() {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="card-title">Success!</h2>
        <p>Thank you for getting in touch. I will reply as soon as I can.</p>
        <div className="card-actions justify-end">
          <Link href="/">
            <button className="btn">Return to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
