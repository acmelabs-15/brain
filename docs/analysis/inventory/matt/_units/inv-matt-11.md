---
unit: inv-matt-11
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-11

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/code-review.md

## Outputs produced
- docs/analysis/inventory/matt/external-code-review-md.md (8066 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-11 inventories the single external documentation page `sources/matt-external/code-review.md` (359,558 bytes, 76 lines) corresponding to manifest row `external/code-review.md`.
- Key findings and cross-unit relationships:
  - `external/code-review.md` is an HTML snapshot of `https://aihero.dev/skills-code-review`, which serves as the public documentation and deep-dive guide for the `code-review` skill (`sources/matt/skills/engineering/code-review/SKILL.md`).
  - The page documents the two-axis architecture:
    1. Standards axis: verifies repository-documented standards (`CODING_STANDARDS.md`, `CONTRIBUTING.md`) falling back on a 12-smell baseline from Fowler's *Refactoring* ch. 3 (Mysterious Name, Duplicated Code, Feature Envy, Data Clumps, Primitive Obsession, Repeated Switches, Shotgun Surgery, Divergent Change, Speculative Generality, Message Chains, Middle Man, Refused Bequest). The repo always overrides the baseline; findings are judgement calls with "what it is → how to fix" moves attached.
    2. Spec axis: verifies whether the change implements the originating issue or spec (retrieved via `docs/agents/issue-tracker.md`, user arguments, `docs/`/`specs/`/`.scratch/` spec files, or user prompt). Checks for missing requirements, scope creep, and improper implementations, citing spec line numbers.
  - Non-merged reporting: the two axes are never blended or reranked, reporting separate worst issues per axis. This ensures that syntactic adherence cannot mask functional divergence and vice versa.
  - Lifecycle position: placed as step 2.5 of "The Main Flow" (`grill-with-docs → to-spec → to-tickets → implement → code-review`), acting as the closing review step of the build chain (specifically called by `implement` before committing) or as a standalone diff reviewer on branches or PRs.
  - Defect and drift notes:
    - Name collision: documents the open collision with Claude Code's built-in `/code-review` command (which hunts bugs in diffs rather than standards/spec compliance). Details workarounds (marketplace prefixing, shadowing, removing built-in skills, or local skill renaming/forking).
    - Sub-agent recursion bug: documents an open bug where sub-agent briefs lack delegation prohibitions, leading to recursive spawning of sub-agents (up to 50+ agents reported). Suggests prompt append ("Do not invoke `/code-review` or spawn additional agents: perform this review directly.") or harness guards.
    - Lack of convergence guarantee: notes that the judgement-call half of the Standards axis is non-deterministic, warning against running review loops until clean.
    - Working-tree invisibility: verifies that review diffs `<fixed-point>...HEAD` three-dot from merge-base, meaning uncommitted work is invisible unless committed first.
  - Authoritative source: while `external/code-review.md` provides richer troubleshooting, workarounds, and rationales, `sources/matt/skills/engineering/code-review/SKILL.md` contains the authoritative agent prompt specifications.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~89,890 tokens (359,558 bytes across 1 file); approximate tokens of output written: ~2,100 tokens (8,066 bytes in inventory card).
