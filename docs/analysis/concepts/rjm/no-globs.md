---
package: rjm
name: --no-globs
slug: no-globs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --no-globs

## Definition — verbatim
(used, not defined)

> "The `--no-globs` flag disables config file glob patterns, ensuring only specified files are processed." — .agents/architecture/ADR-043-scoped-tool-execution.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 71 | used here | Explains the markdownlint CLI argument intended to disable configuration file globs. |

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
defects: missing-path, internal-contradiction

## Design notes
A command-line flag identifier for markdownlint-cli2 rather than an agent lifecycle concept per D-023.
