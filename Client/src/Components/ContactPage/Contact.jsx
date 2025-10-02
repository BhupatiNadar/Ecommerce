import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="w-full bg-orange-50 py-16 sm:py-24 px-4">
        <div className="container mx-auto max-w-2xl bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-lg">CONTACT US</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-2">
              Get in Touch
            </h1>
            <p className="text-gray-500 mt-4">
              Have a question or a project in mind? We'd love to hear from you.
              Or just reach out manually at{" "}
              <a
                href="mailto:hello@Flavourazzi"
                className="text-orange-600 font-bold hover:underline"
              >
                hello@Flavourazzi.com
              </a>
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Let us know how we can help..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              ></textarea>
            </div>

            <button
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-md"
            >
              <span>Submit Form</span>
              <FaLongArrowAltRight />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
