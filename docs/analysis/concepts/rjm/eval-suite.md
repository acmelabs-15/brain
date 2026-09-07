---
package: rjm
name: Eval Suite
slug: eval-suite
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Eval Suite

## Definition — verbatim
> "Eval Suite: Unified test orchestrator for prompt, skill, and command changes." — scripts/eval/eval-suite.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 2 | defined here | Module docstring defines Eval Suite as the unified test orchestrator routing prompt, skill, and command changes to appropriate evaluators. |

## Consumes
Git diff against base ref (`main` or custom ref), changed files list, Pester structural test targets, and scenario benchmark files.

## Produces
Structured evaluation report JSON output, stderr summary status table, and standardized exit codes (0, 1, 2, 3).

## When applied
Executed during CI or local testing before merging changes to system prompts, skills, agents, or workflow commands.

## Sub-concepts
structural-tests, behavioral-comparison, agent-quality-assessment, skill-knowledge-integration

## Part of
eval-harness

## Implementation status
defects: missing-path

## Design notes
A centralized evaluation orchestrator in rjm that analyzes git diffs across prompt, skill, and agent definitions and routes each changed component to its specialized test runner. By unifying structural tests, behavioral regression checks, agent quality assessments, and knowledge integration tests behind a single CLI entry point with dry-run support, it prevents untested changes from entering the agent lifecycle.
