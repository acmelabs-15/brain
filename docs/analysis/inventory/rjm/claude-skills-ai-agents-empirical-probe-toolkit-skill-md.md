---
package: rjm
path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md
type: skill
bytes: 14766
unit: inv-rjm-83
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md

## Purpose — required, verbatim
> "This skill is the method library for replacing assumption with measurement. Every recipe exists because an assumption shipped here and became an incident. The house rule, from the #2290 payload-format incident: the cost of a probe is 15 minutes; the cost of assumption is a P0 (`.serena/memories/copilot-hooks-observations.md`)." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:10

## Design intent — required
Provides a standardized repository method library for replacing unverified assumptions with empirical measurement and negative-control testing across six critical problem domains: undocumented external runtime contracts, guard and detector threshold calibration, behavioral prompt evaluations, documentation accuracy audits, CI failure triage on PR branches, and generated artifact test design. It codifies lessons from major repository outages (including customer-wedge incidents and inert detectors) into prescriptive, step-by-step procedures with clear invalidation criteria so that contributors and agents never ship code based on analogies, uncalibrated thresholds, or tests that cannot fail.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases: `probe the runtime contract`, `calibrate this guard`, `prove it empirically`, `add a negative control`, `docs versus reality audit` (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:19-23)
- Tool version outputs from commands like `copilot --version` and `claude --version` (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:47)
- Recent PR history: last ~5 merged real PRs for detector calibration (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:64)
- Prompt definitions, agent files, and evaluation scenario suites under `tests/evals/` and `evals/` (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:90-101)
- Canonical documentation, rule files (`.claude/rules/canonical-source-mirror.md`), and failure mode catalogs (`.agents/governance/FAILURE-MODES.md`) (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:112, 117, 142)

## Outputs — required
- Disposable probe artifacts (environment/stdin dumper hooks and plugins) (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:48)
- Decision memories documenting empirical results under `.serena/memories/decision-<slug>.md` (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:51)
- Runtime-contract test suites with negative controls (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:52, 148-149)
- Calibration tables documenting metric performance across merged PRs (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:66)
- Behavioral evaluation results and pass-rate deltas comparing actuals against predictions (.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:85, 104)

## Invokes — required
- skill agent-harness-reference — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:29
- skill benchmark-models — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:31
- skill doc-accuracy — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:32
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:33
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:34
- reference references/worked-examples.md — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:38
- script scripts/eval/eval-prompt-change.py — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:89
- script scripts/eval/eval-agent-vs-baseline.py — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:99
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:133
- reference references/provenance.md — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:182

## Invoked by — required
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:25
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:28
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:113
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:69

## Concepts named — required, verbatim
- `Probe` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:14 — defined here | used here
- `Negative control` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:15 — defined here | used here
- `Runtime-contract probe` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:29 — defined here | used here
- `Guard/threshold calibration` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:30 — defined here | used here
- `Behavioral A/B via eval harness` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:31 — defined here | used here
- `Docs-vs-reality audit` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:32 — defined here | used here
- `Reproduce-on-main discriminator` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:33 — defined here | used here
- `Negative-control test design` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:34 — defined here | used here
- `decision memory` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:51 — defined here | used here
- `last 5 real PRs` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:60 — defined here | used here
- `calibration table` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:66 — defined here | used here
- `acceptance gate` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:81 — used here
- `security-critical` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:95 — used here
- `flakiness protocol` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:108 — used here
- `FM-9` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:112 — used here
- `confident-incorrectness` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:112 — used here
- `FM-11` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:142 — used here
- `self-referential` — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:146 — defined here | used here

## Structure
# AI Agents Empirical Probe Toolkit
## Triggers
## Recipe Selector
## Process
### Recipe 1: Runtime-Contract Probe
### Recipe 2: Guard and Threshold Calibration
### Recipe 3: Behavioral A/B via Eval Harness
### Recipe 4: Docs-vs-Reality Audit
### Recipe 5: Reproduce-on-Main Discriminator
### Recipe 6: Negative-Control Test Design
## Anti-Patterns
## Verification
## Provenance and Maintenance

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:70-71 notes that the guard-maturity skill and its `EVENT=` telemetry consumers were retired under ADR-084 (issue #5154), leaving long-term post-ship telemetry tracking unprovided by shared infrastructure.

## Observations
- Emphasizes the fundamental methodological principle that predicting numerical results prior to running an experiment is mandatory ("If you cannot predict, you do not yet have a hypothesis, you have a hope").
- Mandates negative control tests for all generated artifact checks: asserts that a test asserting output copied from the generator is self-referential and provides no assurance of runtime correctness.
- Context cost: 14766 bytes (~3690 tokens). With references `references/provenance.md` (2881 bytes) and `references/worked-examples.md` (5798 bytes), total skill bundle context cost is 23445 bytes (~5860 tokens).

## Context cost
14766 bytes (~3690 tokens) for SKILL.md. Loading references adds 8679 bytes (~2170 tokens) for a total bundle size of 23445 bytes (~5860 tokens).
