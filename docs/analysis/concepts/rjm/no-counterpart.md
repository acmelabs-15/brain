---
package: rjm
name: NO COUNTERPART
slug: no-counterpart
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# NO COUNTERPART

## Definition — verbatim
> "| NO COUNTERPART | Claude agent has no VS Code equivalent | Create template or justify exclusion |" — templates/README.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 232 | defined here | Defined in the drift types table as the drift classification when a Claude agent lacks a VS Code equivalent. |

## Consumes
Agent catalog entries from src/claude/ and template definitions from templates/agents/.

## Produces
Parity alert status requiring the creation of a corresponding shared template or documented justification for exclusion.

## When applied
Triggered during drift detection runs when an agent prompt exists in the Claude Code directory without a matching template definition.

## Sub-concepts
none

## Part of
drift-detection

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
NO COUNTERPART is a quality gate classification in rjm's agent architecture that detects asymmetric feature additions. When new agent capabilities are introduced exclusively in Claude Code without corresponding template support, this verdict prevents silent platform abandonment by requiring template parity or an explicit governance rationale for platform specialization.
