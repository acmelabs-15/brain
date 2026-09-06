---
package: rjm
path: .claude/skills/context-optimizer/references/rule-audit-evidence.md
type: reference
bytes: 8095
unit: inv-rjm-105
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/rule-audit-evidence.md

## Purpose — required, verbatim
> "Read this before citing a number from the procedure document, and before writing a new instrument that has to parse judge output." — .claude/skills/context-optimizer/references/rule-audit-evidence.md:8-9

## Design intent — required
Documents the empirical forensics behind the published evaluation table for the 2026-07-29 `unified-software-engineering` run in `rule-audit-procedure.md`. It exposes that 24 of 144 Opus judge samples (1 in 6 across 17 distinct cells) were silently truncated and failed to parse due to a 200-character truncation ceiling in artifact storage combined with unescaped inline quotes inside JSON `reasoning` blocks (whereas Sol judge samples experienced zero failures). It demonstrates how post-hoc extraction of complete payloads from CLI session transcripts (`recovered-judge-payloads.json`) salvaged all 24 missing verdicts, resulting in minor cell score shifts (e.g. moving the `fx-opus5` baseline from 3.83 to 3.89) while leaving the core sign-test result unchanged (7 positive, 1 negative, p = 0.0703125). Without this document, evaluators would cite published cell metrics without understanding sample-loss confounds, parser vulnerabilities, or the validity limits of post-hoc recovery.

## Phase — required
cross-phase

## Inputs — required
- Raw eval artifacts in `.agents/analysis/eval-artifacts/2026-07-29-unified-software-engineering/` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:11
- Recovered judge payloads from Copilot CLI session transcripts (`recovered-judge-payloads.json`) — .claude/skills/context-optimizer/references/rule-audit-evidence.md:51-53
- Companion procedure document (`rule-audit-procedure.md`) — .claude/skills/context-optimizer/references/rule-audit-evidence.md:3

## Outputs — required
none

## Invokes — required
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-evidence.md:3
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-evidence.md:118

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:121
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:375
- reference rule-audit-instrument.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:160
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:3

## Concepts named — required, verbatim
- `total_judge_failures` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:19 — used here
- `fx-opus5` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:24 — used here
- `var-opus-1` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:24 — used here
- `var-opus-2` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:25 — used here
- `var-opus-3` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:25 — used here
- `delta-full` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:26 — used here
- `recovered prefixes` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:39 — used here
- `truncation ceiling` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:50 — defined here
- `recovered-judge-payloads.json` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:51 — used here
- `duplicate-name guard` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:84 — used here
- `judge_salvaged` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:92 — defined here
- `pooled description delta` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:94-95 — used here
- `sign test` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:104 — used here
- `post-hoc recovery` — .claude/skills/context-optimizer/references/rule-audit-evidence.md:109 — defined here

## Structure
- # Rule Audit Evidence: the 2026-07-29 unified-software-engineering run
- ## The judge discarded Opus samples unevenly, and it was recoverable
- ## The instrument that produced this table was reviewed across many rounds

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates a severe asymmetry in LLM judge reliability: Opus judge samples failed on 24 of 144 runs due to generating unescaped inline quotes inside JSON `reasoning` values (4.7x higher quotation attempt rate, 86% failure rate to escape), while Sol had 0 failures across 144 samples.
- Highlights the hidden risk of naive error aggregation: the `total_judge_failures` field counted affected cells rather than failed judge samples, disguising that 17 published cells were evaluated with reduced sample counts (n=1 or n=2 instead of n=3).
- Validates the robustness of non-parametric sign testing over parametric mean aggregation: while recovering the 24 discarded samples shifted several individual cell scores, the sign count across runs remained identical at 7 positive to 1 negative (p = 0.0703125).

## Context cost
8095 bytes (123 lines), approximately 2000 tokens. Transitive context when including `rule-audit-procedure.md` (~36.5KB) and `rule-audit-parser-forensics.md` (~31.2KB) reaches ~75KB (~18800 tokens).
