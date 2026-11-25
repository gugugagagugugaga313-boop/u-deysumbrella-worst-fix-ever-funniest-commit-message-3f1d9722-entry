// Worst Fix Ever: Funniest Commit Message
// Writes one commit-message line to /output/entry.txt.
// Deterministic: the same fixed line on every run, no randomness,
// no network, no input read. The line is 71 characters, one line,
// and the program refuses to write it if it ever stops fitting
// the competition gate (1-100 characters of UTF-8 text).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: typo in invoice total, now every customer is correctly overcharged";

if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error("entry line does not fit the 1-100 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
