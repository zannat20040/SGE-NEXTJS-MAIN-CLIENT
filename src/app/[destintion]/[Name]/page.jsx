import React from "react";

export default function page({ params }) {
  const { destination, name } = params;
  console.log("destination==>", destination, "nmae===>", name);
  return <div>jwkdfe</div>;
}
