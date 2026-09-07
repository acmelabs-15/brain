---
package: rjm
name: Change control
slug: change-control
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Change control

## Definition — verbatim
> "Change control for this repo." — .claude/skills/ai-agents-change-control/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 3 | defined here | Skill frontmatter and opening overview describing repo change classification, gate mapping, and non-negotiables. |

## Consumes
Working tree diffs, commit proposals, and documentation changes.

## Produces
Change classifications, triggered gate execution plans, and QA evidence documentation.

## When applied
Applied on every code, doc, workflow, or configuration change across the entire repository lifecycle.

## Sub-concepts
drift-gate, canonical-source, docs-only, investigation-only, code, plugin-content, git-hook-configuration, claude-lifecycle-hook, workflow, adr-governance

## Part of
none

## Implementation status
clean

## Design notes
Change control provides the unifying protocol for repo modifications, categorizing work into seven distinct classes, mapping each class to automated gates, and holding immutable non-negotiable standards derived from historical incidents.
