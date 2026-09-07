---
package: rjm
name: CLI contract
slug: cli-contract
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CLI contract

## Definition — verbatim
> "argv-failure exits, exit codes, stdout vs `--output` tested" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 46 | defined here | Defined as testing command-line interface behavior including argv-failure exits, exit codes, and stdout versus output file separation. |

## Consumes
CLI tool specifications, argument parser definitions, and standard stream output requirements.

## Produces
Integration test suites verifying argument parsing failures, process exit codes, and stream formatting.

## When applied
Applied whenever introducing or modifying command-line entry points or scripts.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Specifies rigorous verification requirements for CLI tools, ensuring argv validation failures exit cleanly, exit codes match documented specifications, and stdout remains unpolluted when `--output` flags are designated.
