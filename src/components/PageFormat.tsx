export default function PageFormat({ children, text, id }: any) {
  return (
    <div className="h-full w-full" id={id}>
      <h2 className="text-8xl font-modak text-gray-800 max-md:text-6xl">
        {text}
      </h2>
      {children}
    </div>
  );
}
