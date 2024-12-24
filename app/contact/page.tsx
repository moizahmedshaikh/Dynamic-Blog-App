

import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto md:py-24 py-12">
      <h1 className="md:text-5xl text-4xl font-bold Heading text-center pb-7">
        Contact Us
      </h1>
      <p className="text-2xl text-center tracking-widest leading-10 mb-10">
        {" "}
        Wed love to hear from you!{" "}
      </p>
      <p className="text-2xl text-center tracking-widest leading-10 mb-10">
        At Moiz Ahmed, we value your thoughts, feedback, and suggestions.
        Whether you have a question, want to share your ideas, or need
        assistance, our team is here to help.
      </p>

      <div className="w-full">
        <Image
          src={
            "https://preview.colorlib.com/theme/wordsmith/images/thumbs/contact/contact-2000.jpg"
          }
          alt="about image"
          height={2000}
          width={2000}
        />
      </div>

      <div className="text-lg tracking-wide text-[#525151] py-10 leading-8">
        <p className="my-10">
          Our blog is your go-to destination for exploring diverse topics that
          inspire, inform, and engage. From the secrets to maintaining a healthy
          lifestyle in Health, to unlocking leadership skills in Management,
          from fostering your artistic spirit in Design & Creativity, to
          navigating the complexities of Relationships, weve got you covered.
        </p>

        <p>
          Our mission is to empower our readers with well-researched,
          thought-provoking, and actionable content. Whether youre looking for
          tips to boost your productivity, creative hacks to enhance your design
          skills, or advice on building meaningful relationships, our blogs are
          here to guide you.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-[600] tracking-wider mb-8">Get In Touch</h2>
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full bg-[#f2f2f2] outline-none border-b-[1px] border-gray-300"
        />
        <input
          type="email"
          placeholder="Your Email*"
          className="w-full bg-[#f2f2f2] my-7 outline-none border-b-[1px] border-gray-300"
        />
        <textarea
          placeholder="Add a comment..."
          className="outline-none bg-[#f2f2f2] w-full border-b-[1px] border-gray-300"
        />

      </div>
        <button className="bg-[#111860] transition 1s duration-200 hover:bg-[#0d134a] text-white text-sm py-5 tracking-widest w-full mt-3">
          SEND MESSAGE
        </button>
    </div>
  );
};

export default Contact;
