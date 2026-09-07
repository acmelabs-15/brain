---
package: rjm
name: Evidence
slug: evidence
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
  - {path: .claude/skills/retrospective/scripts/extract_evidence.py, sha256: a48eb99dbb8bf1d848093e8a5454641f6d9c478181bca655de52ff7835f826e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evidence

## Definition — verbatim
(used, not defined)

> "class Evidence:" — .claude/skills/analysis-provenance/scripts/check_provenance.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 60 | defined here | Session log JSON field holding an array of strings recording rework warning output lines |
| .claude/skills/analysis-provenance/scripts/check_provenance.py | 41 | defined here | Dataclass representing collected evidence for file provenance determination |
| .claude/skills/retrospective/scripts/extract_evidence.py | 95 | defined here | Dataclass representing the Phase 0 evidence bundle extracted for retrospective analysis |

## Consumes
Raw session logs, git status output, provenance markers, analysis outputs.

## Produces
Verifiable audit trails, structured verification evidence records, session log compliance fields.

## When applied
When validating file provenance, completing session compliance checks, or performing retrospective analysis.

## Sub-concepts
none

## Part of
reworkWarning, retrospective, analysis-provenance

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug

## Design notes
Evidence in rjm represents structured verification artifacts that substantiate claims across the lifecycle. Whether instantiated as a Python dataclass during retrospective analysis and provenance checking or recorded as an array of diagnostic strings in session logs, Evidence ensures assertions are backed by concrete observations rather than unverified assumptions.
