---
package: rjm
name: Why-Not-What Comments
slug: why-not-what-comments
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Why-Not-What Comments

## Definition — verbatim
> "Comments inside a function explain motivation, not mechanics." — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 73 | defined here | Section illustrating good and bad inline commenting practices with concrete examples. |

## Consumes
Code implementations featuring non-obvious workarounds, business logic constraints, or edge-case handling.

## Produces
Explanatory inline comments justifying the rationale behind unusual or non-obvious code decisions.

## When applied
Applied when writing internal logic comments that explain non-obvious trade-offs or historical fixes.

## Sub-concepts
motivation-vs-mechanics

## Part of
code-comment-standards

## Implementation status
clean

## Design notes
Why-Not-What Comments establishes the core rule that inline comments should document rationale, business constraints, and non-obvious trade-offs rather than paraphrasing code operations. Comments that merely restate what code syntax does create maintenance drag and noise, whereas comments explaining why a particular workaround or algorithm was chosen preserve vital context for future engineers.
