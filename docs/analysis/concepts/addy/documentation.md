---
package: addy
name: documentation
slug: documentation
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# documentation

## Definition — verbatim
> "### Documentation" — references/definition-of-done.md:42
> "- [ ] Public interfaces, APIs, and user-facing behavior are documented" — references/definition-of-done.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/documentation-and-adrs.md | 5 | used here | Catalogs documentation as the primary domain of the documentation-and-adrs skill. |
| external/source-driven-development.md | 5 | used here | Stresses grounding implementation decisions in official vendor and framework documentation. |
| references/definition-of-done.md | 42 | defined here | Defines documentation requirements as a mandatory gate in the Definition of Done. |

## Consumes
Implemented features, public interfaces, APIs, and architectural decisions.

## Produces
README updates, API reference docs, ADRs, and guides written in timeless language.

## When applied
> "Public interfaces, APIs, and user-facing behavior are documented" — references/definition-of-done.md:43

## Sub-concepts
inline-documentation-standards, architecture-decision-records, api-docs

## Part of
definition-of-done

## Implementation status
clean

## Design notes
Written context describing system architecture, public APIs, and user-facing behavior in timeless language. In Addy's lifecycle, documentation is not an afterthought but a hard requirement in the Definition of Done and a source of ground truth during implementation.
