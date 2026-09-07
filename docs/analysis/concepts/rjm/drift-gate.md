---
package: rjm
name: drift gate
slug: drift-gate
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# drift gate

## Definition — verbatim
> "A "drift gate" compares generated output trees against their canonical sources." — .claude/skills/ai-agents-change-control/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 15 | defined here | Explains the role of drift gates in comparing generated output trees against canonical sources. |
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 13 | defined here | Defines a drift gate as a CI check that fails when a generated tree no longer matches its canonical source. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 13 | defined here | Contrasts diagnostic instruments with drift gates that fail when generated trees stop matching canonical sources. |

## Consumes
Canonical source files and generated output directories.

## Produces
Pass/fail verification ensuring generated assets perfectly mirror their canonical source templates.

## When applied
Executed in local pre-push checks and GitHub Actions CI pipelines on pull requests.

## Sub-concepts
skip-drift-check

## Part of
change-control

## Implementation status
clean

## Design notes
A drift gate is an automated CI verification check that enforces synchronization between canonical source templates and their generated output trees, preventing manual drift and broken mirrored distributions.
