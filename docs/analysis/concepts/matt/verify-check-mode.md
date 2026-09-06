---
package: matt
name: verify/check mode
slug: verify-check-mode
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# verify/check mode

## Definition — verbatim
> "This project will not add a dedicated verify/check mode (or a separate verify skill) for `setup-matt-pocock-skills`." — .out-of-scope/setup-skill-verify-mode.md:3

## Also called — verbatim
`--verify` — .out-of-scope/setup-skill-verify-mode.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/setup-skill-verify-mode.md | 3 | defined here | Architectural rejection of a standalone verification mode in favor of prompt-driven checks. |

## Consumes
Existing agent configuration files in a repository.

## Produces
Verification report identifying drift between local configuration and current seed templates.

## When applied
When checking whether repository configuration files conform to upstream templates, executed via natural language rather than a CLI flag.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A dedicated verify/check mode was evaluated and rejected to prevent duplicating the setup skill's surface area, establishing that read-only drift verification should be performed conversationally via the existing prompt-driven setup skill.
