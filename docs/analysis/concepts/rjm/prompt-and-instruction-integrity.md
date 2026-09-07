---
package: rjm
name: Prompt and Instruction Integrity
slug: prompt-and-instruction-integrity
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

# Prompt and Instruction Integrity

## Definition — verbatim
> "### 4. Prompt and Instruction Integrity" — .claude/skills/review/references/agent-safety.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 77 | defined here | Focus area evaluating prompt changes for ambiguity, contradiction, and injection vulnerabilities. |

## Consumes
Agent system prompts, instructions, templates, and persona definitions.

## Produces
Verification of instruction consistency, confirmation gates, and absence of prompt-injection vectors.

## When applied
Applied when a PR modifies agent prompt templates or instruction sets.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
An agent safety review focus area in rjm checking prompt changes for contradictory instructions, unvalidated inputs treated as instructions, or bypasses of human confirmation gates.
