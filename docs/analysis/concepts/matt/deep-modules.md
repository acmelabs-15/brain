---
package: matt
name: deep modules
slug: deep-modules
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deep modules

## Definition — verbatim
> "Design **deep modules**: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface." — skills/engineering/codebase-design/SKILL.md:8

## Also called — verbatim
> "Deep module" — skills/engineering/codebase-design/SKILL.md:32

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 211 | used here | Catalog summary describing codebase-design as shared discipline for designing deep modules |
| skills/engineering/codebase-design/SKILL.md | 8 | defined here | Core definition and design directive establishing deep modules as high behavior behind small interfaces |

## Consumes
Module interface specifications, functional requirements, and candidate seam locations.

## Produces
Cohesive software components that hide significant algorithmic complexity behind clean, minimal caller interfaces.

## When applied
Whenever modules are designed, interfaces are established, or existing codebases are surveyed for deepening opportunities.

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
Adopted from John Ousterhout's philosophy and refined in Matt Pocock's engineering framework, deep modules maximize leverage for callers and locality for maintainers. A deep module provides substantial behavior and hides internal complexity behind a compact interface placed at an intentional seam, making the code easier to navigate for AI agents and straightforward to test.
