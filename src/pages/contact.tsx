import Image from "next/image";
import friends from "../../public/assets/friends-logo.svg";

export default function Contact() {
  return (
    <section id="contact" className="h-full flex flex-row relative">
      <h2 className="text-8xl font-modak">let's be</h2>
      <Image
        src={friends}
        alt="friends logo"
        height={500}
        width={500}
        className="absolute"
      />
    </section>
  );
}
