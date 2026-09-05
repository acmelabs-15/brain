---
package: addy
path: .gitattributes
type: config
bytes: 19
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gitattributes, sha256: d60f352d0db1404c70afb4bb8b2ca3fd1c610572aa40720e8a0b7baa7885418c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gitattributes

## Purpose — required, verbatim
> "* text=auto eol=lf" — .gitattributes:1

(no explicit purpose statement)

## Design intent — required
Git repository configuration enforcing line-ending normalization (LF) across all operating systems and automatically detecting text files to prevent cross-platform formatting conflicts.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Git checkout and commit line-ending behavior for repository files.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `eol=lf` — .gitattributes:1 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard Git configuration setting `* text=auto eol=lf`.

## Context cost
19 bytes, ~5 tokens.
