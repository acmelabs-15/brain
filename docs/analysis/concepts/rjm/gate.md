---
package: rjm
name: gate
slug: gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gate

## Definition — verbatim
> "a \"gate\" is an automated check that blocks progress (commit, push, or merge) until satisfied." — .claude/skills/ai-agents-change-control/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 404 | defined here | PreToolUse dispatcher execution mode stopping on first non-zero exit code |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 319 | defined here | Multi-tool build requirement mandating gate mode execution for PreToolUse shims |
| .claude/skills/ai-agents-change-control/SKILL.md | 15 | defined here | Core definition of automated verification checks blocking progress until satisfied |
| scripts/eval/_optimizer_core.py | 68 | defined here | Core eval optimizer loop gate function deciding whether candidate patches replace incumbent |
| scripts/eval/README.md | 496 | defined here | Evaluation optimizer step deciding candidate replacement against baseline |
| scripts/validation/pre_pr_sequence.py | 17 | defined here | Sequence of verification gates executed sequentially during pre-PR validation |

## Consumes
Code modifications, candidate patches, or lifecycle transition attempts.

## Produces
Pass or fail verification verdict (exit code 0 or non-zero) determining whether downstream progression is allowed.

## When applied
Applied at lifecycle boundaries (pre-commit, pre-push, pre-PR, pre-tool-use, and eval iterations) to mechanically enforce repository standards.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
In rjm, a gate is an automated verification barrier that blocks progression until satisfied, ensuring that repository integrity and quality standards are enforced mechanically by tooling rather than voluntarily by conversational agents.
