---
package: rjm
name: CheckResult
slug: checkresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/check_placeholder_identity.py, sha256: b226e1a01102b85939b491881b102f5b978fd226c21b697a0b89c8ea69506383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CheckResult

## Definition — verbatim
(used, not defined)

> "class CheckResult:" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 26 | defined here | Dataclass storing pass/fail state, severity, and message for a single context compliance check. |
| scripts/validation/check_agent_skill_discriminator.py | 153 | defined here | Dataclass storing aggregate agent evaluation scores and override rationales. |
| scripts/validation/check_placeholder_identity.py | 115 | defined here | NamedTuple encapsulating return code, stdout, and stderr from git verification executions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
CheckResult is a Python data structure identifier (dataclass/NamedTuple) used across verification scripts to encapsulate check outcomes rather than an operational lifecycle concept, classified as name-only per D-023.
