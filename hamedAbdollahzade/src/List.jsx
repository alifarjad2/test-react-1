export const List = ({ listAsli, setListAsli }) => {
  // const newList = listAsli ;
  // console.log("new List = ",newList);
  console.log(listAsli);

  const deldetfun = (k) => {
    console.log("delete fun called .........");
    const newList2 = [...listAsli];
    console.log("new List2 = ", newList2);

    newList2.splice(k, 1);
    setListAsli(newList2);

    // اینجا فهمیدم خیلی راحت تر میشه با یک خط خیلی خلاصه تر هم نوشت به این صورت
    // setListAsli(listAsli.filter((v, i) => i !== k));
  };

  return (
    <div>
      {listAsli.length !== 0 ? (
        listAsli.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-full  flex  justify-between items-center mx-auto p-2 m-3"
            >
              {/* اینجا فقط یک شماره ایندکس یادم رفته بود بذارم ردیف رو نشون بده */}
              <div className=" bg-white rounded-full w-10 h-10 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="text-xl text-white flex-1 text-center">{item}</div>

              <button
                type="button"
                className="   p-2   hover:bg-red-400 rounded-full bg-white "
                onClick={() => deldetfun(index)}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <div className="border  flex justify-center items-center">
          {" "}
          "NOT FOUNDED LIST "{" "}
        </div>
      )}
    </div>
  );
};
