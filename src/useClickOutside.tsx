import { useEffect, useRef } from "react";

let useClickOutside = (handler: any) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event:any) => {
      
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
export default useClickOutside;
