---
package: rjm
name: Tool and Permission Surface
slug: tool-and-permission-surface
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tool and Permission Surface

## Definition — verbatim
> "### 1. Tool and Permission Surface" — .claude/skills/review/references/agent-safety.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 59 | defined here | Focus area evaluating whether agent changes grant excessive tool access or permissions. |

## Consumes
Agent tool configuration, permission manifests, and PR diffs.

## Produces
Evaluation of whether tool permissions are scoped to the minimum required and findings on unauthorized capabilities.

## When applied
Applied when a PR modifies agent prompts, skills, or tool permissions.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
An agent safety analysis focus area in rjm that audits whether agent modifications unnecessarily expand tool capabilities, broaden permissions, or enable unconfirmed execution of destructive operations.
