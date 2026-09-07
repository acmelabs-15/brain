---
package: rjm
name: delete-and-re-home
slug: delete-and-re-home
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# delete-and-re-home

## Definition — verbatim
> "mechanism for hooks is delete-and-re-home, not overlay." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 175 | defined here | Disposal strategy removing internal dev-protocol hooks from plugins and relocating them to Lefthook/CI. |

## Consumes
Inventory of vendored hooks and repository git hook configuration (`lefthook.yml`, CI workflows).

## Produces
Cleaned vendored plugin surfaces and relocated internal enforcement checks.

## When applied
Applied during hook cleanup and plugin packaging refactoring.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
defects: missing-path, doc-drift

## Design notes
Delete-and-re-home is an architectural disposal pattern for hooks that enforce repository-internal developer protocols. Rather than creating a complex local hook overlay for internal developers, protocol enforcers (such as session log checks or PR format linters) are deleted completely from the vendored plugin and re-homed into repo-native tooling like Lefthook and CI.
