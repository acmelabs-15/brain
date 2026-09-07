---
package: rjm
name: Search before claiming
slug: search-before-claiming
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Search before claiming

## Definition — verbatim
> "Before stating any fact about the codebase, an external system, a library, or a service, verify via tool." — .claude/agents/analyst.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 65 | defined here | Rule A5 requiring tool verification of any fact about code, systems, or libraries prior to publishing. |
| src/claude/analyst.md | 65 | defined here | Source definition of the search before claiming verification rule. |
| templates/agents/analyst.shared.md | 80 | defined here | Shared analyst template enforcing tool-based verification of claims. |

## Consumes
Unverified factual assertions regarding repository code, third-party libraries, or external systems.

## Produces
Tool-corroborated evidence (Grep, Read, MCP results) or redirection of unverifiable claims to Open Questions.

## When applied
Enforced continuously across all analyst investigations before stating facts.

## Sub-concepts
none

## Part of
analysis-reasoning-protocol

## Implementation status
clean

## Design notes
Search before claiming (rule A5) is an anti-hallucination gate that forbids relying on LLM internal training memory for factual assertions. It requires agents to actively inspect code or query documentation tools during the active session, banishing speculative phrases like "I recall" or "probably has" to unverified open questions.
