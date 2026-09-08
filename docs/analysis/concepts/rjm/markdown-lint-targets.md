---
package: rjm
name: _markdown_lint_targets
slug: markdown-lint-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _markdown_lint_targets

## Definition — verbatim
(used, not defined)

> "def _markdown_lint_targets(repo_root: Path) -> list[str] | None:" — scripts/validation/checks_tooling.py:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_tooling.py | 333 | defined here | Helper function identifying changed, non-vendored Markdown files on the current branch for scoped linting. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`_markdown_lint_targets` is a Python helper function in `scripts/validation/checks_tooling.py` resolving scoped markdown targets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
