const fs = require("fs");
const path = require("path");
const { runAllScenarios } = require("./run-all");

function compactScenario(scenario) {
  return {
    scenario: scenario.scenario,
    symbol: scenario.symbol,
    action: scenario.action,
    confidence: scenario.confidence,
    maxPositionFraction: scenario.maxPositionFraction,
    totalReturnPct: scenario.totalReturnPct,
    maxDrawdownPct: scenario.maxDrawdownPct,
    winRatePct: scenario.winRatePct,
    executionMode: scenario.executionMode,
    requiresManualApproval: scenario.requiresManualApproval,
    allowedByRisk: scenario.allowedByRisk
  };
}

function buildDemoOutput() {
  const summary = runAllScenarios();
  const compact = {
    project: summary.project,
    scenarios: summary.scenarios.map(compactScenario)
  };

  return `# Demo Output

Run:

\`\`\`bash
npm run demo:all
\`\`\`

Expected behavior across market regimes:

| Scenario | Expected Action | Why |
| --- | --- | --- |
| Bullish momentum | \`BUY\` | Positive momentum, price above moving averages, volume confirmation, non-bearish sentiment, low drawdown. |
| Bearish drawdown | \`REDUCE\` | Large recent drawdown, negative momentum, bearish sentiment. |
| Sideways chop | \`HOLD\` | Weak momentum and neutral volume/sentiment; no reason to increase exposure. |

The demo also shows the execution policy gate. By default, every scenario remains \`simulation_only\` and \`requiresManualApproval: true\`, so the skill can be evaluated without wallet access or live trades.

Representative output:

\`\`\`json
${JSON.stringify(compact, null, 2)}
\`\`\`

This shows that the skill is not a blind long-only signal. It changes behavior based on trend, drawdown, volume, and sentiment, while the execution gate keeps the prototype simulation-only by default.
`;
}

if (require.main === module) {
  fs.writeFileSync(path.join(__dirname, "DEMO_OUTPUT.md"), buildDemoOutput());
  console.log("Updated DEMO_OUTPUT.md.");
}

module.exports = { buildDemoOutput };
