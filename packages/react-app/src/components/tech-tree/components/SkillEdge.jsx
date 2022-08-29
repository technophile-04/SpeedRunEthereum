import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import Line from "./ui/Line";
import UpperAngledLine from "./ui/UpperAngledLine";
import MiddleAngledLine from "./ui/MiddleAngledLine";
import LowerAngledLine from "./ui/LowerAngledLine";

function SkillEdge(props) {
  const { parentHasMultipleChildren, state, childNodeRef, parentPosition } = props;
  const [childPosition, setChildPosition] = useState(0);

  function calculatePosition() {
    const { left, width } = childNodeRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    setChildPosition(left + width / 2 + scrollX);
  }

  useEffect(() => {
    const throttledHandleResize = throttle(calculatePosition, 200);
    window.addEventListener("resize", throttledHandleResize);
    calculatePosition();
    return function cleanup() {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  const direction = parentPosition < childPosition ? "right" : "left";

  if (!parentHasMultipleChildren) {
    return <Line state={state} />;
  }

  return (
    <div style={{ height: "56px" }}>
      {/* <UpperAngledLine state={state} direction={direction} /> */}
      <div style={{ position: "relative" }}>
        <MiddleAngledLine
          parentPosition={parentPosition}
          childPosition={childPosition}
          state={state}
          direction={direction}
        />
        <LowerAngledLine direction={direction} state={state} />
      </div>
    </div>
  );
}
export default SkillEdge;
//# sourceMappingURL=SkillEdge.jsx.map
