---
package: rjm
name: default_targets
slug: default-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/check_docs_safety.py, sha256: 1853c181c749bc1f147533aab5a23ab12b03170a1a9526d3bf72c5c6055eaea7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# default_targets

## Definition — verbatim
(used, not defined)

> "def default_targets(repo_root: Path) -> list[Path]:" — .claude/skills/skillforge/scripts/check_docs_safety.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/check_docs_safety.py | 24 | defined here | Function returning the default list of documentation files to scan for unsafe hook interpolations. |

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
default_targets is a Python helper function identifier resolving default markdown files for safety verification rather than an operational lifecycle concept, classified as name-only per D-023.
