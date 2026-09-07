---
package: rjm
name: Resolution
slug: resolution
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md, sha256: 07862ef3fb6178b60c4d5f54fade0b93ea55718575377bdda6ea8e20ee506f03}
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Resolution

## Definition — verbatim
> "## Phase 3: Resolution" — .claude/agents/debug.md:44

## Also called — verbatim
> "- **Resolution** = hiding the comment (UI action)" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:52

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 44 | defined here | Phase heading defining minimal code fix implementation and reproduction verification. |
| .claude/skills/security-scan/references/autonomous-execution-guardrails.md | 52 | defined here | Definition contrasting comment thread resolution (UI action) with substantively addressing issues. |
| scripts/quality_gate/resolve_pytest_signal.py | 148 | defined here | Dataclass definition encapsulating resolved status and reason strings for pull request test signals. |
| templates/agents/debug.shared.md | 52 | defined here | Phase heading defining the resolution stage in the shared debugging template. |

## Consumes
Confirmed root cause hypotheses, reproduction test cases, and diagnostic execution traces.

## Produces
Minimal targeted code modifications, passing verification test runs, and resolved review comment threads.

## When applied
When implementing a bug fix, verifying defect repair, or resolving review comments and test run signals.

## Sub-concepts
none

## Part of
debug

## Implementation status
defects: orphan

## Design notes
Represents multiple operational senses of resolving issues across rjm: primarily the implementation phase (Phase 3) of debugging where targeted minimal fixes are applied and verified; secondarily an anti-pattern guardrail distinction where UI comment resolution must not substitute for addressing root concerns; and tertiarily a data model encapsulating CI test signal resolution.
