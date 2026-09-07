---
package: rjm
name: test_a_verdict_hidden_in_an_object_key_is_two_verdicts
slug: test-a-verdict-hidden-in-an-object-key-is-two-verdicts
kind: name-only
package_phase: none
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

# test_a_verdict_hidden_in_an_object_key_is_two_verdicts

## Definition — verbatim
(used, not defined)

> "`test_a_verdict_hidden_in_an_object_key_is_two_verdicts` fails without the" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 251 | used here | Cited in parser forensics as a test case that fails when object-key verdict parsing is unpatched. |

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
test_a_verdict_hidden_in_an_object_key_is_two_verdicts is an internal regression test case identifier cited in rule audit parser forensics documentation to demonstrate parser boundary handling rather than an operational lifecycle concept, classified as name-only per D-023.
