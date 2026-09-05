---
package: rjm
path: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
type: agent
bytes: 10097
unit: inv-rjm-33
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-081-confidence-elicitation-experiment.md, sha256: 7489bbf18df087428ea796f02bba165a90a02eadae4d33d63a3a4cbe6324d8ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-081-confidence-elicitation-experiment.md

## Purpose — required, verbatim
> "Do not ship confidence elicitation as a blocking PreToolUse hook." — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:44

## Design intent — required
Evaluates and reframes issue #3016's proposal for a metacognitive confidence-elicitation signal ("what am I least confident about right now?") intended to run at completion claims. Following multi-agent adversarial review finding that an LLM call inside a 5-second PreToolUse blocking hook is mechanically unbuildable and that calibrating self-report against critic output creates circular ground truth, the ADR rejects the blocking hook and reframes the technique into an offline shadow study with external defect labels (tests, CI, human review) alongside a buildable gate-hardening alternative.

## Phase — required
cross-phase

## Inputs — required
- "Issue #3016 (P3, owner-anchored, single requester, no production retro proving the gap) proposes a metacognitive confidence-elicitation signal: before a" — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:24-25
- ".claude/hooks/PreToolUse/invoke_false_completion_gate.py" — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:94

## Outputs — required
- "Concretely, the ADR offered three tracks. Owner decision (2026-07-11): track 1 (shadow study) is accepted and the blocking hook is rejected on latency and cost grounds." — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:52-54
- "scripts/eval/eval-confidence-calibration.py" — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:171

## Invokes — required
- agent .claude/agents/silent-failure-hunter.md — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:99
- script scripts/eval/_scoring_engine.py — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:101
- script scripts/eval/_eval_agent_types.py — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:102
- doc .agents/analysis/ADR-081-confidence-elicitation-debate.md — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:36
- config .claude/settings.json — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:95
- reference ADR-080 — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:185

## Invoked by — required
- doc README — .agents/architecture/README.md:141
- doc ADR-081 — .agents/analysis/ADR-081-confidence-elicitation-debate.md:1
- doc ADR-081 — .agents/analysis/2026-07-27-issue-3399-adr-prose-hook-reference-debate.md:7

## Concepts named — required, verbatim
`confidence-elicitation` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:25 — defined here
`false-completion gate` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:29 — used here
`calibration gate` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:31 — defined here
`shadow study` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:49 — defined here
`gate hardening` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:71 — defined here
`EXTERNAL labels` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:60 — defined here
`power target` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:64 — used here
`silent-failure-hunter` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:88 — used here
`PreToolUse` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:44 — used here
`Stop` — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:58 — used here

## Structure
# ADR-081: Confidence Elicitation Is a Shadow Study, Not a Shipped Gate — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:12
## Status — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:14
## Date — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:18
## Context — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:22
## Decision — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:42
## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:90
### What Currently Exists — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:92
### Historical Rationale — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:105
### Why Change Now — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:111
## Rationale — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:120
### Alternatives Considered — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:122
### Trade-offs — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:131
## Consequences — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:138
### Positive — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:140
### Negative — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:149
### Neutral — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:154
## Impact on Dependent Components — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:158
## Implementation Notes — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:167
## Related Decisions — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:181
## References — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:188

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:94 — References `.claude/hooks/PreToolUse/invoke_false_completion_gate.py` which was retired and deleted from the repository.
- missing-path — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:171 — References proposed offline calibration script `scripts/eval/eval-confidence-calibration.py`, which does not exist because Track 1 was not implemented (`implemented: false`).

## Observations
Serves as an essential architectural case study against "folk engineering" and ungrounded LLM self-monitoring: an adversarial review demonstrated that asking an LLM "what am I least confident about" in a blocking hook breaks latency budgets, while evaluating confidence against another LLM critic measures inter-model agreement rather than actual defects. It establishes clear architectural principles: never invoke an LLM inside a blocking PreToolUse hook, never use generator output as ground truth, and distinguish routing signals from terminal verdicts.

## Context cost
10097 bytes, approximately 2524 tokens.
