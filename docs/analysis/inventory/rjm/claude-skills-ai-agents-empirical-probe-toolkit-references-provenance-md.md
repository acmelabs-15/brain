---
package: rjm
path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md
type: reference
bytes: 2881
unit: inv-rjm-83
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md

## Purpose — required, verbatim
> "Sources and re-verification one-liners for every load-bearing fact in `../SKILL.md`. Consult when auditing or refreshing the toolkit." — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:3

## Design intent — required
Provides an auditable provenance ledger and executable re-verification runbook for every factual claim, incident case study, and runtime contract cited in `ai-agents-empirical-probe-toolkit/SKILL.md`. By documenting specific historical sources in retrospectives, Serena memories, evaluation scripts, and failure modes alongside shell re-verification one-liners, it ensures contributors can re-prove each empirical finding directly against the repository tree and avoid regressions or version drift when external tool contracts change.

## Phase — required
cross-phase

## Inputs — required
- Working tree files and historical retrospectives under `.agents/retrospective/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:11, 13, 14, 15)
- Decision memories in `.serena/memories/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:12, 20)
- Evaluation harness scripts in `scripts/eval/` and scenario suites in `tests/evals/` (.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:16-17)
- Canonical mirror rules in `.claude/rules/canonical-source-mirror.md` and failure modes in `.agents/governance/FAILURE-MODES.md` (.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:18, 22)

## Outputs — required
none

## Invokes — required
- skill ../SKILL.md — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:3
- script scripts/eval/eval-prompt-change.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:16
- script scripts/eval/eval-agent-vs-baseline.py — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:16
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:18

## Invoked by — required
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:182

## Concepts named — required, verbatim
- `first-fix defects` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:11 — used here
- `Plugin-root env contract` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:12 — defined here | used here
- `Payload casing contract` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:13 — defined here | used here
- `last-5-PRs rule` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:14 — defined here | used here
- `Verbatim-quote rule` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:18 — defined here | used here
- `Reproduce-on-main rule` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:20 — defined here | used here
- `Runtime-contract exemplar` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:21 — defined here | used here
- `FM-9` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:22 — used here
- `FM-11` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:22 — used here
- `flakiness protocol` — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:24 — used here

## Structure
# Empirical Probe Toolkit: Provenance and Maintenance

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:24 warns that Copilot CLI version pins (1.0.57/1.0.58) are historically measured versions rather than guaranteed static contracts, requiring active re-verification if upstream CLI versions advance.

## Observations
- Exclusively references upstream repository paths (.agents/, .claude/, scripts/, build/) because its primary audience is internal repository contributors rather than downstream plugin consumers (issue #2050 vendor-portability comment at line 5).
- Context cost: 2881 bytes (~720 tokens).

## Context cost
2881 bytes (~720 tokens). Pure reference table that adds minimal context overhead when audited.
