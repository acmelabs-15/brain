---
package: rjm
name: Read-Only Constraint
slug: read-only-constraint
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Read-Only Constraint

## Definition — verbatim
> "## Read-Only Constraint" — templates/agents/analyst.shared.md:214

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/analyst.shared.md | 214 | defined here | Safety constraint forbidding the analyst from executing shell commands, accessing arbitrary web URLs, or modifying files or memories. |

## Consumes
Read-only tool outputs, problem descriptions, and supplied context.

## Produces
Text-only analytical responses containing findings and recommendations without mutating repository state or external memories.

## When applied
Enforced continuously during all operations of the analyst agent.

## Sub-concepts
none

## Part of
analyst

## Implementation status
defects: missing-path

## Design notes
The `Read-Only Constraint` ensures that the analyst agent remains purely an analytical research role that inspects code, logs, and documentation without risk of modifying repository files, creating commits, or corrupting persistent memory structures.
