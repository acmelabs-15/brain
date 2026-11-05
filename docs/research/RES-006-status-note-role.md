---
id: RES-006
status: resolved # in-progress | resolved
kind: research
from: user # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-04
---
# RES-006: What reads and writes docs/STATUS.md

## Question
What reads and writes `docs/STATUS.md`, and did any record plan to retire it? The row has four parts:

1. Which code, tests, hooks and templates read or write the file at HEAD, and what breaks or changes for each when the file is absent.
2. What the file gives an agent or a user that `brain status` cannot work out from the idea maps and the plan rows alone.
3. Whether any commit, pull request, decision record, research record, spec or plan ever proposed to retire, replace or shrink the file, and what became of each proposal.
4. How the file's role changed over time, from its first commit to HEAD.

HEAD is f29cc6b7. "The note" below means `docs/STATUS.md`, which the code calls the handoff note. A "run" below was done on a scratch copy or a clone, never on this repo's files. Each `docs/STATUS.md:N` cites HEAD's version of the file.

## Findings

### Part 1: what reads and writes the file at HEAD

- `brain status` is the only code that reads the note's text. Its path is a constant, and `workspace.md` has no setting for it. Source: scripts/workspace/status.ts:29, scripts/workspace/status.ts:179-197, scripts/workspace/config.ts:12, checked 2026-11-04.
- `brain status` writes no file, and a test hashes the tree before and after it. Source: scripts/workspace/status.ts:6, scripts/workspace/__tests__/status.test.ts:457-464, checked 2026-11-04.
- The parser takes four labels: `Next`, `Next step`, `Waiting on the user` and `Waiting`. The first line with a label wins. The status skill names three of the four. Source: scripts/workspace/status.ts:186-195, skills/status/SKILL.md:54, checked 2026-11-04.
- With no note, `brain status` exits 0. `note` is null, the next-step line comes from the rows, and the waiting line comes from the decide rows on the frontier. Source: scripts/workspace/status.ts:181-183, scripts/workspace/status.ts:223-236, scripts/workspace/status.ts:263, scripts/workspace/__tests__/status.test.ts:157-170, checked 2026-11-04.
- With no note and no active effort, the next-step line reads `none`. With the seed, the same line quotes the seed's text. Source: scripts/workspace/status.ts:231-235, scripts/workspace/__tests__/status.test.ts:139-153, run on a copy of the no-active-work fixture with the note removed, checked 2026-11-04.
- The `SessionStart` hook does not open the file. It runs `brain status --json` and prints `note.text` under a `# docs/STATUS.md` heading. Source: scripts/hooks/session-start.ts:75, scripts/hooks/session-start.ts:101-102, checked 2026-11-04.
- With no note, the hook prints `This repo has no docs/STATUS.md.` in that place. The rest of its text stays the same. Source: scripts/hooks/session-start.ts:101, scripts/hooks/__tests__/session-start.test.ts:272-286, run on a copy of the workspace with the note removed, checked 2026-11-04.
- The hook cuts the status text, and with it the note, when the whole text reaches 10,000 characters. It never cuts the protocol. Source: scripts/hooks/session-start.ts:16, scripts/hooks/session-start.ts:106-115, scripts/hooks/__tests__/session-start.test.ts:306-318, checked 2026-11-04.
- Only Claude Code runs this hook. The `hooks` key appears in its manifest alone. `hooks/session-start.sh` is a different script, and no manifest wires it. Source: .claude-plugin/plugin.json:33, scripts/hooks/claude-code.json:1-14, scripts/lifecycle/check-refs.ts:125, checked 2026-11-04.
- `scripts/setup/write.ts` is the only script that writes the file in a user's repo. It writes the seed when the file is absent, and it reports `unchanged` when the file exists. Source: scripts/setup/write.ts:255-263, scripts/setup/write.ts:294, scripts/setup/__tests__/write.test.ts:88-96, scripts/setup/__tests__/write.test.ts:130-135, checked 2026-11-04.
- With no note, a `setup-brain` run writes the seed back. `write.ts --check` lists `created docs/STATUS.md` and exits 1, so a repo with no note counts as drift. `--dry-run` lists the same line and exits 0. Source: scripts/setup/write.ts:256-263, scripts/setup/write.ts:427-435, scripts/setup/write.ts:469-475, run on a copy of the workspace with the note removed, checked 2026-11-04.
- After the seed, only an agent writes the note. The standing rule is step 4 of the protocol's task end, and it has no condition. The hook injects the protocol, and four generated files repeat the step. Source: protocol/PROTOCOL.md:52, scripts/hooks/session-start.ts:155, protocol/AGENTS-block.md:55, rules/protocol.md:59, AGENTS.md:131, GEMINI.md:94, checked 2026-11-04.
- interview-me tells the agent to rewrite the note after a re-map, but only "when the repo has one". Source: skills/interview-me/SKILL.md:187, checked 2026-11-04.
- using-brain and stage-boundaries say the build updates the note after every task. No build skill and no build command names the note. Source: skills/using-brain/SKILL.md:99, references/brain/stage-boundaries.md:16, `git grep -l STATUS.md -- skills commands references` at f29cc6b7, checked 2026-11-04.
- The vendored handoff skill does not name the note, so the shared word "handoff" links nothing. Source: skills/handoff/SKILL.md, upstream.lock.json:151, `git grep -l STATUS.md -- skills` at f29cc6b7, checked 2026-11-04.
- When `brain status` cannot run, the protocol has the agent read the note and the active effort's map. With no note, the map still gives the frontier. Source: protocol/PROTOCOL.md:5, skills/status/SKILL.md:58, checked 2026-11-04.
- `brain check` does not read the note. A clone of f29cc6b7 with the note removed gives `no finding`. Source: scripts/workspace/check.ts:320-353, run on a clone of f29cc6b7, checked 2026-11-04.
- brain's tests do not read brain's own note. In that clone, all 709 tests in `scripts/workspace`, `scripts/hooks`, `scripts/setup` and `scripts/evals` pass, and `scripts/lifecycle/check-refs.ts` passes. Source: scripts/hooks/__tests__/session-start.test.ts:98-100, run on a clone of f29cc6b7, checked 2026-11-04.
- Two fixtures hold a note, and two hold none on purpose. Their four READMEs describe this in seven lines. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/docs/STATUS.md:1, scripts/workspace/__tests__/fixtures/no-active-work/docs/STATUS.md:1, scripts/workspace/__tests__/fixtures/spec-mid-build/README.md:12, scripts/workspace/__tests__/fixtures/layout-0.8/README.md:21, checked 2026-11-04.
- The seed template is `skills/setup-brain/STATUS.md`. A test forbids a labelled line in it, because a seeded `Next:` would still win after interview-me charts the first idea. Source: skills/setup-brain/STATUS.md:1-3, scripts/setup/__tests__/write.test.ts:811-817, checked 2026-11-04.
- The setup-brain skill states the seed rule on six lines, and the code above carries each of them. Source: skills/setup-brain/SKILL.md:3, skills/setup-brain/SKILL.md:12, skills/setup-brain/SKILL.md:36, skills/setup-brain/SKILL.md:45, skills/setup-brain/SKILL.md:161, skills/setup-brain/SKILL.md:178, checked 2026-11-04.
- Two eval cases grade the file with `file_exists`, so each fails when setup does not write it. Source: evals/setup/fresh-repo/graders/status-md.md:1-3, evals/setup/migrate-08/graders/status-md.md:1-3, checked 2026-11-04.
- Two eval scaffolds copy the seed to `docs/STATUS.md` under `set -euo pipefail`. Each stops when the template is missing. Source: evals/setup/fresh-repo-resume/scaffold.sh:8, evals/setup/fresh-repo-resume/scaffold.sh:37, evals/setup/second-run/scaffold.sh:5, evals/setup/second-run/scaffold.sh:19, checked 2026-11-04.
- `setup/fresh-repo-resume` grades the reply for the word `interview-me`. In `brain status` output, that word comes only from the seed. Source: evals/setup/fresh-repo-resume/graders/next-step.md:1-7, scripts/workspace/status.ts:231-235, checked 2026-11-04.
- Four eval test files name the file on seven lines. Six lines list it as created, unchanged or graded, and one keeps the word out of an eval prompt. Source: scripts/evals/__tests__/fresh-repo.test.ts:173, scripts/evals/__tests__/fresh-repo-resume.test.ts:201, scripts/evals/__tests__/fresh-repo-resume.test.ts:228, scripts/evals/__tests__/fresh-repo-resume.test.ts:251, scripts/evals/__tests__/second-run.test.ts:55, scripts/evals/__tests__/second-run.test.ts:69, scripts/evals/__tests__/migrate-08.test.ts:425, checked 2026-11-04.
- `overlap.ts` does not name the file. It reads the protocol at run time, so its report follows the protocol's sentence. The one match in its test is a sample `AGENTS.md` line. Source: scripts/setup/overlap.ts:345-351, scripts/setup/__tests__/overlap.test.ts:37, checked 2026-11-04.
- `scripts/setup/__tests__/fixtures/resume/AGENTS.md` is test data for the overlap report, and nothing reads a note through it. Source: scripts/setup/__tests__/fixtures/resume/AGENTS.md:3, scripts/setup/__tests__/fixtures/resume/AGENTS.md:8, scripts/setup/__tests__/fixtures/resume/AGENTS.md:72, scripts/setup/__tests__/overlap.test.ts:19, checked 2026-11-04.
- Two groups of matches do not concern the file. `$STATUS` in the cache hook is an HTTP status code, and the four matching trace lines hold only `PIPESTATUS`. Source: hooks/sdd-cache-pre.sh:71-77, scripts/evals/__tests__/fixtures/migrate-08.trace.jsonl:3-6, checked 2026-11-04.
- The search `grep -rn STATUS scripts hooks protocol skills/setup-brain` gives 85 lines in 21 files, and the lines above account for each: `status.ts` 3, `write.ts` 4, `session-start.ts` 3, `PROTOCOL.md` 2, `AGENTS-block.md` 2, setup-brain `SKILL.md` 6, `sdd-cache-pre.sh` 3, the trace 4, `status.test.ts` 13, `session-start.test.ts` 16, `write.test.ts` 11, `overlap.test.ts` 1, four eval tests 7, four fixture READMEs 7, the resume `AGENTS.md` 3. Source: the search run at f29cc6b7, checked 2026-11-04.

