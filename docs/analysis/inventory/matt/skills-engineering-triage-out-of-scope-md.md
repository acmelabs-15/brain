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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/triage/OUT-OF-SCOPE.md

## Purpose — required, verbatim
> "The `.out-of-scope/` directory in a repo stores persistent records of rejected feature requests." — skills/engineering/triage/OUT-OF-SCOPE.md:3

## Design intent — required
Defines the directory structure, file naming conventions, document format, and maintenance protocol for a repository's `.out-of-scope/` knowledge base. Establishes institutional memory and prevents duplicate re-litigation of rejected feature requests by organizing records by concept (e.g. `dark-mode.md`) rather than by issue number. Enforces that only substantive rejections of enhancements (not bugs, and never features already implemented) are recorded here, requiring durable technical and philosophical justifications.

## Phase — required
cross-phase

## Inputs — required
Rejected enhancement issue or pull request, decision rationale from maintainer, and existing `.out-of-scope/*.md` files.

## Outputs — required
New or updated `.out-of-scope/<concept>.md` markdown files recording concept name, decision, reason, and prior request links.

## Invokes — required
none

## Invoked by — required
- reference OUT-OF-SCOPE.md — skills/engineering/triage/SKILL.md:22
- reference OUT-OF-SCOPE.md — skills/engineering/triage/SKILL.md:85

## Concepts named — required, verbatim
- `.out-of-scope/` — skills/engineering/triage/OUT-OF-SCOPE.md:3 — defined here
- `Institutional memory` — skills/engineering/triage/OUT-OF-SCOPE.md:5 — defined here
- `Deduplication` — skills/engineering/triage/OUT-OF-SCOPE.md:6 — defined here
- `Dark Mode` — skills/engineering/triage/OUT-OF-SCOPE.md:24 — used here
- `Prior requests` — skills/engineering/triage/OUT-OF-SCOPE.md:49 — defined here
- `enhancement` — skills/engineering/triage/OUT-OF-SCOPE.md:86 — used here
- `wontfix` — skills/engineering/triage/OUT-OF-SCOPE.md:86 — used here

## Structure
- `# Out-of-Scope Knowledge Base` — skills/engineering/triage/OUT-OF-SCOPE.md:1
- `## Directory structure` — skills/engineering/triage/OUT-OF-SCOPE.md:8
- `## File format` — skills/engineering/triage/OUT-OF-SCOPE.md:19
- `### Naming the file` — skills/engineering/triage/OUT-OF-SCOPE.md:56
- `### Writing the reason` — skills/engineering/triage/OUT-OF-SCOPE.md:60
- `When to check` — skills/engineering/triage/OUT-OF-SCOPE.md:70
- `When to write to` — skills/engineering/triage/OUT-OF-SCOPE.md:84
- `## Updating or removing out-of-scope files` — skills/engineering/triage/OUT-OF-SCOPE.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly guards against "false rejections" by instructing triage agents never to write an out-of-scope record when an issue is closed because the feature is already implemented in the codebase. Requires semantic concept matching rather than exact keyword search during triage checks.

## Context cost
4667 bytes, 106 lines, approximately 1100 tokens.
