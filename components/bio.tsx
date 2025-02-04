import Image from "next/image";

export default function Bio() {
  return (
    <section className="flex text-xl">
      <span className="mr-3">
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full"
          height={50}
          width={50}
          alt=""
        />
      </span>
      <small>
        Hello! I work at <a href="https://www.asana.com/">Asana</a>, where
        I&apos;m the tech lead across our AI initiatives.
      </small>
    </section>
  );
}
