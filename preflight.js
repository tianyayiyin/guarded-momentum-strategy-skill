const assert = require("assert");
const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const skill = require("./skill.json");
const { runAllScenarios } = require("./run-all");
const { buildDemoOutput } = require("./update-demo-output");

const requiredFiles = [
  "README.md",
  "PROJECT_SUMMARY.md",
  "DORAHACKS_FORM_COPY.md",
  "SUBMISSION_DRAFT.md",
  "HACKATHON_CHECKLIST.md",
  "JUDGING_NOTES.md",
  "JUDGE_QA.md",
  "RECORDING_CHECKLIST.md",
  "DEMO_SCRIPT.md",
  "DEMO_OUTPUT.md",
  "ARCHITECTURE.md",
  "LICENSE",
  "skill.json",
  "cmc-adapter.js",
  "execution-policy.js",
  "strategy.js",
  "metrics.js",
  "backtest.js",
  "run-all.js",
  "update-demo-output.js",
  "validate-skill.js",
  "test.js",
  "sample_market_data.json",
  "sample_bearish_market_data.json",
  "sample_sideways_market_data.json",
  ".github/workflows/ci.yml",
];

function read(file) {
  return fs.readFileSync(path.join(__dirname, file), "utf8");
}

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(path.join(__dirname, file)), `Missing required file: ${file}`);
}

assert.strictEqual(skill.track, "Strategy Skills");
assert.ok(packageJson.scripts.test.includes("validate-skill.js"));
assert.ok(packageJson.scripts["demo:all"].includes("run-all.js"));
assert.ok(packageJson.scripts["demo:update-output"].includes("update-demo-output.js"));
assert.ok(packageJson.scripts.verify.includes("npm run preflight"));
assert.ok(packageJson.repository.url.includes("tianyayiyin/guarded-momentum-strategy-skill"));

const docs = {
  "README.md": read("README.md"),
  "DORAHACKS_FORM_COPY.md": read("DORAHACKS_FORM_COPY.md"),
  "JUDGING_NOTES.md": read("JUDGING_NOTES.md"),
  "JUDGE_QA.md": read("JUDGE_QA.md"),
};

for (const [file, doc] of Object.entries(docs)) {
  assert.ok(/wallet|private keys|live trades|execute/i.test(doc), "Docs should mention execution safety");
  assert.ok(/CoinMarketCap|Trust Wallet|BNB Chain/i.test(doc), `${file} should mention sponsor fit`);
}

assert.ok(/Strategy Skills/i.test(docs["README.md"]));
assert.ok(/Strategy Skills/i.test(docs["DORAHACKS_FORM_COPY.md"]));
assert.ok(/Strategy Skills/i.test(docs["JUDGING_NOTES.md"]));

const formCopy = read("DORAHACKS_FORM_COPY.md");
assert.ok(formCopy.includes("0xDA423EC38A4d36c294Cb1D187af0312039C569eE"));
assert.ok(formCopy.includes("https://github.com/tianyayiyin/guarded-momentum-strategy-skill"));

const summary = runAllScenarios();
const actions = summary.scenarios.map((scenario) => scenario.action);
assert.deepStrictEqual(actions, ["BUY", "REDUCE", "HOLD"]);
assert.strictEqual(read("DEMO_OUTPUT.md"), buildDemoOutput());

console.log("Submission preflight passed.");
