---
package: rjm
name: Assessment
slug: assessment
kind: phase
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

# Assessment

## Definition — verbatim
> "Phase 1: Assessment - enumerate docs/source, extract symbols, build mapping" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 7 | defined here | First deterministic phase of documentation scanning enumerating doc/source files, extracting symbols, and building mapping. |

## Consumes
Target repository filesystem, source code files, and documentation trees.

## Produces
`assessment.json` containing enumerated files, extracted public symbols, and doc-to-source file mappings.

## When applied
First phase executed by the documentation accuracy scanner before claim extraction.

## Sub-concepts
sourcesymbol, docfile

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
Assessment is Phase 1 of the doc-accuracy verification pipeline. It scans the repository to catalog documentation files, index public API symbols across supported languages, and build associative mappings between documentation pages and implementation modules, creating the foundational symbol table for subsequent claim verification.
