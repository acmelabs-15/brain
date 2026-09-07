---
package: rjm
name: Self-Assessment Triggers
slug: self-assessment-triggers
kind: checklist
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Self-Assessment Triggers

## Definition — verbatim
> "During implementation, flag for security PIV if ANY of these apply:" — .claude/agents/implementer.md:694

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 692 | defines | Defines the eight categorized indicator rules triggering mandatory post-implementation verification. |

## Consumes
Touched code files, architectural paths, and modified functional components.

## Produces
Formal handoff note indicating security review requirement and specific trigger categories.

## When applied
Evaluated by the implementer whenever code changes touch authentication, data protection, input handling, external interfaces, file system, environment, dynamic execution, or security-sensitive path patterns.

## Sub-concepts
none

## Part of
security-flagging, implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Provides explicit, objective heuristic triggers for security review. Instead of relying on agent intuition, it enumerates eight specific categories (from JWT handling to lefthook configurations and path patterns) that necessitate independent verification, closing the gap between general security policies and concrete operational checkpoints.
