"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

// const CustomButton = ({
//   title,
//   containerStyles,
//   handleClick,
//   imageSrc,
// }: CustomButtonProps) => {
//   return (
//     <button
//       disabled={false}
//       type={"button"}
//       className={`tfc_btn ${containerStyles}  
//       hover:-translate-x-2 hover:-translate-y-2 hover:duration-300 hover:shadow-[2px_2px_0px_1px_black] hover:shadow-black ease-in-out `}
//       onClick={handleClick}
//     >
//       <span className={`flex-1`}>
//         <div className="flex gap-3">
//           <span>{title}</span>
//           {imageSrc && <img src={imageSrc}></img>}
//         </div>
//       </span>
//     </button>
//   );
// };

// export default CustomButton;

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  imageSrc,
}: CustomButtonProps) => {
  // Determine if the button has a black background
  const isBlackBackground = containerStyles?.includes('bg-black') || false;

  // Conditionally apply the shadow class based on the background color
  const shadowClass = isBlackBackground ? 'hover:shadow-gray' : 'hover:shadow-black';

  // If the button is bg-transparent, apply a black shadow
  const hasTransparentBackground = containerStyles?.includes('bg-transparent') || false;
  const shadowForTransparent = hasTransparentBackground ? 'hover:shadow-black' : '';

  return (
    <button
      disabled={false}
      type={"button"}
      className={`tfc_btn ${containerStyles || ''} ${shadowClass} ${shadowForTransparent} hover:-translate-x-2 hover:-translate-y-2 hover:duration-300 hover:shadow-[2px_2px_0px_1px_black] ease-in-out`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        <div className="flex gap-3">
          <span>{title}</span>
          {imageSrc && <img src={imageSrc} alt="Button Image" />}
        </div>
      </span>
    </button>
  );
};

export default CustomButton;