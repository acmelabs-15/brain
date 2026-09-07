---
package: rjm
name: unknown
slug: unknown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/ci/_main_binding.py, sha256: 1009fe6ae95a4957bbb97bd561b2d48ac998636732375b335c3ef32dadacd60d}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# unknown

## Definition — verbatim
(used, not defined)

> "| **UNKNOWN** | Cannot determine | Investigate before modifying |" — .claude/skills/analysis-provenance/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 243 | defined here | Fallback constant returned when ADR lifecycle status cannot be parsed from YAML frontmatter. |
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 29 | defined here | Enum member representing indeterminate code provenance requiring manual investigation. |
| .claude/skills/analysis-provenance/SKILL.md | 45 | defined here | Table row documenting the UNKNOWN provenance category instructing users to investigate before modifying. |
| .claude/skills/review/scripts/validate_findings_scope.py | 55 | used here | Regex token matching review verdict lines that report indeterminate review results. |
| .claude/skills/review/SKILL.md | 29 | used here | Preserves Stage-1 spec-compliance UNKNOWN verdicts across the review merge without aborting Stage 2. |
| scripts/ci/_main_binding.py | 15 | defined here | State model token denying script-execution credit when main binding is ambiguous due to wildcards or deletions. |
| scripts/ci/check_bot_identity.py | 25 | defined here | Probe result classification indicating API or network failure during bot authentication verification. |
| scripts/maintenance/_gc_stale.py | 85 | defined here | Sentinel value indicating indeterminate git index staged content status. |
| scripts/quality_gate/check_critical_failures.py | 21 | used here | Strict quality gate condition blocking builds on UNKNOWN verdicts from crashed or unparseable review skills. |
| scripts/quality_gate/external_signal_gate.py | 67 | used here | Normalization dictionary mapping test runner ERROR and SKIPPED states to UNKNOWN verdicts. |

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
defects: exit-code-mismatch, missing-dependency, script-bug, doc-drift, missing-path, unfailable-gate, orphan

## Design notes
A ubiquitous sentinel token across scripts and quality gates representing indeterminate status, evaluation failure, or unparseable state rather than a lifecycle concept.
