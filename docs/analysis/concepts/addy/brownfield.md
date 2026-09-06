---
package: addy
name: Brownfield
slug: brownfield
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Brownfield

## Definition — verbatim
> "| Signal | Greenfield | Brownfield |" — docs/adoption-guide.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 11 | defines | Categorizes established codebases requiring an incremental, verification-first adoption strategy. |

## Consumes
Established codebase with legacy behavior, uneven test coverage, and undocumented conventions.

## Produces
Staged four-phase adoption roadmap prioritizing safety nets and characterization tests before code changes.

## When applied
Selected when codebase age is months to years and unverified modifications risk breaking production behavior.

## Sub-concepts
incremental-verification-first, characterization-tests, two-speed-adoption

## Part of
adoption-guide

## Implementation status
clean

## Design notes
Brownfield adoption addresses the inverted risk profile of deploying AI agents in established software systems. Because the greatest hazard in legacy systems is inadvertently changing undocumented behavior, brownfield adoption sequences rollout by first deploying read-only and protective skills, locking down behavior with characterization tests, and only applying the full lifecycle to new features.
