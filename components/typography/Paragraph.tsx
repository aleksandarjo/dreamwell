type ParagraphProps = {
  text?: string;
};

export default function Paragraph({ text }: ParagraphProps) {
  return <>{text && <p className={`text-base`}>{text}</p>}</>;
}
