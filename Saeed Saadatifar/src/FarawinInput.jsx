export default function FarawinInput({ setInp, setFirstUse , vl }) {
  return (
    <input
    value={vl}
      id="1"
      className="p-2 rounded-xl bg-zinc-600 border border-black focus:outline-none"
      placeholder="Type"
      onInput={(e) => {
        setFirstUse(false);
        setInp(e.target.value);
      }}
    />
  );
}
