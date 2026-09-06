---
package: addy
path: hooks/SIMPLIFY-IGNORE.md
type: doc
bytes: 3863
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/SIMPLIFY-IGNORE.md

## Purpose — required, verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Design intent — required
Explains how to use `simplify-ignore.sh` to prevent AI coding agents from modifying or refactoring sensitive, hand-optimized, or critical code during `/code-simplify` workflows. Details hook setup across lifecycle events (`PreToolUse Read`, `PostToolUse Edit|Write`, `Stop`), annotation syntax variants, cache location, crash recovery commands, and known platform limitations.

## Phase — required
addy:Review

## Inputs — required
- Hook configuration in `.claude/settings.json` — hooks/SIMPLIFY-IGNORE.md:19
- Source code annotations using `simplify-ignore-start` and `simplify-ignore-end` markers — hooks/SIMPLIFY-IGNORE.md:16

## Outputs — required
- Documentation on backup storage in `.claude/.simplify-ignore-cache/` — hooks/SIMPLIFY-IGNORE.md:47
- Recovery instructions using `bash hooks/simplify-ignore.sh` — hooks/SIMPLIFY-IGNORE.md:76

## Invokes — required
- script hooks/simplify-ignore.sh — hooks/SIMPLIFY-IGNORE.md:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `simplify-ignore hook` — hooks/SIMPLIFY-IGNORE.md:1 — defined here
- `/code-simplify` — hooks/SIMPLIFY-IGNORE.md:3 — used here
- `simplify-ignore-start` — hooks/SIMPLIFY-IGNORE.md:10 — defined here
- `simplify-ignore-end` — hooks/SIMPLIFY-IGNORE.md:16 — defined here
- `PreToolUse` — hooks/SIMPLIFY-IGNORE.md:24 — used here
- `PostToolUse` — hooks/SIMPLIFY-IGNORE.md:30 — used here
- `Stop` — hooks/SIMPLIFY-IGNORE.md:36 — used here
- `Crash recovery` — hooks/SIMPLIFY-IGNORE.md:71 — defined here
- `Known limitations` — hooks/SIMPLIFY-IGNORE.md:81 — defined here

## Structure
- # simplify-ignore hook — hooks/SIMPLIFY-IGNORE.md:1
- ## Setup — hooks/SIMPLIFY-IGNORE.md:5
- ## How it works — hooks/SIMPLIFY-IGNORE.md:49
- ## Annotation syntax — hooks/SIMPLIFY-IGNORE.md:61
- ## Crash recovery — hooks/SIMPLIFY-IGNORE.md:71
- ## Known limitations — hooks/SIMPLIFY-IGNORE.md:81
- ## Requirements — hooks/SIMPLIFY-IGNORE.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents manual recovery command (`echo '{}' | bash hooks/simplify-ignore.sh`) for restoring files if the agent host terminates abruptly without firing the `Stop` hook event. Also notes that comment suffix matching covers `*/` and `-->` only.

## Context cost
3863 bytes, approximately 920 tokens.
