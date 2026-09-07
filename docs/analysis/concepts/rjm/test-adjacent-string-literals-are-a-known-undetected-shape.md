---
package: rjm
name: test_adjacent_string_literals_are_a_known_undetected_shape
slug: test-adjacent-string-literals-are-a-known-undetected-shape
kind: name-only
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

# test_adjacent_string_literals_are_a_known_undetected_shape

## Definition — verbatim
(used, not defined)

> "`test_adjacent_string_literals_are_a_known_undetected_shape`. The encoding" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 236 | used here | Test function documenting the known undetected shape of adjacent string literals. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`test_adjacent_string_literals_are_a_known_undetected_shape` is a regression test function documenting the parser limitation around concatenated adjacent string literals, classified as kind: name-only per D-023.
