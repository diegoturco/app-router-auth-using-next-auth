"use client";
import { useState } from "react";

interface Props {
  whoAmIAction: () => Promise<string>;
}

export default function WhoAmIButton({ whoAmIAction }: Props) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAmIAction());
        }}
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}
