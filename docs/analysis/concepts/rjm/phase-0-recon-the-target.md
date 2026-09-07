---
package: rjm
name: Phase 0: Recon the target
slug: phase-0-recon-the-target
kind: phase
package_phase: rjm:autoplan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 0: Recon the target

## Definition — verbatim
> "### Phase 0: Recon the target" — .claude/skills/autoplan/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 45 | defined here | Initial reconnaissance phase detecting target repository stack signals, build manifests, and contribution gates before routing. |

## Consumes
Target repository files (CONTRIBUTING*, AGENTS.md/CLAUDE.md, build manifests, directory layout).

## Produces
Detected language, build command, test command, conventions, and active contribution gates.

## When applied
Executed as the mandatory first phase of autoplan before classification and routing.

## Sub-concepts
contribution-gates

## Part of
autoplan

## Implementation status
clean

## Design notes
`Phase 0: Recon the target` enforces stack neutrality in `autoplan`. By inspecting build manifests and repo signals prior to classification, it prevents assuming Python defaults on foreign codebases.
