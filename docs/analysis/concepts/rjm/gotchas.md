---
package: rjm
name: Gotchas
slug: gotchas
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gotchas

## Definition — verbatim
(used, not defined)

> "## Gotchas (non-obvious, save cycles)" — .github/copilot-instructions.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/copilot-instructions.md | 102 | defined here | Section heading pointing agents to `.agents/governance/GOTCHAS.md` for non-obvious traps and common failure modes. |

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
defects: missing-path

## Design notes
Gotchas is a section heading in copilot-instructions.md referencing governance documentation rather than an independent lifecycle concept.
