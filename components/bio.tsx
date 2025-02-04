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
        Hello! I&apos;m Eric. I spent a decade at{" "}
        <a href="https://www.asana.com/">Asana</a>, most recently as a
        Distinguished Engineer leading their AI organization. Before that, I led
        their Workflow & Platform organization. I&apos;m currently on a work
        break.
      </small>
    </section>
  );
}
