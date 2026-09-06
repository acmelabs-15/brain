---
package: addy
name: Verifiable
slug: verifiable
kind: gate
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Verifiable

## Definition — verbatim
> "- **Verifiable** — Clear exit criteria with evidence requirements" — CONTRIBUTING.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 32 | defines | Defined as the second criterion of the Skill Quality Bar, mandating clear exit criteria and evidence requirements. |

## Consumes
Task execution outputs, test runs, and verification commands.

## Produces
Demonstrable proof (exit codes, test outputs, compiler results) confirming completion.

## When applied
When establishing the completion gates and verification sections of any skill.

## Sub-concepts
none

## Part of
skill-quality-bar

## Implementation status
clean

## Design notes
"Verifiable" requires that every skill define objective exit criteria supported by concrete evidence requirements. Without explicit verification gates requiring command execution and proof of correctness, agents will assert completion based on self-generated assumptions rather than validated reality.
