//1- first just add needed components
export default function FarawinInput({ state }) {
  // state is array
  const [text, setText] = state;
  return (
    <div className="bg-[#2E333D] flex w-auto ml-3 mr-1 mx-3  rounded-2xl p-2 pr-4">
      <input
        className="bg-transparent text-[#989BA0] w-full outline-none ml-2 h-9 pr-2"
        placeholder="Add Your Texts here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
