---
package: matt
name: dependency-cruiser
slug: dependency-cruiser
kind: name-only
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dependency-cruiser

## Definition — verbatim
(used, not defined)
> "Wire dependency-cruiser into a TypeScript repo so each package is a deep module: implementation hidden in subfolders, reachable only through its entry-point files, tests exercising it through those." — skills/in-progress/README.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/README.md | 16 | used here | Mentions dependency-cruiser as the tool configured to enforce deep module boundaries in TypeScript repos. |

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
An external npm package and static analysis tool used by setup-ts-deep-modules to enforce module encapsulation boundaries, representing a third-party software utility rather than a software development lifecycle concept.
