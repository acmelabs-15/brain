---
package: addy
name: External
slug: external
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# External

## Definition — verbatim
> "- **External** — axe-core encodes WCAG, `osv-scanner` reads a vulnerability database, Lighthouse measures a real browser. The agent can't argue with these." — skills/constraint-driven-development/SKILL.md:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 220 | defined here | Classifies checks backed by independent external databases or real browser engines |

## Consumes
External standards, vulnerability databases, or real browser runtime environments.

## Produces
Non-circular validation verdicts that cannot be bypassed by artificial mock implementations.

## When applied
Evaluated during constraint design to ensure at least one external verification check is present in CONSTRAINTS.md.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The highest-confidence category of constraint checks in constraint-driven development. External checks rely on third-party authorities (e.g. osv-scanner, axe-core, Lighthouse) rather than project-internal test suites, ensuring that autonomous agents cannot make checks pass by writing fake or circular test logic.
