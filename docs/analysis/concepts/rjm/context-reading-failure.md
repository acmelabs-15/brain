---
package: rjm
name: Context Reading Failure
slug: context-reading-failure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context Reading Failure

## Definition — verbatim
(used, not defined)

> "FM-1 (Context Reading Failure) recorded 95.8% session-start non-compliance in a sampled period (`.agents/governance/FAILURE-MODES.md:44`)." — .claude/skills/ai-agents-research-frontier/SKILL.md:112-114

## Also called — verbatim
`FM-1` — .claude/skills/ai-agents-research-frontier/SKILL.md:112

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 112 | used here | Cited as the measured failure baseline demonstrating high session-start non-compliance of advisory rules. |

## Consumes
Session start context, prompt declarations, and session logs under `.agents/sessions/`.

## Produces
Compliance failure measurements and scenario evaluations comparing advisory guidance with automated enforcement.

## When applied
When evaluating governance mechanisms and measuring whether prompt loading changes improve compliance over baseline advisory instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Context Reading Failure (FM-1) captures the empirical observation in rjm that LLM agents consistently fail to read or adhere to advisory rules loaded in context, measuring a 95.8% non-compliance rate at session start. It serves as the motivating empirical baseline across the repository for establishing verification-based governance, hard gates, and inspectable evidence rather than relying on natural-language instruction compliance.
