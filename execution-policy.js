const DEFAULT_POLICY = {
  maxPositionFraction: 0.12,
  minConfidenceForBuy: 0.75,
  requireManualApproval: true,
  allowLiveExecution: false
};

function evaluateExecutionPolicy(strategy, policy = {}) {
  const rules = { ...DEFAULT_POLICY, ...policy };
  const reasons = [];

  if (strategy.maxPositionFraction > rules.maxPositionFraction) {
    reasons.push(
      `Position fraction ${strategy.maxPositionFraction} exceeds policy cap ${rules.maxPositionFraction}.`
    );
  }

  if (strategy.action === "BUY" && strategy.confidence < rules.minConfidenceForBuy) {
    reasons.push(
      `BUY confidence ${strategy.confidence} is below policy minimum ${rules.minConfidenceForBuy}.`
    );
  }

  if (strategy.action === "REDUCE") {
    reasons.push("Strategy recommends reducing exposure.");
  }

  if (!rules.allowLiveExecution) {
    reasons.push("Live execution is disabled by policy.");
  }

  const allowedByRisk = reasons.length === 0;

  return {
    symbol: strategy.symbol,
    requestedAction: strategy.action,
    allowedByRisk,
    requiresManualApproval: rules.requireManualApproval || !rules.allowLiveExecution,
    executionMode: rules.allowLiveExecution ? "approval_required" : "simulation_only",
    maxPositionFraction: Math.min(strategy.maxPositionFraction, rules.maxPositionFraction),
    reasons: reasons.length > 0 ? reasons : ["Strategy is inside configured risk limits."]
  };
}

module.exports = { DEFAULT_POLICY, evaluateExecutionPolicy };
