import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. I should get back to you within
        24-48 hours.
      </p>

      <button
        className="btn btn-primary"
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <>
      <p className="mb-2 w-72 text-center m-auto">
        If you would like to get in touch, please fill in the form below.
      </p>
      <form
        name="contact-form"
        method="POST"
        action="contact/?success=true"
        className="flex flex-col flex-wrap gap-2 items-center"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="form-control">
          <label className="input-group w-72">
            <span>Name</span>
            <input
              type="text"
              placeholder="Joe Bloggs"
              className="input input-bordered w-56"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group w-72">
            <span>Email</span>
            <input
              type="email"
              placeholder="info@site.com"
              className="input input-bordered w-56"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>Company</span>
            <input
              type="text"
              placeholder="company"
              className="input input-bordered"
            />
          </label>
        </div>
        <textarea
          className="textarea textarea-bordered w-72 h-52"
          placeholder="Message"
          required
        ></textarea>
        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </>
  );

  return (
    <section id="contact" className="bg-base-200 p-4">
      <h2 className="mb-5 text-5xl font-bold text-center">Contact</h2>

      {formVisible ? ContactForm : ConfirmationMessage}
    </section>
  );
}
