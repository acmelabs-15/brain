---
package: rjm
name: Cleanup best-effort paths
slug: cleanup-best-effort-paths
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cleanup best-effort paths

## Definition — verbatim
> "The original error should still propagate." — .claude/agents/silent-failure-hunter.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 149 | defined here | Exemption rule permitting resource cleanup handlers to swallow secondary errors if observable. |
| templates/agents/silent-failure-hunter.shared.md | 159 | defined here | Shared template exemption rule for best-effort cleanup teardown logic. |

## Consumes
Resource disposal logic, finally blocks, lock releases, and temporary file deletions.

## Produces
Exemption from critical severity flagging when cleanup logic swallows secondary errors while preserving primary exceptions.

## When applied
Applied during false-positive verification when auditing teardown and resource release routines.

## Sub-concepts
none

## Part of
reducing-false-positives

## Implementation status
defects: other

## Design notes
Cleanup best-effort paths is an approved exception pattern where resource teardown (releasing locks, closing file handles) may catch and swallow secondary failures so long as the primary error propagates and cleanup failures remain observable.
