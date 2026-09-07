---
package: rjm
name: Standing order
slug: standing-order
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Standing order

## Definition — verbatim
> "| Standing order | Never inferred from a template | \"Monitor competitor pricing continuously\" |" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 48 | defined here | Memory write classification row specifying that continuous instructions must never be inferred from template references. |

## Consumes
Agent execution contexts, prompt templates, and proposed memory write operations.

## Produces
Prohibition against inferring ongoing recurring instructions or autonomous scheduling from static template references.

## When applied
Applied during PR review when inspecting diffs that touch agent memory writes, reflection scripts, or prompt permissions.

## Sub-concepts
none

## Part of
bounded-autonomy

## Implementation status
clean

## Design notes
A governance principle and memory write permission class in rjm establishing that ongoing continuous actions or monitoring tasks must never be inferred from document or template references without an explicit user grant.
