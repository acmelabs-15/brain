---
package: rjm
name: Validating Agent Frontmatter
slug: validating-agent-frontmatter
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

# Validating Agent Frontmatter

## Definition — verbatim
> "### Validating Agent Frontmatter" — CONTRIBUTING.md:774

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 774 | defined here | Section heading outlining the verification procedure to test that modified agent frontmatter loads without warnings in Copilot CLI. |

## Consumes
Modified agent templates (`templates/agents/*.shared.md`), platform configurations, and the pinned Copilot CLI executable.

## Produces
Terminal verification output reporting PASS/FAIL status for each shared agent definition tested under debug logging.

## When applied
Applied manually after modifying agent templates or platform configurations prior to submitting pull requests.

## Sub-concepts
none

## Part of
automated-quality-gates

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Validating agent frontmatter is a local developer verification technique in rjm that executes Copilot CLI with verbose logging (`--log-level all`) across all shared agents. By asserting that no warning diagnostics are emitted during agent initialization, contributors verify that schema changes and prompt headers remain fully compatible with target CLI runtimes.
