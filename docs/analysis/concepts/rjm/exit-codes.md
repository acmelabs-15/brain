---
package: rjm
name: Exit Codes
slug: exit-codes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
  - {path: .claude/skills/golden-principles/scripts/scan_principles.py, sha256: cdb0a96626433920fcb5e2b1ca72ad19d545e2f873769cde2d3946aabe69136a}
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit Codes

## Definition — verbatim
> "Exit codes: 0=ok|1=logic|2=config|3=external|4=auth" — AGENTS.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 45 | defined here | Defines exit code standards (0=success, 1=business logic failure, 2=exception) for CI/CD Python scripts per ADR-035. |
| .claude/skills/analyze/references/DEVELOPMENT.md | 35 | defined here | Documents CLI exit codes (0=clean, 1=findings/errors) in skill development guidelines. |
| .claude/skills/golden-principles/scripts/scan_principles_core.py | 12 | defined here | Documents exit code semantics (0=clean, 1=error, 10=violations) in module docstring. |
| .claude/skills/golden-principles/scripts/scan_principles.py | 11 | defined here | Documents exit codes for rule scanning script execution in file docstring. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 18 | defined here | Documents scanner exit codes (0=PASS/WARN, 1=CRITICAL_FAIL) in script docstring. |
| .github/scripts/run_with_retry.py | 7 | defined here | Defines retry runner exit code mapping following ADR-035 contract. |
| AGENTS.md | 50 | defined here | Core repository contract specifying standard exit code taxonomy (0=ok, 1=logic, 2=config, 3=external, 4=auth). |
| scripts/error_classification.py | 4 | used here | Aligns tool error classification taxonomy with ADR-035 standard exit codes. |
| scripts/validation/check_canonical_citations.py | 25 | defined here | Documents script exit code contracts in header docstring. |
| scripts/validation/check_citation_freshness.py | 27 | defined here | Documents validator exit code contracts conforming to ADR-035 in header docstring. |

## Consumes
Execution status, validation results, exceptions, and authentication responses across CLI tools and scripts.

## Produces
Standardized process termination status codes consumed by CI/CD workflows, runners, and orchestrators.

## When applied
Whenever a script, validator, CI step, or agent tool finishes execution and returns control to the shell.

## Sub-concepts
none

## Part of
AGENTS.md

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan

## Design notes
A standardized repository contract (codified in AGENTS.md and ADR-035) establishing uniform process exit codes (0=ok, 1=logic/validation, 2=config/environment, 3=external/network, 4=auth). This deterministic contract enables automated retry mechanisms, error classification, and resilient CI workflow orchestration.
