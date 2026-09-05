---
package: matt
path: external/resolving-merge-conflicts.md
type: external-doc
bytes: 339023
unit: inv-matt-23
deprecated: false
aliases: []
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/resolving-merge-conflicts.md

## Purpose — required, verbatim
> "Finish a merge or rebase conflict, hunk by hunk." — external/resolving-merge-conflicts.md:24

The first substantive paragraph describes its role:
> "works through an in-progress git merge or rebase, hunk by hunk, then runs the project&#x27;s own checks and finishes the operation with a commit." — external/resolving-merge-conflicts.md:25

## Design intent — required
Prevents AI coding agents and developers from resolving git merge or rebase conflicts mechanically through flags (`--ours` or `--theirs`) or naive text splicing to force code compilation. Enforces a disciplined resolution loop that traces each conflicting hunk back to primary sources (commit messages, PRs, original tickets/issues) to preserve the underlying intent on both parent branches, strictly forbids aborting the merge or inventing synthetic behavior, and mandates discovering and executing native automated checks (typecheck, tests, format) green before committing the resolution. Without it, agents resolve conflicts by superficial diff truncation that silently drops intentional functionality or introduces subtle regressions.

## Phase — required
matt:Upkeep (in documentation navigation series item 4.3; also described as "A reach-for-it-anytime standalone with no dependencies on any other skill: it starts when git stalls and ends when the tree is clean and committed." — external/resolving-merge-conflicts.md:51)

## Inputs — required
- In-progress merge or rebase with conflict markers: "when git has already stopped on conflicts it could not resolve itself." — external/resolving-merge-conflicts.md:29 ("Mid-merge or mid-rebase, conflict markers in the tree" — external/resolving-merge-conflicts.md:30)
- Primary sources in git history: "the history (commits, PRs," — external/resolving-merge-conflicts.md:33; "tickets" — external/resolving-merge-conflicts.md:33; "commit messages, PRs or issues" — external/resolving-merge-conflicts.md:44
- Conflicting files and diff hunks: "diff hunks" — external/resolving-merge-conflicts.md:44
- Stated goal of the merge: "the merge&#x27;s stated goal" — external/resolving-merge-conflicts.md:26
- Repository automated verification checks: "the repo&#x27;s own" — external/resolving-merge-conflicts.md:33; "automated checks" — external/resolving-merge-conflicts.md:33 ("Typecheck, tests and format were located and run green" — external/resolving-merge-conflicts.md:47)

## Outputs — required
- Reconciled diff hunks preserving compatible behavior: "Every hunk ends up with both sides&#x27; behaviour, or with an explicit note naming what was dropped and why." — external/resolving-merge-conflicts.md:45
- Non-fabricated resolution: "Nothing appears in the result that was on neither branch." — external/resolving-merge-conflicts.md:46
- Clean working tree with completed operation: "You end on a clean tree with the operation completed, including every remaining commit in a multi-commit rebase." — external/resolving-merge-conflicts.md:48
- Final commit finishing operation: "finishes the operation with a commit." — external/resolving-merge-conflicts.md:25

