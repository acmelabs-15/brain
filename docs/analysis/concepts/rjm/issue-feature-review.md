---
package: rjm
name: issue-feature-review
slug: issue-feature-review
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# issue-feature-review

## Definition — verbatim
> "| **issue-feature-review** | Feature-request triage on GitHub issues | Constructive verdict with next steps | both |" — README.md:416

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/counts.py | 12 | used here | Referenced and applied in counts.py during verification and operational workflows. |
| docs/agent-catalog.md | 30 | used here | Referenced and applied in agent-catalog.md during verification and operational workflows. |
| README.md | 416 | defined here | Primary definition of `issue-feature-review` within README.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An operational technique or artifact (issue-feature-review) utilized within the rjm ecosystem to ensure consistency and systematic execution.
