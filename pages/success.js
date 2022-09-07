import Link from "next/link";

export default function Success() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card w-96 bg-neutral text-neutral-content m-auto">
        <div className="card-body">
          <h2 className="card-title">Success!</h2>
          <p>Thank you for getting in touch. I will reply as soon as I can.</p>
          <div className="card-actions justify-end">
            <Link href="/">
              <button className="btn btn-primary">Return to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
