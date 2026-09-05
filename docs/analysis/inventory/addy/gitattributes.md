---
package: addy
path: .gitattributes
type: config
bytes: 19
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gitattributes, sha256: d60f352d0db1404c70afb4bb8b2ca3fd1c610572aa40720e8a0b7baa7885418c}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gitattributes

## Purpose — required, verbatim
> "* text=auto eol=lf" — .gitattributes:1 (no explicit purpose statement)

## Design intent — required
Normalizes line endings across operating systems by forcing LF line terminators for all tracked text files in the repository.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `eol=lf` — .gitattributes:1 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard Git repository attribute configuration ensuring cross-platform LF consistency.

## Context cost
19 bytes, ~5 tokens.
