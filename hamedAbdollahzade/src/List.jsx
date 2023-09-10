export const List = ({ listAsli, setListAsli }) => {
  // const newList = listAsli ;
  // console.log("new List = ",newList);
console.log(listAsli);

  const deldetfun = (k) => {
    console.log("delete fun called .........");
    const newList2 = [...listAsli] ;
  console.log("new List2 = ",newList2);

    newList2.splice(k, 1);
    setListAsli(newList2);
  };

  return (
    <div>
      {listAsli.length !== 0 ? (
        listAsli.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-red-200 flex  justify-between items-center mx-auto p-1 m-1 w-3/4"
            >
              {item}

              <button
                type="button"
                className="border border-black p-1 mx-4 my-1"
                onClick={() => deldetfun(index)}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <div className="bg-red-400 flex justify-center w-1/2 mx-auto">
          {" "}
          "NOT FOUNDED LIST "{" "}
        </div>
      )}
    </div>
  );
};
