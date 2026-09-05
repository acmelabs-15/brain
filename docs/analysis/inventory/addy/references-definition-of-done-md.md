---
package: addy
path: references/definition-of-done.md
type: doc
bytes: 3798
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# references/definition-of-done.md

## Purpose — required, verbatim
> "A standing, project-wide bar that every change must clear before it counts as done." — references/definition-of-done.md:3

## Design intent — required
Establishes a standing, immutable quality and completion bar for changes across the entire software development lifecycle, contrasted against per-task acceptance criteria. By codifying standard expectations across correctness, code quality, system integration, documentation, and ship-readiness, it prevents incomplete or unverified work from being declared done under deadline pressure or sprint-by-sprint renegotiation.

## Phase — required
cross-phase

## Inputs — required
- Task or code increment submitted for completion — references/definition-of-done.md:15, 19
- Task-specific acceptance criteria — references/definition-of-done.md:9, 15, 22

## Outputs — required
- Gate verdict: pass/fail verification of whether an increment or release is done — references/definition-of-done.md:15, 51

## Invokes — required
- skill planning-and-task-breakdown — references/definition-of-done.md:3
- skill incremental-implementation — references/definition-of-done.md:3
- skill shipping-and-launch — references/definition-of-done.md:3, 50, 57
- skill code-review-and-quality — references/definition-of-done.md:35
- skill code-simplification — references/definition-of-done.md:35
- skill documentation-and-adrs — references/definition-of-done.md:44
- skill security-and-hardening — references/definition-of-done.md:48
- skill observability-and-instrumentation — references/definition-of-done.md:49

## Invoked by — required
- doc README.md — README.md:307
- skill shipping-and-launch — skills/shipping-and-launch/SKILL.md:268
- skill planning-and-task-breakdown — skills/planning-and-task-breakdown/SKILL.md:257
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:114
- skill incremental-implementation — skills/incremental-implementation/SKILL.md:249
- doc docs/getting-started.md — docs/getting-started.md:137

## Concepts named — required, verbatim
- `Definition of Done` — references/definition-of-done.md:1 — defined here
- `acceptance criteria` — references/definition-of-done.md:3 — used here
- `The Standing Checklist` — references/definition-of-done.md:17 — defined here
- `Correctness` — references/definition-of-done.md:21 — defined here
- `Quality` — references/definition-of-done.md:28 — defined here
- `five-axis review` — references/definition-of-done.md:35 — used here
- `Integration` — references/definition-of-done.md:37 — defined here
- `Documentation` — references/definition-of-done.md:42 — defined here
- `Ship-readiness` — references/definition-of-done.md:47 — defined here
- `Red Flags` — references/definition-of-done.md:61 — used here

## Structure
- # Definition of Done — references/definition-of-done.md:1
- ## Definition of Done vs. Acceptance Criteria — references/definition-of-done.md:5
- ## The Standing Checklist — references/definition-of-done.md:17
- ### Correctness — references/definition-of-done.md:21
- ### Quality — references/definition-of-done.md:28
- ### Integration — references/definition-of-done.md:37
- ### Documentation — references/definition-of-done.md:42
- ### Ship-readiness — references/definition-of-done.md:47
- ## How to Apply — references/definition-of-done.md:53
- ## Red Flags — references/definition-of-done.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Distinguishes between per-task scope (acceptance criteria answering "did we build the right thing?") and a standing cross-cutting quality floor (Definition of Done answering "is this finished to our standard?"). It scales across three operational granularities: per task (Correctness + Quality), per feature (Integration + Documentation), and per release (full checklist + deploy-specific gates).

## Context cost
3,798 bytes (approx. 950 tokens). Pure reference checklist with zero external script or asset dependencies.
