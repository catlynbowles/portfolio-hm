import Link from "next/link";
import Image from "next/image";
import troll from "../../public/assets/troll.png";

export default function PageFormat({ children, text, id }: any) {
  return (
    <div className="h-full" id={id}>
      <h2 className="text-8xl font-modak">{text}</h2>
      {children}
    </div>
  );
}
