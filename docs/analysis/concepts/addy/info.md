---
package: addy
name: Info
slug: info
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Info

## Definition — verbatim
> "| **Info** | Best practice recommendation, no current risk | Consider adopting |" — agents/security-auditor.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 65 | defines | Defines the Info security severity tier for best practice recommendations carrying no current risk, marked for adoption consideration. |
| agents/web-performance-auditor.md | 122 | defines | Defines the Info performance severity tier for improvement opportunities with no current evidence of impact. |
| hooks/session-start-test.sh | 36 | applies | Tests that session-start payload priority falls back to INFO when jq is absent from the host environment. |

## Consumes
Advisory observations or fallback system notification events.

## Produces
Non-binding recommendations for system adoption or informational hook messages.

## When applied
Applied when noting non-critical improvements or establishing notification priority in fallback states.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
defects: script-bug / doc-drift

## Design notes
Info provides a zero-risk informational tier across audits and hook logging, allowing agents to record observations and context without creating triage overhead.
