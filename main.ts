// Worst Fix Ever: Funniest Commit Message
// Writes one commit-message line to /output/entry.txt.
// Deterministic: the same fixed line on every run, no randomness,
// no network, no input read. The line is 71 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: typo in invoice total, now every customer is correctly overcharged";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