### Part 2: what the note gives that the rows cannot

- The note feeds two of the five report lines, and a labelled line wins over the rows on both. The stage, last-step and red lines never read it. Source: scripts/workspace/status.ts:223-226, scripts/workspace/status.ts:244-262, scripts/workspace/status.ts:263, scripts/workspace/__tests__/status.test.ts:107-121, checked 2026-11-04.
- With no active effort, the rows give no next step. Only the note can then fill that line. Source: scripts/workspace/status.ts:231-235, checked 2026-11-04.
- A spec with no `tasks/plan.md` counts as finished. On a fixture copy with such a spec, `brain status` printed `Stage: no active work`, so a next step such as "run /plan" has only the note to go in. Source: scripts/workspace/effort.ts:65-73, run on a copy of the no-active-work fixture, checked 2026-11-04.
- A plan with every row resolved also counts as finished, and the stage holds only define, build or finished. Work after the last row, such as a merge or a release, reaches the report only through the note. Source: scripts/workspace/status.ts:42, scripts/workspace/status.ts:116-119, scripts/workspace/effort.ts:73, scripts/workspace/graph.ts:18-20, checked 2026-11-04.
- The waiting line from the rows holds only decide rows on the frontier. A wait with no row reaches that line only through the note, as T39's pull request review did. Source: scripts/workspace/status.ts:32, scripts/workspace/status.ts:129, commit 951bfcc3, checked 2026-11-04.
- The red line from the rows holds only a missing `workspace.md` and the `brain check` findings. A note's `Red:` line does not reach it, so such an item shows only in the hook text and in `--json`. Commit 951bfcc3 held one such item. Source: scripts/workspace/status.ts:186-195, scripts/workspace/status.ts:255-262, commit 951bfcc3, checked 2026-11-04.
- A row has no field for a command, so the exact command that the protocol asks for has only the note to go in. Source: scripts/workspace/map.ts:13-26, protocol/PROTOCOL.md:52, checked 2026-11-04.
- The computed next-step line ranks nothing: it lists each effort's first frontier row and every row in progress, in file order. The note can name one action. With three ideas in define, HEAD's note gave `answer IDEA-001#01.`, and a copy of the workspace with no note gave two frontier rows and four rows in progress. Source: scripts/workspace/status.ts:212-219, docs/STATUS.md:5, run on a copy of the workspace, checked 2026-11-04.
- The note's other lines, such as its summary and `Later:`, have no parser. The default report leaves them out, and only the hook text and `--json` carry them. Source: scripts/workspace/status.ts:186-195, scripts/workspace/status.ts:315, scripts/hooks/session-start.ts:101-102, docs/STATUS.md:3, docs/STATUS.md:9, checked 2026-11-04.
- Off Claude Code, an agent sees those other lines only with `--json` or a read of the file. The protocol says to read the file only when `brain status` cannot run. Source: protocol/PROTOCOL.md:5, scripts/workspace/status.ts:315, checked 2026-11-04.
- When the note names `Next:`, the hook text holds no computed frontier, because the hook uses only `report` and `note`. `--json` still holds the frontier. Source: scripts/hooks/session-start.ts:47, scripts/hooks/session-start.ts:101-102, scripts/workspace/status.ts:120-130, checked 2026-11-04.
- Nothing compares the note with the rows. On a copy of `idea-mid-define` with row 06 resolved to DEC-002 and the note unchanged, the next-step line still named IDEA-001#06, `brain check` gave no finding, and `--json` gave rows 07 and 08 as the frontier. Source: scripts/workspace/status.ts:223-226, scripts/workspace/check.ts:320-353, run on a copy of the fixture, checked 2026-11-04.
- The only guard against a stale note is text in the status skill: a next step that names a resolved row means the note is older than the rows. Source: skills/status/SKILL.md:29, checked 2026-11-04.

