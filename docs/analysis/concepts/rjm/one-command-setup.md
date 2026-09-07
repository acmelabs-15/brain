---
package: rjm
name: One-Command Setup
slug: one-command-setup
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# One-Command Setup

## Definition — verbatim
> "### One-Command Setup" — docs/codeql-integration.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 34 | defined here | Section heading and instructions for automated installation of CodeQL CLI, VS Code integration, and skills. |

## Consumes
Python 3 runtime and repository installation script (`.codeql/scripts/install_codeql_integration.py`).

## Produces
Installed CodeQL CLI, configured VS Code settings, registered Claude Code `codeql-scan` skill, and pre-commit verification hooks.

## When applied
When onboarding new developer workstations or agent environments for local CodeQL scanning.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
One-Command Setup is an environment bootstrapping technique providing a single automated installer (`install_codeql_integration.py`) to provision CodeQL CLI binaries, IDE integration, agent skills, and pre-commit hooks. It lowers developer onboarding friction and eliminates manual setup errors across developer and agent environments.
