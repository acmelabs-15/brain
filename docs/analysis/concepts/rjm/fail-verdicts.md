---
package: rjm
name: FAIL_VERDICTS
slug: fail-verdicts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FAIL_VERDICTS

## Definition — verbatim
(used, not defined)

> "FAIL_VERDICTS = frozenset(" — scripts/ai_review_common/verdict.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 47 | used here | Exported constant in the verdict library listing blocking failure tokens. |
| scripts/ai_review_common/__init__.py | 26 | used here | Re-exported symbol in the common review package facade. |
| scripts/ai_review_common/issue_triage.py | 10 | used here | Imported to align failure exit code calculation with canonical verdicts. |
| scripts/ai_review_common/quality_gate.py | 7 | used here | Re-exported from the verdict submodule in the quality gate facade. |
| scripts/ai_review_common/verdict.py | 71 | defined here | Defines the canonical frozenset of blocking failure verdict tokens. |
| scripts/quality_gate/check_critical_failures.py | 18 | used here | Cited in docstring describing the canonical blocking verdict set. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
verdict-library

## Implementation status
defects: missing-path, doc-drift, orphan, script-bug, internal-contradiction, other

## Design notes
`FAIL_VERDICTS` is a Python constant identifier defining the canonical frozenset of blocking review verdict tokens, classified as name-only per D-023.
