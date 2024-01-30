"use client";

import { CodeHighlight } from "@mantine/code-highlight";

const exampleCode = `
static void LowerUpperText(ref string input, out string low, out string up)
{
    input += "!";
    low = input.ToLower();
    up = input.ToUpper();
}

// Main:
string s = "aHoJ";
string sUp = "blabla";
LowerUpperText(ref s, out string sLow, out sUp); // Proměnnou lze deklarovat až při volání (sLow) nebo už před tím (sUp)

WriteLine(s);       // aHoJ!
WriteLine(sLow);    // ahoj!
WriteLine(sUp);     // AHOJ!
`;

export default function StructuredDataTypes() {
  return (
    <>
      <CodeHighlight code={exampleCode} language="csharp" />
    </>
  );
}
