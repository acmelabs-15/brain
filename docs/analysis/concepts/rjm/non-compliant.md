---
package: rjm
name: NON_COMPLIANT
slug: non-compliant
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NON_COMPLIANT

## Definition — verbatim
(used, not defined)

> "- COMPLIANT -> PASS, NON_COMPLIANT -> FAIL, PARTIAL -> WARN," — scripts/quality_gate/spec_external_signal_gate.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 55 | used here | Included in regex pattern and failure verdict set for review scope validation. |
| .claude/skills/review/SKILL.md | 103 | used here | Listed in regular expression and failure verdicts merged into CRITICAL_FAIL. |
| scripts/quality_gate/check_critical_failures.py | 19 | used here | Member of blocking failure verdicts causing CI quality gate failure exit. |
| scripts/quality_gate/external_signal_gate.py | 81 | used here | Normalized to FAIL in agent signal aliasing dictionary. |
| scripts/quality_gate/spec_external_signal_gate.py | 31 | used here | Documented as normalized to FAIL in gate aggregator signal processing. |

## Consumes
Specification compliance audit failures, unfulfilled acceptance criteria, or guardrail breaches.

## Produces
A blocking failure verdict equivalent to CRITICAL_FAIL or FAIL.

## When applied
Emitted when an agent determines that code changes fail to satisfy specification or policy requirements.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: missing-path, orphan

## Design notes
`NON_COMPLIANT` is a failure verdict token used across rjm's specification compliance and governance review axes, mapping directly to blocking failure in quality gates when acceptance criteria are unmet.
