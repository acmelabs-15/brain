---
package: rjm
name: Finding
slug: finding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
  - {path: scripts/guard_diff.py, sha256: a3745f7b8d93313ff30f1db905d2607694d0b873e95d8b87b6fb1b3e74504d64}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Finding

## Definition — verbatim
(used, not defined)

> "class Finding:" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 107 | defined here | Python dataclass definition representing compilability and accuracy findings with severity, category, and evidence. |
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 4 | defined here | Module docstring documenting ownership of the Finding dataclass rendered in the ADR-056 envelope. |
| .claude/skills/orphan-ref-validator/SKILL.md | 17 | defined here | Specifies emission of structured Finding records for broken skill references, script paths, and rule paths. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 983 | defined here | Dataclass definition capturing rule violations, line coordinates, and lint suggestions for prose validation. |
| .github/scripts/parse_artifact_insights.py | 56 | defined here | Function signature parsing artifact insight entries into structured finding records. |
| scripts/guard_diff.py | 50 | defined here | Function signature generating guarded diff finding records for file modifications. |
| scripts/report_pr_supersession.py | 97 | defined here | Function signature constructing finding objects for detected pull request supersession states. |
| scripts/validation/check_adr_links.py | 163 | defined here | Function signature emitting finding records for invalid or dead ADR reference links. |
| scripts/validation/check_citation_freshness.py | 81 | defined here | Function signature recording stale citation findings against repository documentation. |
| scripts/validation/check_shipped_skill_routes.py | 288 | defined here | Function signature producing finding reports for route discrepancies in shipped skills. |
| scripts/validation/check_skill_memory_references.py | 139 | defined here | Function signature recording unresolved memory reference findings in skill definitions. |
| scripts/validation/stale_script_refs.py | 46 | defined here | Function signature generating finding records for obsolete or missing script invocations. |

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
defects: doc-drift, script-bug, internal-contradiction, missing-path, orphan, other

## Design notes
`Finding` is a pervasive dataclass and object identifier across verification scripts representing structured issue and violation records rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
