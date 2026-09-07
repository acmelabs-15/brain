---
package: rjm
name: Multi-tool Artifact Build System
slug: multi-tool-artifact-build-system
kind: artifact
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-tool Artifact Build System

## Definition — verbatim
> "# REQ-003: Multi-tool Artifact Build System" — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 11 | defined here | Specified as the multi-tool compilation architecture translating Claude Code artifacts to Copilot CLI. |

## Consumes
Canonical Claude Code artifacts (`.claude/`), platform configuration mappings (`templates/platforms/copilot-cli.yaml`).

## Produces
Native GitHub Copilot CLI artifacts (`src/copilot-cli/`) including agents, skills, commands, rules, and hook configurations.

## When applied
Executed during build and artifact generation phases to synchronize multi-tool agent distributions.

## Sub-concepts
generate-artifact-py, directory-copy, eventremap, eventdrop

## Part of
req-003

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Multi-tool Artifact Build System` specifies rjm's multi-platform artifact generation architecture. Addressing divergent native conventions between Claude Code and GitHub Copilot CLI, it establishes a single canonical authoring source with automated generator scripts, frontmatter mapping, and hook event dispatching to maintain feature parity across both harnesses.
