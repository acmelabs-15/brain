---
package: addy
name: FYI
slug: fyi
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# FYI

## Definition — verbatim
> "| **FYI** | Informational only | No action needed — context for future reference |" — skills/code-review-and-quality/SKILL.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 187 | defined here | Prefix in review finding severity taxonomy denoting informational comments requiring no author action. |

## Consumes
Informational observations, context, or tips discovered by a reviewer that are relevant for future work.

## Produces
A tagged review comment that communicates context without blocking merge or requiring author changes.

## When applied
Step 4 (Categorize Findings) during code review when communicating context for future reference.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A review comment severity prefix used to share knowledge, future considerations, or peripheral context without burdening the author with non-essential changes or creating confusion about what is required for approval.
