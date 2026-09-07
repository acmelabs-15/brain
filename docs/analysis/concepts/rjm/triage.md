---
package: rjm
name: Triage
slug: triage
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Triage

## Definition — verbatim
> "### Step 2: Triage the findings" — .claude/commands/sync.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 45 | defined here | Step 2 process categorizing detected drift lines into moved code, deleted code, forward references, or unsafe references. |
| .claude/skills/prompt-engineer/references/workflow.md | 3 | defined here | Phase 0 assessing prompt complexity to select between lightweight and full optimization workflows. |
| .claude/skills/prompt-engineer/SKILL.md | 115 | defined here | Initial triage section evaluating prompts to route simple prompts to lightweight optimization. |

## Consumes
Unsorted drift findings, raw prompts, or incoming issues.

## Produces
Categorized findings or tasks routed to appropriate remediation workflows or complexity tiers.

## When applied
Applied during Step 2 of `/sync` and Phase 0 of prompt optimization.

## Sub-concepts
code-moved, code-deleted, intentional-forward-reference, unsafe-reference

## Part of
sync, prompt-engineer

## Implementation status
defects: orphan, missing-path

## Design notes
Triage is a fundamental categorization technique employed across multiple rjm workflows. By sorting inputs—such as drift findings in `/sync` or prompt candidates in `prompt-engineer`—into standardized, well-defined buckets before taking action, triage prevents wasted effort and ensures each item receives appropriate, proportionate handling.
