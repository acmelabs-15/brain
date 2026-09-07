---
package: rjm
name: markdown_auto_lint
slug: markdown-auto-lint
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdown_auto_lint

## Definition — verbatim
(used, not defined)

> "`markdown_auto_lint` under ADR-085 sections 9 and 10, a placement judgment" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 195 | used here | Automated markdown linting hook deleted under ADR-085 sections 9 and 10 |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 77 | used here | Deleted hook script removed under issue #5154 |

## Consumes
Unformatted markdown file content.

## Produces
Automatically formatted and linted markdown content.

## When applied
Applied during markdown file write operations prior to hook retirement.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
markdown_auto_lint was an automated formatting technique for markdown files that corrected lint violations on the fly, later deleted from hook dispatch in favor of pre-commit git workflows.
