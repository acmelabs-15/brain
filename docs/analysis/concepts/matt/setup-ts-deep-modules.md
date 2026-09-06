---
package: matt
name: setup-ts-deep-modules
slug: setup-ts-deep-modules
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# setup-ts-deep-modules

## Definition — verbatim
(used, not defined)

> "**[setup-ts-deep-modules](./setup-ts-deep-modules/SKILL.md)**: Wire dependency-cruiser into a TypeScript repo so each package is a deep module: implementation hidden in subfolders, reachable only through its entry-point files, tests exercising it through those. User-invoked." — skills/in-progress/README.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 52 | used here | Mentioned as a beta-channel skill laying down a package convention for deep modules. |
| skills/in-progress/README.md | 16 | used here | Listed in the in-progress skills catalog with a summary of its dependency-cruiser setup. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 2 | defined here | Frontmatter name identifying the user-invoked setup skill. |

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
defects: missing-path (beta skill with no documentation page or pre-packaged lint rules)

## Design notes
setup-ts-deep-modules is a specific skill identifier in the in-progress catalog rather than a foundational lifecycle concept.
