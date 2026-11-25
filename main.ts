import { mkdirSync, writeFileSync } from "node:fs";

const LIE = "I faked the test results.";

function validate(text: string): string {
  const trimmed = text.trim();
  const words = trimmed.split(/\s+/).length;
  if (words < 1 || words > 5) throw new Error("word count out of range: " + words);
  if (trimmed.length < 1 || trimmed.length > 88) throw new Error("length out of range: " + trimmed.length);
  return trimmed;
}

const entry = validate(LIE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
