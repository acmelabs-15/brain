---
package: rjm
name: NEEDS_REVIEW
slug: needs-review
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NEEDS_REVIEW

## Definition — verbatim
(used, not defined)

> "NEEDS_REVIEW" — scripts/ai_review_common/cache_guard.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 54 | used here | Regex pattern token included in verdict extraction and failure verdict sets. |
| .claude/skills/review/SKILL.md | 103 | used here | Documented verdict token recognized during per-axis verdict parsing and merge. |
| scripts/ai_review_common/cache_guard.py | 13 | used here | Listed in NON_CACHEABLE_VERDICTS to prevent caching non-definitive review verdicts. |
| scripts/ci/parse_ai_review_output.py | 83 | used here | Default fallback verdict assigned when AI review output has missing or unrecognized tokens. |
| scripts/quality_gate/check_critical_failures.py | 19 | used here | Included in the blocking verdict set that causes CI quality gate to exit with failure. |
| scripts/quality_gate/external_signal_gate.py | 80 | used here | Mapped to FAIL in agent signal normalization for gate aggregator processing. |
| scripts/quality_gate/spec_external_signal_gate.py | 32 | used here | Documented alias normalizing agent review token NEEDS_REVIEW to gate aggregator FAIL. |

## Consumes
Unparseable, ambiguous, or inconclusive automated review output.

## Produces
A blocking gate status requiring human triage and preventing cache persistence.

## When applied
Emitted when review models fail to provide a valid verdict token or when manual operator intervention is required.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, orphan

## Design notes
`NEEDS_REVIEW` is a safety-fallback gate verdict in rjm that flags inconclusive or unparseable review results, treating uncertainty as a blocking failure that cannot be cached and demands developer or reviewer scrutiny.
