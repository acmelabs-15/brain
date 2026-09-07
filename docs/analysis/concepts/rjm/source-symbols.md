---
package: rjm
name: source symbols
slug: source-symbols
kind: artifact
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# source symbols

## Definition — verbatim
> "1: Error or inconclusive run, including no source symbols for Phase 3" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 13 | used here | Exit code condition specifying that an empty source symbols collection results in an inconclusive exit 1. |

## Consumes
Source code AST and regex extractors across supported programming languages.

## Produces
The indexed symbol dictionary in `assessment.json` used by Phase 3 compilability checks.

## When applied
Extracted during Phase 1 assessment and queried during Phase 3 compilability verification.

## Sub-concepts
sourcesymbol

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
Source symbols are the collection of extracted public programmatic identifiers (classes, methods, functions, constructors) harvested from repository code. They form the canonical reference set against which documentation code examples and API claims are mechanically verified.
