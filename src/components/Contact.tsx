import Image from "next/image";
import friends from "../../public/assets/friends-logo.svg";
import PageFormat from "@/components/PageFormat";

export default function Contact() {
  return (
    <PageFormat text="lets be" id="contact">
      <Image
        src={friends}
        alt="friends logo"
        height={500}
        width={500}
        className="absolute"
      />
    </PageFormat>
  );
}
