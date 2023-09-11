export default function List({ listitem }) {
  console.log(listitem);
  return (
    <div className="flex flex-col m-auto ">
      {!listitem ? <div>empty list </div> : <div>{listitem}</div>}
    </div>
  );
}
