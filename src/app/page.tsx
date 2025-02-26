export default function Home() {
  return (
    <div className="w-full mx-auto px-25 flex justify-center min-h-full">
      <div className="flex flex-col gap-6 pt-14 w-full">
        <div className="flex titles flex-col gap-2">
          <h1 className={`w-150 cursor-default text-7xl font-semibold`}>The happier workspace</h1>
          <h2 className="w-120 font-medium text-2xl">Write. Plan. Collaborate. With a little help from AI.</h2>
          </div>
        <nav className="buttons flex gap-2 w-120">
        <button className="button1 cursor-pointer rounded-md px-4 py-2.5 font-semibold bg-button1 hover:bg-[#045ac3] text-button1-text">Get Notion free</button>
        <button className="button2 cursor-pointer rounded-md px-4 py-2.5 font-semibold bg-button2 hover:bg-[#d6e1f5] text-button2-text">Request a demo</button>
        </nav>
      </div>
    </div>
  );
}
