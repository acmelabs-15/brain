---
package: rjm
name: Quick Start
slug: quick-start
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/README.template.md, sha256: 2dfe13da1fa4d0635d07f6e73d358c70feca0d843c2166dec5eb9c9fbd8d9758}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quick Start

## Definition — verbatim
(used, not defined)

> "## Quick Start" — .claude/skills/codebase-documenter/assets/templates/README.template.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/README.template.md | 9 | defined here | Template section heading providing under-five-minute setup, installation, and run instructions for new contributors. |
| .claude/skills/research-and-incorporate/SKILL.md | 44 | defined here | Section heading documenting command syntax and minimal invocation example for research-and-incorporate. |

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
defects: doc-drift, missing-path

## Design notes
`Quick Start` is a recurring documentation section heading used in README templates and skill guides to present immediate setup and invocation instructions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
