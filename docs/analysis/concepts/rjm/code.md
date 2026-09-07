---
package: rjm
name: Code
slug: code
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code

## Definition — verbatim
> "| Code | Python, scripts, tests, libs | Full QA evidence per `.agents/governance/TESTING-RIGOR.md`; see `ai-agents-validation-and-qa` |" — .claude/skills/ai-agents-change-control/SKILL.md:34

## Also called — verbatim
> "| CODE | `*.cs`, `*.ts`, `*.js`, `*.py` | Build impact only |" — .claude/skills/review/references/devops.md:53

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 34 | defined here | Classification table row defining code changes and requiring full QA evidence under TESTING-RIGOR.md. |
| .claude/skills/review/references/devops.md | 53 | defined here | DevOps review matrix row defining CODE files (*.cs, *.ts, *.js, *.py) and their build impact. |
| .claude/skills/review/references/qa.md | 56 | defined here | QA review matrix row requiring full test coverage for CODE changes across all languages. |
| docs/workflow-commands.md | 122 | defined here | Command documentation listing CODE as a primary PR classification type. |

## Consumes
Source code, test files, runtime scripts, and libraries.

## Produces
Executable software modules and complete QA evidence test reports.

## When applied
Applied whenever modifying production or test logic in any supported programming language.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Code is the fundamental change control classification for executable logic and tests, enforcing the highest standard of verification including full automated test suites and structured QA evidence.