### Part 3: proposals to retire, replace or shrink the file

- No commit, pull request, decision record, research record, spec or plan proposes to retire the file. The lines below give the evidence for each search. The brief excludes IDEA-001 and IDEA-002, so this claim does not cover them. Source: the searches in this part, run at f29cc6b7, checked 2026-11-04.
- `git log --all -S"STATUS.md"` gave 30 commits at the start of this run: 16 in HEAD's history, 11 copies off that history with the same STATUS.md lines, and 3 on `v2`. The 3 on `v2` match only `GATE_STATUS.md`. Source: commit f01a84d7, commit 2910f86a, commit 810d028a, checked 2026-11-04.
- The same search gave 19 commits at the end of this run, because the 11 copies lost their branches during the run. This run deleted no branch, and it did not find what did. The 11 commit objects still exist, so each stays readable by SHA. Source: commit 9d4723c9, commit b99d9930, commit a85004e5, commit 3bbc5d82, commit a2ed2b10, commit 2c1cc9bf, commit 0ba4fbb9, commit 5fbe5d2a, commit e77ddbb1, commit 76f331f5, commit aa4c629e, checked 2026-11-04.
- None of the 16 commits deletes the file or a reader. Their 10 removed lines are rewordings: a changeset moved into the changelog, two edits of a skill description, and the move to resume. Source: commit 0722995c, commit cb74f69c, commit 27e8713b, commit cf1f81aa, checked 2026-11-04.
- Commit fb59f745 changes two matching lines, both in the IDEA-001 file. This record does not use them, as the brief excludes that file. Source: commit fb59f745, checked 2026-11-04.
- `gh pr list --state all --search STATUS` gives 7 pull requests. PR #22 carries the commit that adds the file, and PR #25 carries the last rewrite. PR #15 and PR #16 describe the seed and the hook. PR #20, PR #26 and PR #27 match other words. None proposes a change to the file's role, and all 7 have no comment and no review. Source: PR #15, PR #16, PR #20, PR #22, PR #25, PR #26, PR #27, commit fb5cacd4, commit f88fc338, checked 2026-11-04.
- The repo has no GitHub issue, open or closed, though issues are on. Source: `gh issue list --state all` and `gh repo view`, checked 2026-11-04.
- DEC-001 to DEC-006, RES-001 to RES-005 and `tasks/done/` name neither the file nor the handoff note. Source: `docs/decisions/`, `docs/research/` and `tasks/done/` at f29cc6b7, checked 2026-11-04.
- A commit message search for `status` with a removal word gave 12 commits, and 9 after the branch loss above. Only f88fc338 concerns the note. Its "drops that red line" is an edit of the note's text. Source: commit f88fc338, checked 2026-11-04.
- `git log --all -S"handoff note"` gave 27 commits, and 20 after the branch loss above. The 12 from August and September use the words in other senses, as none adds `docs/STATUS.md`. Source: commit 6fa5c383, commit fa268bdc, checked 2026-11-04.
- The only record that decides the file's future keeps it. The intent's decision table says "Kept as the task-end handoff", with "Peter's existing practice" as its evidence. Source: commit fa268bdc, docs/intent/workspace-and-stateful-interview.md:704, checked 2026-11-04.
- That decision reached the code: `brain status` reads the note, the hook carries it, and setup-brain seeds it. Source: commit 77666a75, commit d21d9e2a, commit 03f2d3e4, checked 2026-11-04.
- The same table rules out a generated note: the status script "never writes `docs/STATUS.md`". The tree-hash test holds this at HEAD. Source: commit fa268bdc, docs/intent/workspace-and-stateful-interview.md:719, scripts/workspace/__tests__/status.test.ts:457-464, checked 2026-11-04.
- Shrink one, the read path. The intent's first protocol draft read the note first off Claude Code. The shipped protocol runs `brain status` first and keeps the read as the fallback only. Source: commit fa268bdc, docs/intent/workspace-and-stateful-interview.md:488-489, commit 94fef6de, protocol/PROTOCOL.md:5, checked 2026-11-04.
- Shrink two, the printed text. The intent's section on live state says `brain status` prints the note with the computed state. The code prints the five lines by default, and only `--json` carries the note's text. Source: commit fa268bdc, docs/intent/workspace-and-stateful-interview.md:537-539, commit 77666a75, scripts/workspace/status.ts:315, checked 2026-11-04.
- Shrink three, the seed. The seed has no `Next:` line, "so the computed frontier wins once work starts", and a test holds this at HEAD. Source: commit 03f2d3e4, scripts/setup/__tests__/write.test.ts:811-817, checked 2026-11-04.
- SPEC-001, SPEC-006 and SPEC-009 add the file as a requirement. No spec and no plan row proposes less of it. Source: commit fa268bdc, specs/SPEC-009-workspace/spec.md:109-113, specs/SPEC-006-setup/spec.md:56-57, specs/SPEC-001-evals/spec.md:199-202, checked 2026-11-04.
- In `docs/intent/`, only the workspace intent names the file. `brain-wrap.md` has no match. `brain-workspace-prompt.md` is untracked at HEAD and names only the `brain status` command. Source: docs/intent/brain-workspace-prompt.md:11, `git status` at f29cc6b7, checked 2026-11-04.

