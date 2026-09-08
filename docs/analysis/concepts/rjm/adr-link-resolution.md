---
package: rjm
name: ADR Link Resolution
slug: adr-link-resolution
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Link Resolution

## Definition — verbatim
> "ADR Link Resolution" — scripts/validation/pre_pr_sequence.py:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 268 | defined here | Pre-PR gate verifying that markdown links referencing ADRs resolve to valid target files and matching ADR numbers. |

## Consumes
Markdown documents containing cross-references and links to architectural decision records.

## Produces
Pass/fail gate verdict ensuring all ADR links resolve to existing, numbered files.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
ADR Link Resolution is an automated gate (Issue #5197) that validates all markdown links referencing ADR documents. By verifying that every link pointing to ADR-NNN actually targets the corresponding decision file, it prevents documentation rot and broken cross-references across architecture records.
