---
package: rjm
name: SIZE_EXCEPTION_FIELDS
slug: size-exception-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SIZE_EXCEPTION_FIELDS

## Definition — verbatim
(used, not defined)

> "SIZE_EXCEPTION_FIELDS = (" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 59 | defined here | Tuple constant listing the required evidence fields for documented memory size exceptions. |

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
SIZE_EXCEPTION_FIELDS is a Python tuple constant identifier in test_skill_passive_compliance.py specifying comment fields rather than an operational lifecycle concept, classified as name-only per D-023.