### Part 4: how the role changed

- Before brain held the file, it was a hand-written practice in another repo: read the note at session start, and rewrite it at task end. Source: scripts/setup/__tests__/fixtures/resume/AGENTS.md:8, scripts/setup/__tests__/fixtures/resume/AGENTS.md:72, scripts/setup/__tests__/overlap.test.ts:621, commit 27e8713b, checked 2026-11-04.
- The first commit in HEAD's history to name the file is fa268bdc, on 2026-10-29. It plans the note as a task-end handoff that feeds a five-line report. Source: commit fa268bdc, checked 2026-11-04.
- The fixtures came first in code, with one note that has labelled lines and one seed note. Source: commit fe8d0411, checked 2026-11-04.
- interview-me gained its rewrite step next, with the condition "when the repo has one". Source: commit b4498f35, checked 2026-11-04.
- `brain status` then made the note an input: two labelled lines win over the rows, and `--json` carries the full text. The note logic has not changed since: the three later edits to `status.ts` change no note line. Source: commit 77666a75, commit 0fc76129, commit cb74f69c, commit 4e216232, checked 2026-11-04.
- The protocol then gave the note its standing write rule, its label rule and its place as the fallback read. Source: commit 94fef6de, commit 0749639b, checked 2026-11-04.
- The hook then put the note's full text in each new session on Claude Code. Source: commit d21d9e2a, checked 2026-11-04.
- setup-brain then gained the seed, written once and never again. Source: commit 03f2d3e4, checked 2026-11-04.
- The hook then reached resumed and forked sessions too, with no protocol text beside the note. Source: commit cf1f81aa, commit a8cf6773, checked 2026-11-04.
- using-brain then named the note among the files that carry the work between sessions. Source: commit 791a7f17, checked 2026-11-04.
- The migrate eval then set that a migrated repo gets the seed from the install step. Source: commit cb74f69c, checked 2026-11-04.
- brain's own repo got the seed last, and two rewrites followed within the next 30 minutes. Source: commit fb5cacd4, commit 951bfcc3, commit f88fc338, checked 2026-11-04.
- Every commit from fa268bdc to f88fc338 falls within about 14 hours. Source: commit fa268bdc, commit f88fc338, checked 2026-11-04.
- No commit changes the note in the 11 commits since f88fc338, which include PR #26 and PR #27. Source: `git log f88fc338..HEAD -- docs/STATUS.md` at f29cc6b7, PR #26, PR #27, checked 2026-11-04.
- During this run, something outside it rewrote the note's `Next:` line in the working tree, with no commit. The new line names IDEA-003 rows, and `brain status` printed it at once. Source: `git diff -- docs/STATUS.md` against f29cc6b7, scripts/workspace/status.ts:223-226, checked 2026-11-04.
- In short, the file went from the first thing a session read to an optional input of a computed report. Its text still wins over the rows on two lines, and its full text is in every Claude Code session. Source: commit 77666a75, commit 94fef6de, commit d21d9e2a, scripts/workspace/status.ts:223-226, checked 2026-11-04.

## Follow-ups
- UNVERIFIED: The evals behave as their graders read. I read the graders and scaffolds and ran no live eval.
- UNVERIFIED: The items on the note's `Later:` line have no row in any map. The brief excludes IDEA-001, so I did not check.
- UNVERIFIED: Agents on Codex, Gemini CLI or Antigravity CLI do not read the note's other lines in practice. The code gives no automatic path, and I ran no such session.
- UNVERIFIED: Agents rewrite the note at each task end in other repos. I checked only brain's own history.
- For a repo with no note, which text holds: the protocol's task end, with no condition, or interview-me's "when the repo has one"?
- `GLOSSARY.md` has no entry for "handoff note", though the code uses the words: should domain-modeling add one?
- `GLOSSARY.md:58-59` says the frontier is "never written down", and `skills/interview-me/SKILL.md:187` writes the next frontier row into the note: which text holds?
- `skills/using-brain/SKILL.md:99` and `references/brain/stage-boundaries.md:16` say the build updates the note: should a build skill or command say so too?
- Nothing in code flags a `Next:` line that names a resolved row: should `brain status` or `brain check` do so?
- The parser takes `Waiting:` and the status skill does not name it: is that label meant for users?
