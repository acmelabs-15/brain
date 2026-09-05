---
package: rjm
path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md
type: reference
bytes: 5798
unit: inv-rjm-83
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md

## Purpose — required, verbatim
> "The war stories behind each recipe in `../SKILL.md`. Each incident is why the recipe exists. Consult when you want the concrete repo history; the operative When-to-use, Steps, and What-invalidates stay inline in SKILL.md." — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:3

## Design intent — required
Documents concrete historical post-mortems and repository incidents that motivated each empirical probe recipe in `ai-agents-empirical-probe-toolkit/SKILL.md`. By grounding abstract methodology in specific painful repository events (such as the 33-day customer outage from Copilot CLI hook cwd misinterpretation in PR #2205, payload casing bugs in issue #2290, impossible rework thresholds in PR #1989, guard inefficacy in PR #1887, dead PowerShell commands in CONTRIBUTING.md, and CI misattribution in PR #1361), it provides engineers with undeniable evidence of why assumptions fail and why empirical measurement with negative controls is strictly necessary.

## Phase — required
cross-phase

## Inputs — required
- Historical incident retrospectives in `.agents/retrospective/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:9, 11, 15, 17)
- Architectural memories and decisions in `.serena/memories/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:9, 31)
- Agent scenario files in `tests/evals/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:21)
- Python build and validation scripts (.claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:25, 27, 35)

## Outputs — required
none

## Invokes — required
- skill ../SKILL.md — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:3
- script scripts/validation/validate_hook_anchoring.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:9
- script build/generate_agents.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:25
- script build/scripts/build_all.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:25
- script scripts/validate_session_json.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:27

## Invoked by — required
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:38

## Concepts named — required, verbatim
- `Runtime-Contract Probe` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:7 — defined here | used here
- `self-referential test` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:9 — defined here | used here
- `Guard and Threshold Calibration` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:13 — defined here | used here
- `Phase 6 evidence audit` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:17 — used here
- `Behavioral A/B via Eval Harness` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:19 — defined here | used here
- `Docs-vs-Reality Audit` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:23 — defined here | used here
- `Reproduce-on-Main Discriminator` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:29 — defined here | used here
- `Negative-Control Test Design` — .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:33 — defined here | used here

## Structure
# Empirical Probe Toolkit: Worked Examples
## Recipe 1: Runtime-Contract Probe
## Recipe 2: Guard and Threshold Calibration
## Recipe 3: Behavioral A/B via Eval Harness
## Recipe 4: Docs-vs-Reality Audit
## Recipe 5: Reproduce-on-Main Discriminator
## Recipe 6: Negative-Control Test Design

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents the critical empirical finding from issue #2290 that probes only verify dimensions they explicitly measure: capturing env vars and cwd without inspecting stdin resulted in payload casing bugs slipping through.
- Records that PR #1887 required 69 commits and 254 review conversations to build guards that failed to prevent any of the PR's own 35 fix commits, proving that calibration against real historical data must occur before building complex guard infrastructure.
- Context cost: 5798 bytes (~1450 tokens).

## Context cost
5798 bytes (~1450 tokens). Reference file loaded for in-depth understanding of probe rationale.
