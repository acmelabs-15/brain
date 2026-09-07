---
package: rjm
name: Rejected
slug: rejected
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rejected

## Definition — verbatim
> "Decision was considered but not adopted" — .claude/skills/adr-generator/references/adr-best-practices.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 75 | defined here | Defined in the ADR lifecycle table as the stage where a decision was considered but not adopted. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 264 | used here | Handled in the authoritative frontmatter status enum for ADR review gating. |
| .claude/skills/adr-review/SKILL.md | 222 | used here | Verified as an allowed status value in post-review validation checks. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 27 | used here | Prescribed action outcome for skill statements scoring below 40% due to vagueness. |
| .claude/skills/review/scripts/validate_findings_scope.py | 54 | used here | Recognized as a blocking verdict token in regex pattern parser. |
| .claude/skills/review/SKILL.md | 103 | used here | Handled as a blocking review verdict token during multi-axis verdict extraction. |
| scripts/quality_gate/check_critical_failures.py | 19 | used here | Listed in blocking fail verdict set causing CI quality gate script to fail. |

## Consumes
Evaluated proposal, failing retrospective score, or review findings.

## Produces
Terminal non-adopted decision record, rejected candidate skill, or blocking review verdict.

## When applied
Applied when an ADR is turned down, when retrospective learnings fail atomicity thresholds, or when a review axis issues a blocking failure verdict.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
defects: exit-code-mismatch, doc-drift, missing-path, orphan

## Design notes
A dual-purpose concept in rjm functioning both as an architectural lifecycle status and as an active pipeline gate token. In the ADR lifecycle, preserving rejected proposals documents alternatives that were considered and dismissed, preventing teams from repeatedly proposing failed ideas; in quality and review tooling, REJECTED operates as an uncompromising blocking verdict that halts automated progression.
