---
package: rjm
name: thin workflows, testable modules
slug: thin-workflows-testable-modules
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# thin workflows, testable modules

## Definition — verbatim
> "ADR-006 (thin workflows, testable modules)" — .agents/guides/python-cicd-patterns.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 11 | used here | Architectural principle citing ADR-006 to guide the migration of CI/CD scripts to Python modules. |

## Consumes
Workflow designs and Python module architectures.

## Produces
Decoupled CI architecture where workflows only orchestrate and logic is locally testable.

## When applied
When designing GitHub Actions workflows and implementing corresponding automation scripts.

## Sub-concepts
adr-006-compliance

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Architectural design pattern from ADR-006 mandating that GitHub Actions workflow YAML files contain minimal orchestration code, delegating all domain and business logic to independently testable Python modules.
