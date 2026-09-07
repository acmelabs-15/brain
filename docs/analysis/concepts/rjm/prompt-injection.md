---
package: rjm
name: prompt-injection
slug: prompt-injection
kind: pattern
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

# prompt-injection

## Definition — verbatim
(used, not defined)

> "- Is there a prompt-injection surface (the agent treats untrusted content as instructions)?" — .claude/skills/review/references/agent-safety.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 80 | used here | Focus area check for untrusted content interpreted as instructions. |

## Consumes
External data inputs, user-provided content, and LLM prompt templates.

## Produces
Identification of attack vectors where untrusted inputs override agent operating instructions.

## When applied
Applied during agent prompt and skill review when external inputs are consumed by the LLM.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
A security vulnerability pattern in LLM-based agent systems where untrusted input strings are parsed and executed as operational instructions rather than passive data.
