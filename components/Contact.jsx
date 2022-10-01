import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const ContactForm = (
    <>
      <p className="max-w-96 text-center m-4">
        If you would like to get in touch, please fill in the form below.
      </p>
      <form
        name="contact-form"
        method="POST"
        action="/success"
        className="flex flex-col flex-wrap gap-6 items-center"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="form-control">
          <label className="input-group w-64 sm:w-96">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Joe Bloggs"
              className="input input-bordered w-80"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group w-64 sm:w-96">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="info@site.com"
              className="input input-bordered w-80"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group w-64 sm:w-96">
            <span>Company</span>
            <input
              type="text"
              name="company"
              placeholder="company"
              className="input input-bordered w-40 sm:w-80"
            />
          </label>
        </div>
        <textarea
          className="textarea textarea-bordered w-64 sm:w-96 h-52"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <div className="flex gap-4 mb-4">
          <button type="submit" className="btn btn-success">
            Send
          </button>
          <button type="reset" className="btn btn-warning">
            Reset
          </button>
        </div>
      </form>
    </>
  );

  return (
    <section
      id="contact"
      className="bg-base-200 p-4 flex flex-col justify-center snap-start h-auto"
    >
      <div className="h-12"></div>
      <h2 className="mb-5 text-5xl font-bold text-center my-4">Contact</h2>

      {ContactForm}
    </section>
  );
}
