---
package: rjm
name: Interview Process
slug: interview-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Interview Process

## Definition — verbatim
> "This protocol provides a standardized process for discovering and documenting agent capabilities." — .agents/governance/agent-interview-protocol.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 117 | defined here | Outlines the four-step procedural sequence (Prepare, Conduct Interview, Validate, Document) for interviewing agents. |

## Consumes
Current agent documentation, known issues, usage history, and isolated agent session context.

## Produces
Validated interview response files stored in `.agents/governance/interviews/[agent]-interview.md` and updated routing configurations.

## When applied
Executed whenever an agent undergoes creation, major capability modifications, or scheduled review.

## Sub-concepts
none

## Part of
- agent-interview-protocol

## Implementation status
defects: missing-path, doc-drift (specified archive directory .agents/governance/interviews/archive/ does not exist per .agents/governance/agent-interview-protocol.md:182; Capabilities Matrix at line 188 is marked unmaintained with no path)

## Design notes
The Interview Process defines the operational procedure for executing agent capability discovery in rjm. By dividing execution into four discrete stages—Prepare (reviewing docs), Conduct Interview (asking questions sequentially in isolation), Validate (testing limitations and checking reciprocal pairings), and Document (persisting to standard templates)—it prevents superficial documentation and ensures recorded capabilities reflect actual agent behavior.
