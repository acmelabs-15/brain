#!/usr/bin/env bash
# A brain repo mid-build on its feature branch, feat/text-tools, with a remote whose default
# branch is main. main holds only a README. The feature branch holds setup-brain's workspace.md,
# the text module and one spec folder, SPEC-001: five open tasks that need nothing and share no
# file, then a checkpoint, then a task behind it. Claude Code bases a sub-agent's worktree on the
# remote's default branch unless worktree.baseRef is "head"
# (https://code.claude.com/docs/en/worktrees#choose-the-base-branch), so a worktree here starts
# without the feature's files until it is brought to the branch's head. setup-brain's
# workspace.md comes from the plugin, found from this script; the case fails loudly when it is not.
set -euo pipefail
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
git init -q -b main .
git config user.email eval@example.com
git config user.name eval
printf '# text-tools\n' > README.md
git add README.md
git commit -qm "initial"
# The remote lives inside .git, so it adds no file to the workspace and git status stays clean.
git init -q --bare -b main .git/origin.git
git remote add origin "$PWD/.git/origin.git"
git push -q origin main
git remote set-head origin main
git switch -q -c feat/text-tools
mkdir -p docs/agents docs/specs/SPEC-001-text-tools/tasks src/__tests__
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
printf 'node_modules/\n.claude/worktrees/\n' > .gitignore
printf '{ "name": "text-tools", "type": "module" }\n' > package.json
cat > src/text.ts <<'TEXT'
/** The words of a text: the runs of characters between spaces. */
export function words(text: string): string[] {
  return text.split(/\s+/u).filter((word) => word.length > 0);
}
TEXT
cat > src/__tests__/text.test.ts <<'TEXT_TEST'
import { expect, test } from "bun:test";
import { words } from "../text";

test("words", () => expect(words(" a  b c ")).toEqual(["a", "b", "c"]));
TEXT_TEST
cat > docs/specs/SPEC-001-text-tools/spec.md <<'SPEC'
---
spec: SPEC-001
sources: []
---
# SPEC-001: Text tools

## Objective
Five functions on a text, each in its own module on top of `words` in `src/text.ts`: the word count, the longest word, each word capitalized, the words in reverse order, and the distinct words. Then a summary that names the word count and the longest word.

## Commands
Install: `bun install`
Test: `bun test`

## Testing Strategy
`bun:test`, with the tests in `src/__tests__/`.
SPEC
cat > docs/specs/SPEC-001-text-tools/tasks/plan.md <<'PLAN'
---
spec: SPEC-001
---
# SPEC-001 plan: Text tools

## Overview
Five tasks each add one function on top of `words`, in a module of its own; they need nothing from each other and share no file. Checkpoint 06 closes that phase with a review. Task 07 then builds the summary on two of the five.

## Decisions
- None.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Count the words | task | open | — | — |
| 02 | Find the longest word | task | open | — | — |
| 03 | Capitalize each word | task | open | — | — |
| 04 | Reverse the words | task | open | — | — |
| 05 | List the distinct words | task | open | — | — |
| 06 | The text tools work | checkpoint | open | 01, 02, 03, 04, 05 | — |
| 07 | Summarize a text | task | open | 01, 02, 06 | — |

## Parallel waves
| Wave | Rows |
|---|---|
| 1 | 01, 02, 03, 04, 05 |
| 2 | 06 (checkpoint) |
| 3 | 07 |

Critical path, 3 rows: 01, 06, 07.

Files that more than one task in a wave touches: none.

Phases that share a wave: none.

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| A task changes `words` | low | Each task adds its own module and leaves `src/text.ts` as it is |

## Open questions
- None.
PLAN
cat > docs/specs/SPEC-001-text-tools/tasks/todo.md <<'TODO'
---
spec: SPEC-001
---
# SPEC-001 todo: Text tools

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Count the words

**Description:** `countWords(text)` in `src/count.ts` returns how many words `words` finds.

**Acceptance criteria:**
- [ ] `countWords("a b  c")` returns `3`

**Verification:**
- [ ] `bun test src/__tests__/count.test.ts` passes

**Files likely touched:**
- `src/count.ts`
- `src/__tests__/count.test.ts`

**Scope:** XS

## Task 02: Find the longest word

**Description:** `longestWord(text)` in `src/longest.ts` returns the longest word, the first one on a tie.

**Acceptance criteria:**
- [ ] `longestWord("a bbb cc")` returns `"bbb"`

**Verification:**
- [ ] `bun test src/__tests__/longest.test.ts` passes

**Files likely touched:**
- `src/longest.ts`
- `src/__tests__/longest.test.ts`

**Scope:** XS

## Task 03: Capitalize each word

**Description:** `capitalize(text)` in `src/capitalize.ts` returns the words, each with a capital first letter, joined by one space.

**Acceptance criteria:**
- [ ] `capitalize("ann lee")` returns `"Ann Lee"`

**Verification:**
- [ ] `bun test src/__tests__/capitalize.test.ts` passes

**Files likely touched:**
- `src/capitalize.ts`
- `src/__tests__/capitalize.test.ts`

**Scope:** XS

## Task 04: Reverse the words

**Description:** `reverseWords(text)` in `src/reverse.ts` returns the words in reverse order, joined by one space.

**Acceptance criteria:**
- [ ] `reverseWords("a b c")` returns `"c b a"`

**Verification:**
- [ ] `bun test src/__tests__/reverse.test.ts` passes

**Files likely touched:**
- `src/reverse.ts`
- `src/__tests__/reverse.test.ts`

**Scope:** XS

## Task 05: List the distinct words

**Description:** `distinctWords(text)` in `src/distinct.ts` returns each word once, in the order it first appears.

**Acceptance criteria:**
- [ ] `distinctWords("a b a")` returns `["a", "b"]`

**Verification:**
- [ ] `bun test src/__tests__/distinct.test.ts` passes

**Files likely touched:**
- `src/distinct.ts`
- `src/__tests__/distinct.test.ts`

**Scope:** XS

## Checkpoint 06: The text tools work
- [ ] `bun test` passes
- [ ] Review with the user

## Task 07: Summarize a text

**Description:** `summary(text)` in `src/summary.ts` names the word count and the longest word, from tasks 01 and 02.

**Acceptance criteria:**
- [ ] `summary("a bbb")` returns `"2 words, longest: bbb"`

**Verification:**
- [ ] `bun test src/__tests__/summary.test.ts` passes

**Files likely touched:**
- `src/summary.ts`
- `src/__tests__/summary.test.ts`

**Scope:** XS
TODO
git add -A && git commit -qm "scaffold"
