---
package: matt
name: claude plugin validate . --strict
slug: claude-plugin-validate-strict
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# claude plugin validate . --strict

## Definition — verbatim
(used, not defined)
> "Verified end to end: `claude plugin validate . --strict` passes, and `marketplace add` → `install` resolves all promoted skills." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 11 | used here | Cited in ADR as validation command proving manifest correctness |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
claude-code-plugin

## Implementation status
clean

## Design notes
CLI command used to validate Claude Code plugin manifests and directory structures; recorded as a name-only card representing a validation tool invocation rather than an engineering lifecycle concept.
