---
package: rjm
name: markdownlint-cli2
slug: markdownlint-cli2
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: scripts/ci/validate_vendor_provenance.py, sha256: 65858093c108f169cc0e34423abc589c0d79f7047b2211c82c7e4457c57d0a9c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdownlint-cli2

## Definition — verbatim
(used, not defined)

> "5. Lint - Markdown lint via markdownlint-cli2" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 9 | used here | Category 5 quality gate check invoking external markdown linter. |
| .claude/skills/slashcommandcreator/SKILL.md | 194 | used here | Verification checklist requirement that created command passes markdownlint-cli2 validation. |
| scripts/ci/validate_vendor_provenance.py | 365 | used here | Path pin referencing vendored markdownlint-cli2 binary entrypoint in vendor integrity checks. |

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
defects: doc-drift, internal-contradiction, script-bug, exit-code-mismatch, missing-path

## Design notes
An external Node.js markdown linting CLI utility and package name used for static formatting validation rather than an agent lifecycle concept.
