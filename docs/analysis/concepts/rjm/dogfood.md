---
package: rjm
name: Dogfood
slug: dogfood
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dogfood

## Definition — verbatim
> "To run the exact hooks, skills, and agents you ship, copy your working tree over" — CONTRIBUTING.md:56

## Also called — verbatim
> "### Dogfood the shipped Copilot base" — CONTRIBUTING.md:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 49 | defined here | Section heading explaining local installation of development hooks over installed marketplace plugins. |

## Consumes
Local working tree plugin artifacts under `src/copilot-cli/`.

## Produces
Locally overwritten installation of `project-toolkit` in the local plugin directory (`~/.copilot/installed-plugins/`).

## When applied
Applied during local Copilot CLI hook or agent development to test changes against real runtime plugin execution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Local deployment technique that prevents deployment bugs by running development-stage plugin hooks directly inside the real harness installation path rather than isolated checkouts.
