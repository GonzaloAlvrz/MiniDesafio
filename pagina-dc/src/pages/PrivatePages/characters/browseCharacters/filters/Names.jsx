import React from "react";
import ComponentNames from "./names/ComponentNames";
export default function Names() {
  return (
    /* options of type */
    <div className="border-b-2 border-gray-200 h-72" >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ComponentNames letra="A" />
          <ComponentNames letra="B" />
          <ComponentNames letra="C" />
          <ComponentNames letra="D" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="E" />
          <ComponentNames letra="F" />
          <ComponentNames letra="G" />
          <ComponentNames letra="H" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="I" />
          <ComponentNames letra="J" />
          <ComponentNames letra="K" />
          <ComponentNames letra="L" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="M" />
          <ComponentNames letra="N" />
          <ComponentNames letra="O" />
          <ComponentNames letra="P" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="Q" />
          <ComponentNames letra="R" />
          <ComponentNames letra="S" />
          <ComponentNames letra="T" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="U" />
          <ComponentNames letra="V" />
          <ComponentNames letra="W" />
          <ComponentNames letra="X" />
        </div>
        <div className="flex flex-row">
          <ComponentNames letra="Y" />
          <ComponentNames letra="Z" />
        </div>
      </div>
    </div>
  );
}
