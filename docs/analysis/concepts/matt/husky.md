---
package: matt
name: Husky
slug: husky
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Husky

## Definition — verbatim
(used, not defined)
> "This creates `.husky/` dir and adds `prepare: \"husky\"` to package.json." — skills/misc/setup-pre-commit/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/setup-pre-commit/SKILL.md | 10 | used here | Named as a component of the pre-commit hook setup checklist. |
| skills/misc/setup-pre-commit/SKILL.md | 35 | defined here | Explains that initializing Husky creates the `.husky/` directory and configures the package.json prepare script. |

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
clean

## Design notes
Third-party Git hook management package and CLI tool used to trigger commit-time verification scripts; recorded as a name-only tool identifier rather than an engineering lifecycle concept.
