---
package: rjm
path: .agents/architecture/ADR-080-model-pin-justification-policy.md
type: agent
bytes: 20735
unit: inv-rjm-33
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-080-model-pin-justification-policy.md, sha256: 6d7e574dce40bafce615a0297240681cc918074762019008b0488ded72c440b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-080-model-pin-justification-policy.md

## Purpose — required, verbatim
> "Default every skill, agent, and command to the harness-inherited model." — .agents/architecture/ADR-080-model-pin-justification-policy.md:72

## Design intent — required
Establishes an empirical, measured governance policy for `model:` frontmatter pins across skills, agents, and commands in `rjm`. Bans versioned pins on skills and commands because they cannot be evaluated with the existing test sweep tooling, while restricting versioned pins on agents to those backed by committed eval sweep artifacts demonstrating a statistically significant recall improvement (delta >= 0.05 and lower bound CI > 0 over at least 8 shared fixtures). Enforces policy compliance through a draining baseline ratchet (`check_model_pins.py`) and eliminates generator-injected default models, preventing version drift, format drift, and model retirement CI breaks.

## Phase — required
cross-phase

## Inputs — required
- "Scanning unit frontmatter on `main` (excluding the `AGENTS.md` and `CLAUDE.md` doc examples) finds roughly 108 pins across `.claude/skills`, `.claude/agents`, and `.claude/commands`." — .agents/architecture/ADR-080-model-pin-justification-policy.md:31-33
- "Issue #2901 delivered the sweep harness (`scripts/eval/eval-model-sweep.py` plus `scripts/eval/_model_sweep_core.py`) and #2902 completed the pricing table." — .agents/architecture/ADR-080-model-pin-justification-policy.md:54-55
- ".agents/analysis/ADR-080-model-pin-policy-debate.md" — .agents/architecture/ADR-080-model-pin-justification-policy.md:67
- ".agents/analysis/2026-08-12-adr-080-copilot-model-resolution.md" — .agents/architecture/ADR-080-model-pin-justification-policy.md:22

## Outputs — required
- ".agents/governance/model-pin-evidence.json" — .agents/architecture/ADR-080-model-pin-justification-policy.md:107
- "scripts/validation/check_model_pins.py" — .agents/architecture/ADR-080-model-pin-justification-policy.md:124
- "A committed `.agents/governance/model-pin-evidence.json` maps each versioned agent pin to its justifying artifact: unit name, pinned model id, artifact path, `fixtures_sha`, harness/pricing date." — .agents/architecture/ADR-080-model-pin-justification-policy.md:106-109

## Invokes — required
- script scripts/eval/eval-model-sweep.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:54
- script scripts/eval/_model_sweep_core.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:55
- script scripts/eval/eval-agent-vs-baseline.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:59
- script build/scripts/copilot_body_translation.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:111
- script build/generate_agents_common.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:117
- script scripts/validation/check_model_pins.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:124
- script scripts/eval/_eval_common.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:364
- script scripts/validation/check_skill_md_exec_portability.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:367
- script scripts/validation/check_vendor_portability.py — .agents/architecture/ADR-080-model-pin-justification-policy.md:368
- doc .agents/analysis/2026-08-12-adr-080-copilot-model-resolution.md — .agents/architecture/ADR-080-model-pin-justification-policy.md:22
- doc .agents/analysis/ADR-080-model-pin-policy-debate.md — .agents/architecture/ADR-080-model-pin-justification-policy.md:67
- config templates/platforms/copilot-cli.yaml — .agents/architecture/ADR-080-model-pin-justification-policy.md:116
- config templates/platforms/vscode.yaml — .agents/architecture/ADR-080-model-pin-justification-policy.md:322
- config templates/platforms/visual-studio.yaml — .agents/architecture/ADR-080-model-pin-justification-policy.md:323

## Invoked by — required
- doc README — .agents/architecture/README.md:140
- doc SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:23
- script model_pin_sweep_evidence.py — build/model_pin_sweep_evidence.py:20
- doc templates.instructions.md — src/copilot-cli/instructions/templates.instructions.md:31
- doc ADR-080 — .agents/architecture/ADR-081-confidence-elicitation-experiment.md:185

