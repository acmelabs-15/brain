---
package: rjm
name: doc-interpreter-portability
slug: doc-interpreter-portability
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# doc-interpreter-portability

## Definition — verbatim
> "doc-interpreter-portability: the defect this guard finds, quoted so it can be named" — scripts/validation/check_doc_interpreter_portability.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 6 | defined here | Defect identifier, comment opt-out marker, and interpreter-portability validation ratchet. |

## Consumes
Tracked documentation markdown files and script invocation snippets.

## Produces
Portability validation verdicts and ratchet baseline diffs ensuring scripts with third-party dependencies are invoked via `uv run python`.

## When applied
Executed during CI and pre-PR verification gates across all documented script command snippets.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A documentation portability gate and ratchet requiring that documented Python script invocations that rely on third-party dependencies specify `uv run python` rather than bare `python3`.
