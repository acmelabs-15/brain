---
package: rjm
name: Self-verification
slug: self-verification
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/script-template.py, sha256: 50af05ade0055f329c89815a126c5ff43f3dd21ff959c8ce8d674a32b660e9a0}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Self-verification

## Definition — verbatim
> "| **Self-Verification** | Scripts can verify their own output |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/script-template.py | 196 | defined here | Docstring for `verify_result()`, establishing post-processing self-validation of Result objects. |
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 23 | defined here | Script Agent review criterion requiring scripts to independently verify their own outputs before reporting success. |
| .claude/skills/skillforge/references/script-integration-framework.md | 152 | defined here | Pattern 1 for autonomous scripts, defining post-execution validation functions returning explicit pass/fail tuples. |
| .claude/skills/skillforge/references/script-patterns-catalog.md | 556 | defined here | Pattern 9 documenting structured implementation of autonomous output checking with `execute_with_verification()`. |

## Consumes
Execution results, output artifacts, or generated data structures.

## Produces
Boolean verification verdict and detailed reason message (`tuple[bool, str]`), setting exit code 11 on verification failure.

## When applied
Executed automatically at the conclusion of script execution before returning control or exiting.

## Sub-concepts
none

## Part of
script-integration-framework

## Implementation status
defects: exit-code-mismatch

## Design notes
Self-verification is an agentic design pattern in SkillForge where execution scripts autonomously evaluate their own generated outputs against explicit validation criteria before signaling completion, eliminating silent failures and reducing reliance on manual user inspection.