## Invokes — required
- command /resolving-merge-conflicts — external/resolving-merge-conflicts.md:28
- skill diagnosing-bugs — external/resolving-merge-conflicts.md:30
- skill ask-matt — external/resolving-merge-conflicts.md:51

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — external/resolving-merge-conflicts.md:25 — defined here
- `rebase` — external/resolving-merge-conflicts.md:25 — used here
- `primary source` — external/resolving-merge-conflicts.md:26 — used here
- `commit message` — external/resolving-merge-conflicts.md:26 — used here
- `PR` — external/resolving-merge-conflicts.md:26 — used here
- `original issue` — external/resolving-merge-conflicts.md:26 — used here
- `trade-off` — external/resolving-merge-conflicts.md:26 — used here
- `--abort` — external/resolving-merge-conflicts.md:26 — used here
- `/resolving-merge-conflicts` — external/resolving-merge-conflicts.md:28 — used here
- `agent` — external/resolving-merge-conflicts.md:28 — used here
- `conflict markers` — external/resolving-merge-conflicts.md:30 — used here
- `diagnosing-bugs` — external/resolving-merge-conflicts.md:30 — used here
- `ours` — external/resolving-merge-conflicts.md:31 — used here
- `theirs` — external/resolving-merge-conflicts.md:31 — used here
- `--ours` — external/resolving-merge-conflicts.md:32 — used here
- `--theirs` — external/resolving-merge-conflicts.md:32 — used here
- `tickets` — external/resolving-merge-conflicts.md:33 — used here
- `automated checks` — external/resolving-merge-conflicts.md:33 — used here
- `Claude Code` — external/resolving-merge-conflicts.md:35 — used here
- `feedback loops` — external/resolving-merge-conflicts.md:36 — used here
- `model` — external/resolving-merge-conflicts.md:36 — used here
- `parallel tasks` — external/resolving-merge-conflicts.md:38 — used here
- `parallel worktrees` — external/resolving-merge-conflicts.md:39 — used here
- `sessions` — external/resolving-merge-conflicts.md:39 — used here
- `context` — external/resolving-merge-conflicts.md:39 — used here
- `diff hunks` — external/resolving-merge-conflicts.md:44 — used here
- `typecheck` — external/resolving-merge-conflicts.md:47 — used here
- `tests` — external/resolving-merge-conflicts.md:47 — used here
- `format` — external/resolving-merge-conflicts.md:47 — used here
- `multi-commit rebase` — external/resolving-merge-conflicts.md:48 — used here
- `standalone` — external/resolving-merge-conflicts.md:51 — defined here
- `ask-matt` — external/resolving-merge-conflicts.md:51 — used here
- `Upkeep` — external/resolving-merge-conflicts.md:5 — used here

## Structure
- The /resolving-merge-conflicts Skill (h1)
- What it does (h2)
- When to reach for it (h2)
- Primary sources over ours and theirs (h2)
- Common questions (h2)
- It&#x27;s working if (h2)
- Where it fits (h2)
- Related reading (h2)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/resolving-merge-conflicts.md:1 — External documentation snapshot fetched from https://aihero.dev/skills-resolving-merge-conflicts; nothing within the source repository references this external documentation path directly.
- doc-drift — external/resolving-merge-conflicts.md:28 — External documentation presents the skill as slash command "/resolving-merge-conflicts", but in the source repository skills/engineering/resolving-merge-conflicts/SKILL.md defines a skill without a corresponding command file.
- doc-drift — external/resolving-merge-conflicts.md:30 — External documentation provides a comparative routing table directing users to "diagnosing-bugs" ("Merge finished, something now misbehaves for reasons you can&#x27;t see" -> "diagnosing-bugs"), but the in-repo skill definition skills/engineering/resolving-merge-conflicts/SKILL.md does not mention or cross-reference diagnosing-bugs.

## Observations
- Strict refusal of text-only conflict resolution: Explicitly warns against resolving by mechanical flags (--ours, --theirs) or naive line splicing ("The failure mode this exists to kill is resolving by flag" — external/resolving-merge-conflicts.md:32; "It refuses to treat a conflict as a text problem." — external/resolving-merge-conflicts.md:26).
- Mandatory primary source inspection: Directs the agent to consult commit logs, pull request bodies, and issue tickets before touching conflict hunks, ensuring intent is preserved across both branches.
- Prohibition of aborting merges: Enforces completing the merge rather than abandoning it ("Aborting throws away the resolution work and returns you to the same conflict, unchanged, the next time you try." — external/resolving-merge-conflicts.md:41; "the merge is always carried to a finished commit." — external/resolving-merge-conflicts.md:26).
- Pre-commit automated verification: Recognizes that reconciling code often creates synthetic states that satisfy neither parent branch, requiring tests, typecheck, and formatting to run green before committing ("a merge is the easiest place in git to produce code that satisfies both branches and passes neither&#x27;s tests." — external/resolving-merge-conflicts.md:33).
- Parallel worktree guidance: Discourages arbitrary file zoning between parallel agents as overly costly, but emphasizes that the specific session that created a change should merge it back to preserve intent context ("the merge back is best done by the session that wrote the change, because it is the one that already knows the intent." — external/resolving-merge-conflicts.md:39).
- Web document overhead: Raw snapshot is 339,023 bytes (~84,755 tokens) due to Next.js framework scripts, serialized state, SVG icons, and HTML navigation menus, whereas the substantive guide prose is ~5 KB (~1,300 tokens).

## Context cost
339,023 bytes (raw HTML snapshot). If loaded in full into LLM context, consumes ~84,755 tokens. The actual article prose alone is ~5 KB (~1,300 tokens).
