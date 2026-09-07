---
package: rjm
name: baseline
slug: baseline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# baseline

## Definition — verbatim
> "A "baseline" is the number the instrument reports on a clean checkout of main; you measure your delta against it." — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:13

## Also called — verbatim
`1. **baseline**. Empty system prompt (control).` — scripts/eval/README.md:207

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 43 | used here | First variant in the three-variant eval, defined as a deliberately naive content prompt. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 49 | used here | Acceptance criteria specifying baseline as one of two mandatory run record variants. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 13 | defined here | Canonical definition of baseline as the benchmark reading on a clean checkout of main. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 144 | used here | Treatment mechanism representing unprompted model performance without rule context. |
| scripts/eval/eval-rule-activation.py | 8 | defined here | Control mechanism executing prompts without rule context. |
| scripts/eval/eval-skill-overlap.py | 9 | defined here | Control condition evaluating prompts without skill context. |
| scripts/eval/README.md | 207 | defined here | Documented as the empty system prompt control condition in rule activation evals. |
| scripts/validation/check_agent_skill_discriminator.py | 609 | defined here | CLI option specifying baseline JSON path for discriminator regression checks. |

## Consumes
Clean git checkout, unmodified prompt, or historical metric dataset.

## Produces
Reference measurement against which deltas, regressions, or lifts are evaluated.

## When applied
Established as the reference standard before introducing changes or running comparative evaluations.

## Sub-concepts
none

## Part of
agent-eval-discipline, ai-agents-diagnostics-toolkit

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift, missing-path, unfailable-gate, other

## Design notes
Across rjm's test harnesses, diagnostic toolkits, and eval frameworks, a baseline provides the ground truth or unprompted control measurement against which all proposed improvements, rule activations, and structural changes are empirically judged.
