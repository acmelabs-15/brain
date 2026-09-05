---
package: matt
path: .changeset/remove-em-dashes-repo-wide.md
type: doc
bytes: 350
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .changeset/remove-em-dashes-repo-wide.md

## Purpose — required, verbatim
> "Remove every em-dash from the repo's prose (docs, `SKILL.md` files, ADRs, `README.md`, scripts, JSON/YAML metadata), hand-rewriting each sentence with a comma, colon, period, parentheses, or conjunction rather than mechanically substituting the character. `CLAUDE.md`/`AGENTS.md` now says not to reintroduce them." — .changeset/remove-em-dashes-repo-wide.md:5
(no explicit purpose statement)

## Design intent — required
Documents a changeset patch for `mattpocock-skills` recording the repo-wide editorial policy of eliminating em-dashes across all prose, documentation, skills, scripts, and metadata in favor of conventional punctuation, and updating agent instructions (`CLAUDE.md` and `AGENTS.md`) to prevent reintroduction.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `em-dash` — .changeset/remove-em-dashes-repo-wide.md:5 — used here
- `mattpocock-skills` — .changeset/remove-em-dashes-repo-wide.md:2 — used here
- `patch` — .changeset/remove-em-dashes-repo-wide.md:2 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The changeset enforces an explicit writing style constraint avoiding em-dashes, which ironically contrasts with the synthesis project's citation format requirement using em-dashes. It also explicitly cross-references `CLAUDE.md` and `AGENTS.md`.

## Context cost
350 bytes, approximately 85 tokens.
