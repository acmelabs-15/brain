---
package: rjm
name: Documentation Accuracy Scanner
slug: documentation-accuracy-scanner
kind: technique
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

# Documentation Accuracy Scanner

## Definition — verbatim
> "Documentation Accuracy Scanner - Phases 1-3." — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 2 | defined here | Module docstring defining the scanner engine executing deterministic Phases 1-3 of doc accuracy verification. |

## Consumes
Target repository containing source code and documentation Markdown files.

## Produces
JSON artifacts (`assessment.json`, `claims.json`, `compilability-findings.json`, `gate-result.json`) and Markdown reports.

## When applied
Executed during build verification and CI quality gates to verify documentation claims against codebase truth.

## Sub-concepts
assessment, claim-extraction, compilability

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
The Documentation Accuracy Scanner is the deterministic engine powering Phases 1-3 of the doc-accuracy skill. It extracts public symbols from code, parses markdown documentation for verifiable claims, and verifies that code example symbols actually exist in the codebase, preventing documentation drift from passing undetected into release artifacts.
