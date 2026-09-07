---
package: rjm
name: Detection scripts
slug: detection-scripts
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Detection scripts

## Definition — verbatim
> "- **Detection scripts**: `Detect-*.ps1` - Skill violations, test coverage gaps" — .agents/architecture/ADR-019-script-organization.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 47 | defined here | Defined as a developer-facing script category for identifying skill violations and test gaps. |

## Consumes
Staged git diffs, changed files, test suites, and skill configuration definitions.

## Produces
Detailed reports of detected violations or coverage gaps with exit code 1 if critical issues are found.

## When applied
Run locally by developers or pre-commit hooks before committing changes or submitting pull requests.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Diagnostic scripts designed to automatically scan codebases and commit diffs for rule violations, unauthorized skill usages, or test coverage deficits before pull request submission.
