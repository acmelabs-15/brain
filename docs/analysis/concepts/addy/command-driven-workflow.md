---
package: addy
name: Command-driven workflow
slug: command-driven-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Command-driven workflow

## Definition — verbatim
> "- **Command-driven workflow:** manually invoke lifecycle commands with `.opencode/commands/` (optional)." — docs/opencode-setup.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/opencode-setup.md | 10 | defined here | Definition of user-directed lifecycle execution using explicit slash commands. |

## Consumes
Explicit developer command invocation (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`).

## Produces
Deterministic execution of the corresponding phase workflow.

## When applied
When developers prefer explicit human control over phase transitions rather than automatic skill discovery.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: [missing-path] in docs/opencode-setup.md regarding .opencode/commands/ missing on main

## Design notes
Command-driven workflows give developers explicit, human-in-the-loop control over lifecycle phase transitions by mapping each phase to a dedicated slash command, ensuring deliberate gates between specification, planning, implementation, and release.
