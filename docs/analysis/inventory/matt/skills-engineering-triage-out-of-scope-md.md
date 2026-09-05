---
package: matt
path: skills/engineering/triage/OUT-OF-SCOPE.md
type: skill
bytes: 4667
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/triage/OUT-OF-SCOPE.md

## Purpose — required, verbatim
> "The `.out-of-scope/` directory in a repo stores persistent records of rejected feature requests." — skills/engineering/triage/OUT-OF-SCOPE.md:3

## Design intent — required
Specification for the `.out-of-scope/` repository knowledge base used during triage. Provides persistent institutional memory explaining why feature requests were rejected, and prevents recurring re-litigation of previously decided enhancement requests through concept-based deduplication. Restricts entry creation strictly to rejected enhancements (not bugs or already-implemented features), defines human-readable design-document markdown schemas, and details protocol triggers for checking, writing, updating, or removing out-of-scope concept records.

## Phase — required
none

## Inputs — required
- Markdown files located in `.out-of-scope/` — skills/engineering/triage/OUT-OF-SCOPE.md:72
- Incoming issues and pull requests evaluated during triage — skills/engineering/triage/OUT-OF-SCOPE.md:72, 86

## Outputs — required
- Concept files under `.out-of-scope/<concept>.md` recording rejection rationale and prior request references — skills/engineering/triage/OUT-OF-SCOPE.md:95

## Invokes — required
none

## Invoked by — required
- skill triage — skills/engineering/triage/SKILL.md:22

## Concepts named — required, verbatim
- `Out-of-Scope Knowledge Base` — skills/engineering/triage/OUT-OF-SCOPE.md:1 — defined here
- `Institutional memory` — skills/engineering/triage/OUT-OF-SCOPE.md:5 — defined here
- `Deduplication` — skills/engineering/triage/OUT-OF-SCOPE.md:6 — defined here
- `concept` — skills/engineering/triage/OUT-OF-SCOPE.md:17 — defined here
- `wontfix` — skills/engineering/triage/OUT-OF-SCOPE.md:86 — used here

## Structure
- Out-of-Scope Knowledge Base
- Directory structure
- File format
- Naming the file
- Writing the reason
- When to check .out-of-scope/
- When to write to .out-of-scope/
- Updating or removing out-of-scope files

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly prohibits logging already-implemented features in `.out-of-scope/`, as doing so would poison deduplication matching with false rejections. Enforces semantic concept matching rather than rigid keyword matching.

## Context cost
4667 bytes, 106 lines, ~1170 tokens. Loads no external files.
