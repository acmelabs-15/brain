---
package: rjm
name: Rule Audit Parser Forensics
slug: rule-audit-parser-forensics
kind: reference
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

# Rule Audit Parser Forensics

## Definition — verbatim
> "# Rule Audit Parser Forensics: many rounds against one judge parser" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 1 | defined here | Title and subject of reference document detailing 20+ rounds of parser defects. |

## Consumes
Evaluation run transcripts, raw model outputs, recovered judge payloads.

## Produces
Forensic analysis of parsing defects, edge cases, and parser design rules.

## When applied
Read before implementing parsers for LLM-generated structured data.

## Sub-concepts
exactly-one-fence-rule, strict-parse

## Part of
context-optimizer

## Implementation status
defects: doc-drift

## Design notes
A detailed reference document capturing over twenty iterations of adversarial review against an LLM judge parser, demonstrating why handwritten regex parsers fail and why strict structured output is required.
