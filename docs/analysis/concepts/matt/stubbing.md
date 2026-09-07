---
package: matt
name: stubbing
slug: stubbing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stubbing

## Definition — verbatim
> "When stubbing, default to `explainer/` unless the plan specifies otherwise." — skills/misc/scaffold-exercises/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 25 | defined here | Rule for creating placeholder exercise structures, defaulting to explainer subfolders. |

## Consumes
Course curriculum plan.

## Produces
Minimal skeleton directories with title-and-description stub readmes that satisfy linter checks.

## When applied
When scaffolding a new course outline before drafting actual curriculum content.

## Sub-concepts
none

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
A progressive authoring technique that scaffolds a full course skeleton with minimal valid placeholder files. Stubbing allows course designers to validate overall structure with linters before investing time in authoring detailed problem and solution content.
