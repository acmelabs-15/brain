---
package: rjm
name: PARTIAL
slug: partial
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PARTIAL

## Definition — verbatim
> "Some aspects were executed and observed, others were inferred from artifacts" — .claude/skills/dx-review/SKILL.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 9 | defines | Defined as an intermediate evidence label where execution is combined with artifact inference. |
| .claude/skills/review/references/decision-rigor.md | 22 | applies | Context mode setting indicating only a bounded diff slice was provided, strictly forbidding PASS. |
| .claude/skills/review/references/devops.md | 22 | applies | Context mode setting indicating only a bounded diff slice was provided, strictly forbidding PASS. |
| .claude/skills/review/references/observability.md | 22 | applies | Context mode setting indicating only a bounded diff slice was provided, strictly forbidding PASS. |
| .claude/skills/review/references/qa.md | 22 | applies | Context mode setting indicating only a bounded diff slice was provided, strictly forbidding PASS. |
| .claude/skills/review/scripts/validate_findings_scope.py | 55 | references | Regular expression pattern token identifying recognized review verdict values. |
| .claude/skills/review/SKILL.md | 104 | applies | Verdict aggregation rule dictating that any PARTIAL or WARN axis verdict resolves to WARN. |
| scripts/quality_gate/spec_external_signal_gate.py | 31 | applies | Quality gate normalization rule translating agent PARTIAL signals into WARN. |

## Consumes
Partial execution traces, truncated diff payloads, static code artifacts, and agent evaluation signals.

## Produces
An intermediate evidence classification label in dx-review or a non-clearing WARN evaluation state in review gates.

## When applied
Applied when evidence is incomplete or bounded: in dx-review when testing is mixed with inference, and in review axes when diff size limits prevent full inspection.

## Sub-concepts
none

## Part of
evidence-labels, cross-phase

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
A cross-cutting qualification token in rjm representing bounded or incomplete evidence. In dx-review, it labels scores derived from both execution and artifact inspection. In the multi-axis review skill and quality gates, it designates truncated diff context modes that block unconditional PASS verdicts and merge into WARN.
