---
package: rjm
name: Skill
slug: skill
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-029-skill-file-line-ending-normalization.md, sha256: 4091b5d7ea04f98e821d7a3921be5979436e4d460c86b2baf14113c85cdc0001}
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/progress/reporter.py, sha256: 3a09cf686fe7a267467190029851cc0ed3ce5ab9b9f68b573c48a84acb8b2cdb}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill

## Definition — verbatim
> "| **Skill** | A reusable workflow component for common tasks (git, PR, testing, linting, and more) |" — README.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-029-skill-file-line-ending-normalization.md | 24 | used here | Discusses line ending inconsistencies across platforms in generated skill files. |
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 45 | used here | Evaluates skill form factor against subagent system prompts in recall benchmarks. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 6 | used here | Classifies content as skill when action-heavy, tool-executing, or user-triggered. |
| .claude/skills/context-optimizer/SKILL.md | 4 | defined here | Context optimization guidance contrasting skills with passive context. |
| README.md | 145 | defined here | Defines skill as a reusable workflow component for common engineering tasks. |
| scripts/progress/reporter.py | 148 | used here | Logs runtime messages when an agent invokes a skill during a session. |
| scripts/validation/check_skill_skip_clauses.py | 38 | defined here | Defines Skill dataclass for validating skill skip clauses and frontmatter structure. |

## Consumes
Task requirements, tool execution permissions, and user/agent triggers.

## Produces
Executed workflows, tool invocations, and structured output envelopes.

## When applied
When an action-heavy, tool-executing, or multi-step reusable workflow is needed.

## Sub-concepts
allowed-tools

## Part of
rjm agent execution framework

## Implementation status
clean

## Design notes
A fundamental building block of the rjm lifecycle representing a modular, reusable workflow package. Skills encapsulate instructions, parameter schemas, script tooling, and allowed tool permissions for discrete tasks (such as git manipulation, PR management, testing, and linting). They contrast with passive context (always loaded into context) and subagents (isolated execution processes).
