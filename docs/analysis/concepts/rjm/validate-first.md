---
package: rjm
name: validate-first
slug: validate-first
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate-first

## Definition — verbatim
> "Persist the updated JSON only after the validate-first step succeeds." — .claude/commands/checkpoint.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 144 | defined here | Enforced in step 7 requiring in-memory JSON validation via json.tool before writing session log updates. |

## Consumes
Candidate data payloads formatted in memory and validation tooling.

## Produces
Guaranteed valid serialized content prior to disk modification.

## When applied
When updating structured metadata files, configuration, or session logs.

## Sub-concepts
none

## Part of
checkpoint-command

## Implementation status
clean

## Design notes
The validate-first pattern ensures that in-memory transformations of critical state files—such as JSON session logs—are parsed and validated before touching persistent storage. This prevents partial writes, syntax errors, or schema corruption from destroying vital operational records.
