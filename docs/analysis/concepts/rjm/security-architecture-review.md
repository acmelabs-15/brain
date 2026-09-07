---
package: rjm
name: security architecture review
slug: security-architecture-review
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security architecture review

## Definition — verbatim
(used, not defined)

> "Use for attack surface analysis, security architecture review, or when asking what can go wrong." — .claude/skills/threat-modeling/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 4 | used here | Named in skill frontmatter description as a primary use case for structured threat modeling. |

## Consumes
Architecture diagrams, component inventories, data flow descriptions, and trust boundary maps.

## Produces
STRIDE threat matrices, prioritized mitigations, and validated threat model documents.

## When applied
Applied during architectural design and planning when reviewing system design for security vulnerabilities.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`security architecture review` is a structured evaluation technique in `rjm` where system architectures, data flows, and trust boundaries are systematically analyzed for vulnerabilities prior to feature implementation.
