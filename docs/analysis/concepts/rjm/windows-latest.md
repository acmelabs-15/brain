---
package: rjm
name: windows-latest
slug: windows-latest
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# windows-latest

## Definition — verbatim
(used, not defined)

> "| `windows-latest` | $0.016 | Required for Windows | Windows-specific needs |" — .agents/architecture/ADR-024-github-actions-runner-selection.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 76 | used here | Listed in pricing table as the $0.016/minute runner reserved exclusively for Windows-specific dependencies. |
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 46 | used here | Documented in available runners table as a 2x cost x64 runner requiring formal exception documentation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A GitHub-hosted runner environment identifier for Windows virtual machines, maintained as an infrastructure execution target rather than an agent lifecycle concept.
