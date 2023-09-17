import { useState } from "react";
import { Button } from "./Button";
import { FarawinInput } from "./FarawinInput";

export const Form = ({ listAsli, setListAsli }) => {
  const [ersal, setErsal] = useState("");

  const ersalList = () => {
    // اینجا چون باتن رو کامپوننتی درست کردم مجبور شدم ی فانکشن براش تعریف کنم
    console.log("fun ersal called ... ");
    setListAsli([...listAsli, ersal]);
  };

  console.log("ersal = ", ersal, "list asli 1 = ", listAsli);

  return (
    <div className="flex flex-col justify-center items-center m-4 ">
      <FarawinInput setErsal={setErsal} />

      {/* اینجا گفته بودین داخل کامپوننت فرم دوتا کامپوننت داریم !
       بعد خودتون تو سورس کد، باتن رو به صورت کامپوننت نذاشتین اینجا شما نمره منفی دارین :D  */}

      <Button ersal={ersalList} />
    </div>
  );
};
