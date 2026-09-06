---
package: addy
name: User rules
slug: user-rules
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# User rules

## Definition — verbatim
(used, not defined)
> "| **User rules** | Cursor Settings → Rules | Account-wide policies |" — docs/cursor-setup.md:15

## Also called — verbatim
- `Custom Instructions` — docs/copilot-setup.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 15 | used here | Defined in table as Cursor Settings → Rules providing account-wide policies. |

## Consumes
Personal engineering preferences, universal tool settings, and global policies.

## Produces
Persistent IDE configuration applied to all workspaces opened by that user.

## When applied
Configured at the user account level in IDE settings and active across every workspace session.

## Sub-concepts
none

## Part of
- `rules`

## Implementation status
clean

## Design notes
User rules configure persistent, account-wide policies and personal developer preferences within developer IDEs (such as Cursor Settings → Rules). They ensure individual operational expectations are met without cluttering repository-level configuration files.