## Concepts named — required, verbatim
`format drift` — .agents/architecture/ADR-080-model-pin-justification-policy.md:40 — defined here
`version drift` — .agents/architecture/ADR-080-model-pin-justification-policy.md:42 — defined here
`retirement CI-break class` — .agents/architecture/ADR-080-model-pin-justification-policy.md:44 — defined here
`rolling aliases` — .agents/architecture/ADR-080-model-pin-justification-policy.md:46 — used here
`sweep harness` — .agents/architecture/ADR-080-model-pin-justification-policy.md:54 — used here
`KEEP_PIN` — .agents/architecture/ADR-080-model-pin-justification-policy.md:83 — defined here
`DROP_PIN` — .agents/architecture/ADR-080-model-pin-justification-policy.md:91 — defined here
`model-rationale` — .agents/architecture/ADR-080-model-pin-justification-policy.md:79 — defined here
`model_tiers` — .agents/architecture/ADR-080-model-pin-justification-policy.md:100 — used here
`sidecar manifest` — .agents/architecture/ADR-080-model-pin-justification-policy.md:106 — defined here
`draining ratchet` — .agents/architecture/ADR-080-model-pin-justification-policy.md:123 — defined here
`frozen baseline` — .agents/architecture/ADR-080-model-pin-justification-policy.md:129 — defined here
`burn-down obligation` — .agents/architecture/ADR-080-model-pin-justification-policy.md:132 — defined here
`TESTING-RIGOR` — .agents/architecture/ADR-080-model-pin-justification-policy.md:245 — used here

## Structure
# ADR-080: Model Pins Require Cited Eval Evidence — .agents/architecture/ADR-080-model-pin-justification-policy.md:12
## Status — .agents/architecture/ADR-080-model-pin-justification-policy.md:14
## Date — .agents/architecture/ADR-080-model-pin-justification-policy.md:24
## Context — .agents/architecture/ADR-080-model-pin-justification-policy.md:28
### What measurement is actually possible — .agents/architecture/ADR-080-model-pin-justification-policy.md:52
## Decision — .agents/architecture/ADR-080-model-pin-justification-policy.md:70
## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-080-model-pin-justification-policy.md:137
### What Currently Exists — .agents/architecture/ADR-080-model-pin-justification-policy.md:139
### Historical Rationale — .agents/architecture/ADR-080-model-pin-justification-policy.md:151
### Why Change Now — .agents/architecture/ADR-080-model-pin-justification-policy.md:159
## Rationale — .agents/architecture/ADR-080-model-pin-justification-policy.md:171
### Alternatives Considered — .agents/architecture/ADR-080-model-pin-justification-policy.md:173
### Trade-offs — .agents/architecture/ADR-080-model-pin-justification-policy.md:183
## Consequences — .agents/architecture/ADR-080-model-pin-justification-policy.md:192
### Positive — .agents/architecture/ADR-080-model-pin-justification-policy.md:194
### Negative — .agents/architecture/ADR-080-model-pin-justification-policy.md:204
### Neutral — .agents/architecture/ADR-080-model-pin-justification-policy.md:211
## Impact on Dependent Components — .agents/architecture/ADR-080-model-pin-justification-policy.md:217
## Implementation Notes — .agents/architecture/ADR-080-model-pin-justification-policy.md:229
### Governance-check acceptance criteria (TESTING-RIGOR: positive, negative, edge) — .agents/architecture/ADR-080-model-pin-justification-policy.md:245
## Amendment 2026-08-12 — .agents/architecture/ADR-080-model-pin-justification-policy.md:261
### Corrections to this amendment's own first draft — .agents/architecture/ADR-080-model-pin-justification-policy.md:327
### Stale statements this amendment does not fix — .agents/architecture/ADR-080-model-pin-justification-policy.md:345
## Related Decisions — .agents/architecture/ADR-080-model-pin-justification-policy.md:353
## References — .agents/architecture/ADR-080-model-pin-justification-policy.md:360

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-080-model-pin-justification-policy.md:241 — Cites bare `build_all.py --check` instead of `build/scripts/build_all.py`.
- doc-drift — .agents/architecture/ADR-080-model-pin-justification-policy.md:9 — Frontmatter specifies `implemented: false`, but the governance check `check_model_pins.py` was implemented and runs in CI, as self-documented in lines 347-351.
- doc-drift — .agents/architecture/ADR-080-model-pin-justification-policy.md:116 — Cites `templates/platforms/copilot-cli.yaml:95` for the model line, which is actually `outputDir` (model was line 98), and omitted two other config files (`templates/platforms/vscode.yaml` and `templates/platforms/visual-studio.yaml`), as noted in lines 320-326.
- cross-file-contradiction — .agents/architecture/ADR-080-model-pin-justification-policy.md:313-318 — Rule 3 cost-rationale bare aliases in skills are silently dropped by `src/copilot-cli/skills` copier because skill translations lack the `model_tiers` resolution implemented for agents.

## Observations
Provides a rigorous model-pin governance strategy balancing empirical evaluation against tool capabilities: recognizing that skills and commands lack an automated evaluation harness, it disallows version pins on them outright while establishing a high evidence bar (paired bootstrap CI lower bound > 0 and effect delta >= 0.05 on at least 8 fixtures) for agents. Features an exemplary self-correcting amendment (2026-08-12) detailing live runtime probes on Copilot CLI that inverted severity assumptions (unresolvable pins safely fell back to default, whereas resolvable older pins silently overrode operator model flags on delegation).

## Context cost
20735 bytes, approximately 5180 tokens.
