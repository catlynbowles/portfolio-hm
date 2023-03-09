export default function PageFormat({ children, text, id }: any) {
  return (
    <div className="h-full" id={id}>
      <h2 className="text-8xl font-modak">{text}</h2>
      {children}
    </div>
  );
}
