---
package: rjm
name: Request Pattern Matching
slug: request-pattern-matching
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Request Pattern Matching

## Definition — verbatim
> "| Request Pattern | Primary Agent | Fallback | Notes |" — .agents/AGENT-SYSTEM.md:1150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1148 | defined here | Routing heuristic table mapping natural-language user prompt keywords to primary and fallback agents. |

## Consumes
Natural language prompts, user task descriptions, or issue trigger keywords.

## Produces
Deterministic agent routing selections with fallback paths.

## When applied
> "### Request Pattern Matching" — .agents/AGENT-SYSTEM.md:1148

## Sub-concepts
none

## Part of
- orchestrator
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Request Pattern Matching provides a keyword-based heuristic routing table for the orchestrator. By matching common verbs and phrases in user prompts (such as "implement", "test", "design", "security", "PR comment") to dedicated primary and fallback agents, it enables quick triage of unstructured requests into appropriate specialized workflows.
