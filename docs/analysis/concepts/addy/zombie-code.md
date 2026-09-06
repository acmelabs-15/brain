---
package: addy
name: Zombie Code
slug: zombie-code
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Zombie Code

## Definition — verbatim
> "## Zombie Code" — skills/deprecation-and-migration/SKILL.md:192
> "Zombie code is code that nobody owns but everybody depends on. It's not actively maintained, has no clear owner, and accumulates security vulnerabilities and compatibility issues." — skills/deprecation-and-migration/SKILL.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 192 | defines | Section heading and definition of unmaintained legacy code accumulating organizational debt. |

## Consumes
Codebase modules with orphaned ownership, stale dependencies, failing unowned tests, or unaddressed vulnerabilities.

## Produces
Actionable decision to either explicitly assign maintainers or execute a formal deprecation and removal plan.

## When applied
Applied during code health audits, dependency reviews, or architectural refactoring.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
An architectural anti-pattern describing abandoned software modules that have active consumers but lack maintainership. Zombie code silently accumulates unpatched security vulnerabilities and technical debt, requiring teams to either formally reassign ownership or deprecate and eliminate it.
