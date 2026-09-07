---
package: rjm
name: COMPLIANT
slug: compliant
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COMPLIANT

## Definition — verbatim
(used, not defined)

> "- COMPLIANT -> PASS, NON_COMPLIANT -> FAIL, PARTIAL -> WARN," — scripts/quality_gate/spec_external_signal_gate.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 55 | used here | Included in regular expression token match for extracting axis verdicts. |
| .claude/skills/review/SKILL.md | 103 | used here | Recognized in verdict regex and merged as PASS in review synthesis. |
| scripts/quality_gate/spec_external_signal_gate.py | 31 | used here | Documented as aliased to PASS in gate aggregator signal normalization. |

## Consumes
Successful verification that pull request diff satisfies all linked acceptance criteria.

## Produces
A passing verdict permitting downstream merge approval.

## When applied
Emitted when an evaluation axis verifies full compliance with specification requirements.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: missing-path, orphan

## Design notes
`COMPLIANT` is a successful gate outcome token in rjm's specification review domain, signifying that code changes fully satisfy linked requirements and normalizing to PASS in gate aggregation.
