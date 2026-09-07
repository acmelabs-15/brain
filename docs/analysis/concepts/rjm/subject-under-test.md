---
package: rjm
name: subject under test
slug: subject-under-test
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# subject under test

## Definition — verbatim
> "Treats code as the source of truth and documentation as the subject under test." — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 4 | used here | Establishes the asymmetric verification paradigm designating documentation as the subject under test against code truth. |

## Consumes
Documentation files undergoing validation against corresponding implementation source code.

## Produces
Verification assertions testing documentation claims against the underlying implementation.

## When applied
Applied throughout doc-accuracy scanning when evaluating documentation veracity against code source of truth.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
The subject under test pattern flips traditional testing assumptions by treating implementation code as ground truth and documentation as the target being tested. Under this paradigm, discrepancies are treated as documentation bugs, ensuring documentation is held to the same rigorous verification standards as production code.
