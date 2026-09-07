---
package: rjm
name: Dummy alternatives
slug: dummy-alternatives
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dummy alternatives

## Definition — verbatim
> "| Dummy alternatives | Fake options to make preferred choice shine | Present genuine alternatives with honest pros/cons |" — .claude/skills/adr-generator/SKILL.md:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 207 | used here | Listed in Anti-Patterns table as fake options fabricated to make the author's preferred choice appear superior. |

## Consumes
Architectural decision options and candidate evaluations.

## Produces
Identification and rejection of disingenuous or straw-man alternatives during ADR authoring.

## When applied
Evaluated during Phase G1/G3 authoring and Phase G4 validation.

## Sub-concepts
none

## Part of
ad-quality-frameworks

## Implementation status
clean

## Design notes
An architectural decision anti-pattern where authors include obviously flawed or synthetic options solely to make their preferred choice appear compelling by comparison. The ADR generator explicitly prohibits dummy alternatives, mandating that all listed options represent genuine, viable approaches with balanced pros and cons.
