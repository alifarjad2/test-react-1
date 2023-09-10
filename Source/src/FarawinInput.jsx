//1- first just add needed components
export default function FarawinInput({ state }) {
  // state is array
  const [text, setText] = state;
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
