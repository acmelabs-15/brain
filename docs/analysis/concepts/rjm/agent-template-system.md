---
package: rjm
name: Agent Template System
slug: agent-template-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Template System

## Definition — verbatim
> "This project uses a **template-based generation system** to maintain agent definitions across multiple platforms (VS Code, Copilot CLI). This ensures consistency while allowing platform-specific customizations." — CONTRIBUTING.md:128

## Also called — verbatim
> "## Agent Template System" — CONTRIBUTING.md:126
> "This directory contains the shared agent template system for generating platform-specific agent definitions." — templates/README.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 126 | defined here | Section heading detailing contributor workflows for editing, regenerating, and verifying multi-platform agents. |
| templates/README.md | 3 | defined here | Introduces the shared template architecture that compiles platform-specific agent manifests. |

## Consumes
Shared agent template files (`templates/agents/*.shared.md`), platform configurations (`templates/platforms/*.yaml`), and toolsets.

## Produces
Compiled, platform-specific agent files for VS Code (`src/vs-code-agents/`) and Copilot CLI (`src/copilot-cli/agents/`).

## When applied
Applied when authoring new agents or modifying existing agent instructions to maintain multi-platform parity.

## Sub-concepts
template-based-generation-system, platform-configs, generated-files, handoffsyntax

## Part of
none

## Implementation status
defects: doc-drift, cross-file-contradiction, internal-contradiction

## Design notes
Architectural mechanism for single-sourcing agent definitions, ensuring that core identities and constraints remain synchronized across distinct AI development environments while allowing platform-tailored frontmatter and toolsets.
