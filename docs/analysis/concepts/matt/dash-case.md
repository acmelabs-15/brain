---
package: matt
name: dash-case
slug: dash-case
kind: pattern
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

# dash-case

## Definition — verbatim
> "- Names are dash-case (lowercase, hyphens)" — skills/misc/scaffold-exercises/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 15 | defined here | Defines the required directory naming convention (lowercase, hyphens) for sections and exercises. |

## Consumes
Human-readable section and exercise titles.

## Produces
Normalized directory and file names formatted with lowercase letters and hyphens.

## When applied
Applied when naming sections, exercises, and files during course scaffolding.

## Sub-concepts
none

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
A naming convention pattern requiring lowercase alphanumeric strings separated by hyphens (kebab-case). It prevents cross-platform filesystem casing issues and ensures consistency across CLI tools and web URLs.
