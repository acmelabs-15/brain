---
package: rjm
name: regex extractor
slug: regex-extractor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# regex extractor

## Definition — verbatim
> "direction, not the count. The regex extractor was replaced with a" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 20 | used here | Legacy parser mechanism that was replaced due to persistent fragility. |

## Consumes
Raw text responses from model evaluations.

## Produces
Extracted numeric values matching regular expression patterns.

## When applied
Used in early iterations of the evaluation harness before being deprecated for structure-aware parsing.

## Sub-concepts
none

## Part of
rule-audit-parser-forensics

## Implementation status
defects: doc-drift

## Design notes
An early, brittle parsing approach relying on regular expressions to extract score values from model prose, later replaced due to high vulnerability to formatting shifts.
