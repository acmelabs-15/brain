---
package: rjm
name: Success Pattern
slug: success-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Success Pattern

## Definition — verbatim
> "### Example 2: Success Pattern" — .claude/skills/reflect/references/decision-tree-and-examples.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 66 | defined here | Worked example demonstrating extraction of MEDIUM-confidence preferences from user praise and acceptance. |

## Consumes
User praise, explicit approval ("perfect", "exactly"), or unmodified acceptance of generated output.

## Produces
MEDIUM-confidence preference guidelines captured for skill observation memory sidecars.

## When applied
When user feedback or actions confirm successful implementation alignment during conversational reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A learning pattern that detects explicit user praise and unedited acceptance as positive reinforcement signals, capturing desirable implementation styles and patterns into persistent memory sidecars.
