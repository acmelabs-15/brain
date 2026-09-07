---
package: rjm
name: General
slug: general
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# General

## Definition — verbatim
(used, not defined)

> "GENERAL = \"general\"" — .claude/skills/skillforge/scripts/triage_skill_request.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 105 | defined here | Enumerated as the default fallback `Error.Type` in the standard skill output contract. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 77 | defined here | Defined as the generic fallback category constant in `InputCategory` for unclassified user requests. |

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
defects: missing-path, doc-drift, script-bug

## Design notes
A fallback identifier used as a default error classification in skill output envelopes and as an unclassified input category in request triage, not an independent lifecycle concept.
