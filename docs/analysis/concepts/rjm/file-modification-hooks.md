---
package: rjm
name: File modification hooks
slug: file-modification-hooks
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# File modification hooks

## Definition — verbatim
> "File modification hooks**: Enforce consistent formatting on save" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 49 | defined here | Specified as automated hooks to enforce formatting rules whenever files are modified and saved. |

## Consumes
File system modification and save events (`file.modify`).

## Produces
Formatted and validated source and document files.

## When applied
Triggered automatically whenever a file is saved during agent execution.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
not-implemented. Identified as a desired hook category in ADR-008 from claude-flow research, but in-tree formatting enforcement was implemented via pre-commit Lefthook and CI validators rather than runtime agent file save hooks.

## Design notes
Automated hooks triggered upon file modification to enforce structural and formatting consistency immediately at the point of change, preventing formatting errors from accumulating.
