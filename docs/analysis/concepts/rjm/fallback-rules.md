---
package: rjm
name: Fallback Rules
slug: fallback-rules
kind: checklist
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fallback Rules

## Definition — verbatim
> "## Fallback Rules" — .claude/commands/research.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 57 | defined here | Section heading defining handling procedures when web search or URL fetch operations encounter errors. |

## Consumes
Network errors, empty search results, and tool permission denials during research.

## Produces
Alternate search query formulations or graceful degradation strategies.

## When applied
Triggered whenever a primary retrieval tool (WebSearch or WebFetch) fails or returns zero results.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
Resilience protocols governing how research agents respond to external tool failures. They instruct the agent to rephrase zero-hit searches up to twice, record unreachable URLs without failing the run, and interpret permission denials as capability signals rather than prompt injection, keeping the agent moving forward.
