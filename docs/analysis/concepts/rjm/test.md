---
package: rjm
name: "test"
slug: test
kind: phase
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# test

## Definition — verbatim
> "Classify a changed file as authored, test, or generated." — .claude/skills/code-qualities-assessment/scripts/assess.py:107

## Also called — verbatim
> "   /spec          /plan          /build        /test         /review       /ship" — README.md:311

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 107 | defined here | File category classification in assess.py for test files receiving adjusted thresholds. |
| .claude/skills/review/SKILL.md | 4 | used here | Description specifying that pre-merge review runs after the /test phase executes. |
| README.md | 311 | defined here | used here | Lifecycle command /test mapping to the verification phase proving the system works. |
| scripts/eval/README.md | 467 | defined here | Held-out evaluation split group in prompt evaluation that scores final prompt performance once. |

## Consumes
Compiled software builds, unit test suites, integration test fixtures, and prompt evaluation holdout sets.

## Produces
Test execution results, quality gate pass/fail verdicts, and held-out evaluation metrics.

## When applied
Executed after the build phase via `/test` or within evaluation pipelines to validate correctness before review and shipping.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, always-failing-gate, script-bug

## Design notes
`test` is a central operational concept in rjm spanning multiple lifecycle tiers: it is the primary lifecycle command (`/test`) and verification phase between build and review, a specialized file category in `assess.py` with relaxed testability thresholds, and a held-out evaluation group in `eval-agent-vs-baseline.py` preventing benchmark overfit. Without `test`, systems lack empirical proof of functionality, regressions slip into production, and prompt optimizations overfit to training fixtures.
