---
package: rjm
name: structural tests
slug: structural-tests
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

# structural tests

## Definition — verbatim
> "Run Pester structural tests (ADR-023)." — scripts/eval/eval-suite.py:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 231 | defined here | Function docstring defines the execution of Pester structural tests against prompt files under ADR-023. |

## Consumes
Prompt file paths, PowerShell (pwsh) environment, and Pester test definition QualityGatePrompts.Tests.ps1.

## Produces
Test result dictionary reporting pass/fail status, return code, target list, and stdout/stderr previews.

## When applied
Executed when prompt files or quality gate prompt templates are modified.

## Sub-concepts
none

## Part of
eval-suite

## Implementation status
defects: missing-path

## Design notes
A deterministic verification technique enforcing structural integrity and syntax compliance of prompt templates via PowerShell Pester assertions before allowing behavioral evaluation. Without structural tests, syntax errors or malformed template variables would leak into more expensive LLM behavioral evaluation runs.
