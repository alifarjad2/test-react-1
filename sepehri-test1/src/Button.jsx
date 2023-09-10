export default function Button({onClick}) {
  return (
    <button
      className="p-1 px-4 bg-slate-300 rounded-md mt-3 w-full hover:bg-slate-400"
      onClick={onClick}
    >
      send
    </button>
  );
}
