---
package: rjm
name: release-it
slug: release-it
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/distributed-systems-fallacies.md, sha256: fe282f7253e66135dea19f5cb22b7bd149bc0c1225e8239459cb9da9c65509b8}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# release-it

## Definition — verbatim
> "- `software-engineering-library` release-it reference: the stability patterns (timeouts, retries," — .claude/skills/observability/references/distributed-systems-fallacies.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/references/distributed-systems-fallacies.md | 69 | used here | Referenced and applied in distributed-systems-fallacies.md during verification and operational workflows. |
| .claude/skills/software-engineering-library/references/release-it.md | 4 | used here | Referenced and applied in release-it.md during verification and operational workflows. |
| scripts/eval/software_engineering_library_activation_ci.py | 19 | used here | Referenced and applied in software_engineering_library_activation_ci.py during verification and operational workflows. |
| scripts/eval/software_engineering_library_activation_gate.py | 25 | used here | Referenced and applied in software_engineering_library_activation_gate.py during verification and operational workflows. |

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
An operational technique or artifact (release-it) utilized within the rjm ecosystem to ensure consistency and systematic execution.
