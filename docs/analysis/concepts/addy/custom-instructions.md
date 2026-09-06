---
package: addy
name: Custom Instructions
slug: custom-instructions
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Custom Instructions

## Definition — verbatim
(used, not defined)
> "### Custom Instructions (User Level)" — docs/copilot-setup.md:40

## Also called — verbatim
- `User rules` — docs/cursor-setup.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-setup.md | 40 | used here | Section header and instructions for configuring user-level global skill instructions in GitHub Copilot. |

## Consumes
User-level development preferences and global skill summaries.

## Produces
Persistent user-level instructions injected across all repositories in the IDE.

## When applied
Configured once in user IDE settings (such as VS Code Settings → GitHub Copilot → Custom Instructions) to provide account-wide guidelines.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Custom Instructions allow developers to inject standing engineering guidelines and skill summaries globally across all workspaces in GitHub Copilot, ensuring baseline practices persist without requiring per-repository configuration.
