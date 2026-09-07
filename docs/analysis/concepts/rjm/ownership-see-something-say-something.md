---
package: rjm
name: Ownership: See Something, Say Something
slug: ownership-see-something-say-something
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ownership: See Something, Say Something

## Definition — verbatim
(used, not defined)

> "This is the `.claude/rules/voice.md` "Ownership: See Something, Say Something" discipline applied to provenance: a flag with a hypothesis, not a silent pass." — .claude/skills/ai-agents-external-claims/SKILL.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 79 | references | Explains how the voice.md rule applies to provenance by requiring explicit flagging of authorial stakes. |

## Consumes
Material authorial biases, financial stakes, or unconfirmed assumptions in external sources.

## Produces
Explicit flags, caveats, and stated hypotheses in repository artifacts rather than silent acceptance.

## When applied
When documenting external claims from stake-holding sources or controversial studies.

## Sub-concepts
stake-holding-author

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
An adaptation of the repository's voice and ownership discipline to external provenance. When citing claims where the author has a material stake, contributors must explicitly note the bias alongside the finding rather than silently passing the claim through to readers.
