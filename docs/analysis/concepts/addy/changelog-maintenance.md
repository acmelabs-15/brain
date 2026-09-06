---
package: addy
name: Changelog Maintenance
slug: changelog-maintenance
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Changelog Maintenance

## Definition — verbatim
> "For shipped features:" — skills/documentation-and-adrs/SKILL.md:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 231 | defined here | Heading for changelog management guidelines describing versioned Added, Fixed, and Changed sections. |

## Consumes
Completed features, bug fixes, pull request numbers, and release version numbers.

## Produces
An updated, chronological `CHANGELOG.md` file categorizing user-facing changes under release version headers.

## When applied
Applied when shipping new features, resolving defects, or modifying existing system behaviors.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Changelog Maintenance` ensures that every released version documents its delta in an organized, human-readable format, providing a clear record of changes and helping maintainers and consumers understand exactly what was added, fixed, or modified.
