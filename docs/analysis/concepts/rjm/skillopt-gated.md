---
package: rjm
name: SkillOpt-gated
slug: skillopt-gated
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillOpt-gated

## Definition — verbatim
(used, not defined)

> "Two merged commits already ran this loop and said so in their messages, marked `(SkillOpt-gated)`, #3056 and #3057." — .agents/architecture/ADR-087-held-out-validated-improvement.md:72-73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 73 | used here | Commit message tag marking historical skill optimization runs evaluated through an external harness. |

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
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A commit message annotation and tag marking historical skill optimization runs executed via an external harness, not an operational lifecycle concept.
