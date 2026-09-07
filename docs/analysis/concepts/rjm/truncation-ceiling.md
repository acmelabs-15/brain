---
package: rjm
name: truncation ceiling
slug: truncation-ceiling
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# truncation ceiling

## Definition — verbatim
> "judge output and nothing more; all 24 are exactly 200, the truncation ceiling." — .claude/skills/context-optimizer/references/rule-audit-evidence.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 50 | defined here | Defines the 200-character storage limit in run artifacts that truncated judge outputs and caused Unterminated string parser errors. |

## Consumes
Raw LLM judge response strings generated during automated evaluation.

## Produces
Truncated 200-character output prefixes stored in evaluation run artifact JSON files.

## When applied
Applied by artifact storage routines when persisting judge responses for evaluation runs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The `truncation ceiling` was a 200-character truncation threshold applied to stored judge outputs in rjm's evaluation harness. It created an empirical confound by chopping off JSON closures, misleading early forensic analysis into diagnosing `Unterminated string` errors instead of the true underlying unescaped quotation defects in model reasoning blocks.
