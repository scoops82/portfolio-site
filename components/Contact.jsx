export default function Contact() {
  return (
    <section id="contact" className="bg-base-200 p-4">
      <h2 className="mb-5 text-5xl font-bold text-center">Contact</h2>
      <form
        name="contact"
        method="POST"
        className="flex flex-col flex-wrap gap-2 items-center"
        data-netlify="true"
      >
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
    </section>
  );
}
