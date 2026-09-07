---
package: rjm
name: Document Nothing
slug: document-nothing
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Document Nothing

## Definition — verbatim
> "Let code speak for itself" — .claude/agents/janitor.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 80 | defined here | Fifth step of the execution strategy establishing that cleaned code must be self-explanatory rather than documented with defensive comments. |

## Consumes
Simplified and refactored code.

## Produces
Self-explanatory, readable code free of superfluous explanation comments or defensive documentation.

## When applied
Applied during the conclusion of a cleanup pass to avoid adding documentation about what was removed or simplified.

## Sub-concepts
none

## Part of
execution-strategy

## Implementation status
clean

## Design notes
A counter-intuitive but strict rule in rjm's janitor persona that prohibits adding explanatory comments or defensive documentation about why code was simplified. It insists that if code requires comments to explain its simplified structure, it is not sufficiently simple; clean code must be self-documenting.
