---
package: addy
name: check:full
slug: check-full
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# check:full

## Definition — verbatim
> "`check:fast` is what runs after an edit, `check:task` when the agent thinks it's done, `check:full` in CI." — skills/constraint-driven-development/SKILL.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 20 | defined here | Specifies adding check:full to package.json for full review and CI verification. |
| skills/constraint-driven-development/SKILL.md | 177 | defined here | Defines check:full script chaining check:task with Semgrep and OSV vulnerability scanners. |

## Consumes
Completed feature branch ready for pull request review or CI merge.

## Produces
Comprehensive verification report covering tests, SAST scanning, and dependency security.

## When applied
During pre-merge review and automated CI pipeline runs.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
The exhaustive verification gate executed in CI and review, combining task tests with deep security scanning and dependency auditing.
