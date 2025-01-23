import { Golos_Text } from "next/font/google";

const golos = Golos_Text({
  subsets: ["latin"],
  display: "swap",
});

type HeadingProps = {
  hero?: string;
  title?: string;
  h3?: string;
  h4?: string;
};

export default function Heading({ hero, title, h3, h4 }: HeadingProps) {
  return (
    <>
      {hero && (
        <h1 className={`${golos.className} text-[64px] font-bold`}>{hero}</h1>
      )}
      {title && (
        <h2 className={`${golos.className} text-5xl font-semibold`}>{title}</h2>
      )}
      {h3 && <h3 className={`text-[28px] font-semibold`}>{h3}</h3>}
      {h4 && <h4 className={`text-[24px]`}>{h4}</h4>}
    </>
  );
}
