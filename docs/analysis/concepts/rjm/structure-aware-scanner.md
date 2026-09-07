---
package: rjm
name: structure-aware scanner
slug: structure-aware-scanner
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

# structure-aware scanner

## Definition — verbatim
> "structure-aware scanner, which review then broke repeatedly, always returning a" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 21 | used here | Second-generation parser replacing regex, which repeatedly broke during adversarial review. |

## Consumes
Model outputs containing embedded JSON blocks or bracketed structures.

## Produces
Parsed JSON tokens and candidate verdict dictionaries.

## When applied
Applied in parser rounds attempting grammar-aware scanning of mixed text and JSON.

## Sub-concepts
none

## Part of
rule-audit-parser-forensics

## Implementation status
defects: doc-drift

## Design notes
A parser pattern that uses syntax awareness and bracket matching to isolate candidate JSON objects from surrounding narrative text, though still vulnerable to selection errors.
