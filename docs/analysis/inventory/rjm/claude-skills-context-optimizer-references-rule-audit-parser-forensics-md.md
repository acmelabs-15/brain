---
package: rjm
path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md
type: reference
bytes: 31205
unit: inv-rjm-106
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md

## Purpose — required, verbatim
> "This document is the repair history of the parser that produced those numbers." — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:4-5

> "Read it before writing an instrument that parses judge output." — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:7

## Design intent — required
Detailed forensic and adversarial review history of the LLM-as-a-judge score parser used in the context-optimizer always-on rule audit evaluations. It chronicles more than twenty rounds of adversarial review where handwritten regex, structure-aware, and salvage parsers repeatedly introduced subtle defects (such as desynchronization on nested quotes, premature fence stripping, greedy regex consumption, recursion limits, double-unescaping loopholes, and flawed equality comparisons). Without this forensic record, future developers and tool authors would underestimate the difficulty of parsing non-deterministic LLM judge outputs, repeating the fatal mistake of handwritten candidate selection and heuristic salvage instead of provider-enforced structured schemas and strict, auditable failure boundaries.

## Phase — required
cross-phase

## Inputs — required
- Raw evaluation runs and session artifacts: `.agents/analysis/eval-artifacts/2026-07-29-unified-software-engineering/`, session transcripts in Copilot CLI (3366 sessions, 465 mentioning `activation_score`, 474 candidate messages, 466 distinct payload texts, 448 recovered prompts).
- Archived benchmark files: `recovered-judge-payloads.json` (288 payloads: 264 successes and 24 failure prefixes).
- Test suites and test functions: `test_adjacent_string_literals_are_a_known_undetected_shape`, `test_a_verdict_hidden_in_an_object_key_is_two_verdicts`.
- Issues and tracking references: issue #3988 (arguments against handwriting parsers), issue #3998 (archive gap storing no raw payload), issue #3999 (recovery divergence between live and replay helpers), issue #2050 (vendor portability declaration).

## Outputs — required
none

## Invokes — required
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:3
- reference rule-audit-measurement-discipline.md — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:484

## Invoked by — required
- skill .claude/skills/context-optimizer/SKILL.md — .claude/skills/context-optimizer/SKILL.md:122
- reference .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:3

## Concepts named — required, verbatim
- `Rule Audit Parser Forensics` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:1 — defined here
- `adversarial review` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:13 — used here
- `regex extractor` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:20 — used here
- `structure-aware scanner` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:21 — used here
- `judge_salvaged` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:24 — used here
- `duplicate-name guard` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:36 — used here
- `strict-parse` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:78 — used here
- `exactly-one-fence rule` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:94 — defined here
- `_reject_duplicate_keys` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:126 — used here
- `_names_a_score_field_twice` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:130 — used here
- `_recover_verdict` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:178 — used here
- `_salvage_scores` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:178 — used here
- `test_every_published_cell_still_scores_to_its_archived_triple` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:204 — used here
- `test_adjacent_string_literals_are_a_known_undetected_shape` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:236 — used here
- `structured output` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:241 — used here
- `test_a_verdict_hidden_in_an_object_key_is_two_verdicts` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:251 — used here
- `eval_one_scenario` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:386 — used here

## Structure
- `# Rule Audit Parser Forensics: many rounds against one judge parser` — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:1
The document contains no markdown subheadings (no `##` sections); it is structured chronologically as a continuous forensic narrative tracing adversarial review rounds 9 through 23, with thematic transitions examining selection defects, fence boundary matching, nested JSON structures, escape layer peeling, and denominator definition discipline.

## Scripts
none

## Defects — required
- doc-drift · .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:204 · Cites `test_every_published_cell_still_scores_to_its_archived_triple` as a standing test replaying recovered judge payloads on every run, but no test function with this name exists in the test suite.

## Observations
- Documents the fundamental architectural insight: "the defect is selection, not location" (.claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:43) — adding heuristic disqualifiers to a search that still chooses among candidate verdict objects repeatedly introduces new bypasses; eliminating selection entirely (anchoring at offset 0, strict single fence unwrapping, refusing duplicate score key occurrences) is the only robust posture.
- Highlights the severe asymmetry between error modes: over-eager refusals increment `judge_failed` visibly, while over-eager acceptances silently admit fabricated scores into published medians without audit markers.
- Chronicles round 15 and 16 recovery of 288 raw payloads from Copilot CLI session transcripts, demonstrating how input-based correlation (`response_preview` matching `**Actual response**`) broke circularity from score-based correlation.
- Shows how escape layer peeling must process backslashes (`\\`) before unicode escapes (`\uXXXX`) to prevent double-serialization bypasses.
- Demonstrates why handcrafted regex parsers for LLM outputs are an anti-pattern, concluding that provider-enforced structured output is the only durable solution.

## Context cost
31205 bytes, ~7,800 tokens.
