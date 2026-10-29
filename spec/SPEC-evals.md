# Spec: evals

Module `evals` of `CAPABILITY-MAP.md`. Depends on `plain-talk` and `lifecycle`.
Status: draft for review, 2026-09-19. The lifecycle cases are named below; the
lifecycle module is built.

## Objective

Measure, with a model in the loop, two claims brain makes and one it relies on:

1. **Plain talk works.** With brain loaded, a reply opens with one line of context, keeps
   sentences short, and uses no em-dash. Without brain, it does not. Peter doubts this
   claim (2026-09-19), so it is measured, not assumed.
2. **The setup skill does its job.** `setup-brain` writes the block and the domain file, and
   a second run changes nothing.
3. **Routing holds.** A request that a brain lifecycle entry point should handle reaches
   that skill and not a vendored one directly. Placeholder until `lifecycle` is specified.

The tool is Claude Code's own `claude plugin eval`: cases under `evals/`, each a
`prompt.md` plus graders, run three times with the plugin and three times without, scored
against a threshold, with an HTML report and a JSON result for CI. Every run is a real
model call on the account that runs it.

Users: brain maintainers and CI. Hosts: Claude Code only. Codex, Gemini and Antigravity
have no equivalent runner, so their every-turn behaviour stays a manual check recorded on
their install pages.

## Cases

| Case | Prompt, in the user's words | Graders | What it proves |
|---|---|---|---|
| `plain-talk/context-first` | "Explain in a few paragraphs how git rebase differs from git merge." | `regex` on `last_message`, `match: not_contains`, pattern `—`, `arm: both`; `llm` on `last_message`, first sentence only: PASS if it names the subject before any detail; a `regex` on `last_message`, `match: not_contains`, a run of 31 tokens with no sentence punctuation, `arm: both` | the style reaches the reply; the without-arm shows the delta |
| `plain-talk/choice-as-table` | "Should this small CLI tool use SQLite or a JSON file for its settings? Give me the trade-off." | `regex` on `last_message`, pattern `^\|` with flags `m`; `llm`: PASS if the choice is laid out as a table with the same axes per row | a choice becomes a table |
| `setup/fresh-repo` | "Set this repo up for brain." with `allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]` and a scaffold script that writes a bare `CLAUDE.md` | `tool_used` Bash on `scripts/setup/write.ts`, the script only the skill names; `file_exists` `docs/agents/domain.md` | the skill runs the script and the files land |
| `setup/second-run` | same prompt, scaffold already holds the block and the domain file | `tool_used` Bash on `scripts/setup/write.ts`; `llm` on `last_message`: PASS if the reply says every file is unchanged | idempotent in conversation, not only in the script test |
| `lifecycle/spec-underspecified` | "/brain:spec Build me a dashboard for our metrics." with `allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]` and a scaffold that is a fresh brain repo: git and setup-brain's `workspace.md` | `tool_used` Skill `interview-me`; `tool_used` Skill `ask-user-question`; `regex` on `files` for `docs/ideas/IDEA-001-<slug>.md`; `tool_used` Bash running `brain new-doc IDEA`; `regex` on `last_message`, pattern `[Rr]ecommend`, `arm: both`; `llm`: PASS if the reply puts one question, with one option marked "(Recommended)" and its reason, and a cost beside each option | an underspecified ask reaches the interview, which charts its map in an idea file through `brain new-doc` before it puts one question |
| `lifecycle/plan-three-questions` | "/brain:plan Here is the spec. Plan it. Use the slug `word-counter`." with a short spec in the prompt, `allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]` and the fresh brain repo as scaffold | `tool_used` Skill `planning-and-task-breakdown`; `regex` on the file `docs/specs/SPEC-001-word-counter/tasks/plan.md`: row 01 names a task, not the template's placeholder; `regex` on `last_message`, pattern `[Rr]ecommend`, `arm: both`; `llm`: PASS if the reply ends with one question about the plan, with one option marked "(Recommended)" and its reason | a spec from the chat gets its own spec folder, the plan lands in it, and the plan gate puts its first question |
| `lifecycle/build-clean-context` | "/brain:build auto. The plan is approved. Go." with a scaffold holding setup-brain's `workspace.md` and one committed spec folder, `docs/specs/SPEC-001-greeter/`: two open plan rows, row 02 blocked by row 01, and one `todo.md` block each | `tool_used` Agent, `min: 2`, `arm: both`; `tool_used` Agent with `input_match` on each block's own test file (`greet.test.ts`, `shout.test.ts`); `regex` on `todo.md`: a ticked box and no open one; `regex` on `plan.md`: both rows `resolved`, each Result opening with a commit SHA; `llm` on `last_message`: PASS if the summary reports two commits, one per task | build auto finds the spec through `workspace.md`, hands each task's block to its own sub-agent, and the main session closes each row after the commit |
| `lifecycle/build-parallel` | "/brain:build auto. The plan is approved. Go." with a scaffold holding a feature branch `feat/text-tools` and a spec whose frontier is five tasks wide, then checkpoint row 06 and task 07 | `tool_used` Agent with `"isolation": "worktree"`, `min: 5`; `tool_used` Agent naming the branch, `min: 5`; `tool_order` for each of the five tasks: started before the first merge; `regex` on `plan.md`: rows 01 to 05 `resolved` with a commit SHA, row 06 still open and row 07 `open`; `llm` on `last_message`: PASS if a run that starts fewer than five gives the reason first | build auto starts the whole frontier at once, each task in a worktree from the branch head, and stops at the checkpoint |
| `lifecycle/adr-is-dec` | "Write an ADR for this decision: the orders write model is event-sourced ... Use the slug `orders-event-sourcing`." with a scaffold holding setup-brain's `workspace.md` | `tool_used` Bash with `new-doc DEC orders-event-sourcing`; `file_exists` `docs/decisions/DEC-001-orders-event-sourcing.md`; `regex` on that file: the DEC schema's fields in order, `kind: architecture`, no placeholder left; `regex` on `files`: no other ADR or DEC file | domain-modeling records the decision as a DEC file through `brain new-doc`, with the kind its three tests set |
| `lifecycle/interview-resume` | "Let's pick up the sync notes idea where we left off." with a scaffold holding one idea file in define (six rows resolved, row 09 alone on the frontier) and the records it links | `tool_used` Skill `interview-me`; `regex` on `last_message`: the reply names encryption and a recommendation; `regex` on `files`: no new DEC or IDEA file; `llm` on `last_message`: PASS if the reply asks exactly one question, about row 09 only; `llm`: PASS if it asks nothing the records settle | a new session resumes from the idea file alone, takes the one frontier row, and asks nothing already settled |
| `lifecycle/interview-parallel-research` | "Let's pick up the notes export idea where we left off." with a scaffold holding an idea whose frontier has three research rows (02 to 04) and one interview row | `tool_used` Skill `interview-me`; `tool_used` Agent with `from: IDEA-001#02` to `#04`, `min: 3`, and one grader per row; `regex` on `trace`: no tool result between two research-row Agent calls; `regex` on the idea file: no research row left `open` | interview-me starts every research row on the frontier in one turn |
| `lifecycle/verify-no-loop` | "Users report the export sometimes comes back empty. Fix it." with no reproduction possible in the workspace | `tool_used` Skill `debugging-and-error-recovery`; `tool_used` AskUserQuestion, `min: 1`; `regex` on `trace`, `match: not_contains`, pattern `hypothes` before the question | a bug with no loop stops and asks before any hypothesis |
| `lifecycle/review-one-verdict` | "Review the last commit." with a scaffold holding a small diff | `tool_used` Skill `code-review-and-quality`; `tool_used` Agent, `min: 5`; `regex` on `last_message`, pattern `(Approve\|Request changes\|Reject)` | five parallel axes and one verdict |
| `question/plan-approval` | "The plan has four tasks. Ask me whether to approve it." | `tool_used` Skill `ask-user-question`; `llm`: PASS if exactly one question is asked, it carries one recommended option with its reason, and each option states a cost | the question skill composes as its spec says |
| `wait-what/confused-by-reply` | "what are you talking about?? i don't get any of that", resumed after a dense reply on a column rename (`context.history_file`) | `tool_used` Skill `wait-what` | a confused user gets the re-pitch with no slash command |
| `wait-what/error-not-confusion` | "ok i ran migration 1 and got this, makes no sense to me" with a Postgres error, after the same reply | `tool_used` Skill `wait-what`, `min: 0`, `max: 0` | an error the user calls confusing stays a debugging task |

`setup-brain` is user-invoked, so the model cannot reach it from a plain prompt in the
without-arm. The setup cases therefore run with `--ablation none`, and their `tool_used`
graders are the pass signal. The plain-talk cases keep both arms: the delta is the point.

## Tech Stack

- `claude plugin eval`, Claude Code 2.1.269 or later. The machine that built this has
  2.1.268, so the first run needs `claude update`, which is Peter's step.
- Bun for the one helper script, `scripts/evals/gate.ts`, which reads
  `evals/results/<timestamp>/aggregate-result.json` and exits 1 when any case is under
  the threshold. No Node.

## Commands

```
claude plugin eval . --scaffold --allow-tools Bash Write Edit --ablation none --case 'setup/*'  # setup cases, with-arm only
claude plugin eval . --scaffold --allow-tools Bash Write Edit --case 'plain-talk/*'             # plain-talk cases, both arms
claude plugin eval . --scaffold --allow-tools Bash Write Edit --json evals/results/latest.json  # everything, for CI
bun run evals:gate evals/results/latest.json                                                    # exit 1 under the threshold, 0.85 by default
```

`--scaffold` runs each case's `scaffold.sh`, and `--allow-tools` grants the tools the cases ask for.
Without them, Claude Code skips the scripts and keeps Bash, Write and Edit from every case
(`claude plugin eval --help`, 2.1.312).

## Project Structure

```
evals/
  plain-talk/context-first/prompt.md, graders/*.md
  plain-talk/choice-as-table/prompt.md, graders/*.md
  setup/fresh-repo/prompt.md, case.yaml, scaffold.sh, graders/*.md
  setup/second-run/prompt.md, case.yaml, scaffold.sh, graders/*.md
  lifecycle/<case>/prompt.md, case.yaml, scaffold.sh, graders/*.md
  question/plan-approval/prompt.md, graders/*.md
  wait-what/<case>/prompt.md, case.yaml, history.jsonl, graders/*.md
  results/                                               gitignored
scripts/evals/gate.ts
scripts/evals/__tests__/gate.test.ts
scripts/evals/__tests__/<case>.test.ts                 the dry check of a lifecycle case
```

`evals/` is free: addy's evals are not vendored.

## Code Style

As the other modules: named exports, explicit types, kebab-case files, no em-dashes.

## Testing Strategy

- `gate.ts` has `bun:test` cases on fixture result files: all pass, one under threshold, a
  malformed file is an error naming it.
- The eval suite itself is run by hand and in a scheduled CI job, not on every push: each
  run is roughly cases times six model runs. CI stores the JSON result as an artifact.
- A lifecycle case that writes into the workspace has a dry check,
  `scripts/evals/__tests__/<case>.test.ts`, with no model run. It builds the case's scaffold,
  plays a correct run and faulty runs with the real `brain` commands, and applies the case's
  own computed graders to each. The gate's `bun test` runs every dry check.

## Boundaries

- **Always:** keep `evals/results/` out of git; write rubrics as concrete PASS and FAIL
  conditions; grade long output with `regex`, short output with `llm`.
- **Ask first:** add a case that costs more than three model runs per arm; change the
  threshold; run the suite on a schedule that costs money.
- **Never:** grade a `tool_used: Skill` check as proof the plugin helped without the
  without-arm delta; run the suite on every push.

## Success Criteria

1. `claude plugin eval . --scaffold --allow-tools Bash Write Edit --ablation none --case 'setup/*'` scores 1.0 on both setup cases.
2. The two plain-talk cases show a positive delta between the with-arm and the without-arm.
3. `bun run evals:gate` exits 0 on a passing result file and 1 on a failing one, by test.
4. A scheduled CI job runs the suite and stores the JSON result.

## Open Questions

1. The eval runner is in early access and may report "currently unavailable" on some
   accounts. The first run tells us.
2. The judge model for the plain-talk rubric: the small default, or `--judge-model sonnet`
   for the sentence-length rule. The first run decides; the doc says to suspect the judge
   before the plugin when a delta is negative.
3. Whether a case can measure the other three hosts at all. No runner is known; the answer
   stays no until one appears.

## Amendment 2026-09-19, user-invoked skills

`setup-brain` carries `disable-model-invocation: true`, so a plain prompt cannot reach it and
a `tool_used` Skill grader never fires. The first run scored 0.67 and 0.17 on the two setup
cases for that reason. The setup prompts now start with `/brain:setup-brain`, the way a user
types a user-invoked skill; a probe in print mode confirmed the skill loads and runs its script.
The fired signal is a `tool_used` Bash grader matching `scripts/setup/write.ts`, a path only
the skill text names.

## Amendment 2026-09-19, one check per judge

The context-first rubric bundled two checks, the opening line and the sentence length. Once
the rule was sharpened, every plugin reply opened with the subject and kept sentences under 25
words by count, and Haiku and Sonnet still failed it two votes to one. A judge that doubts either
clause fails both. The opening line is one `llm` grader with a single yes-or-no question. The sentence
length is a `regex` grader, a run of 31 tokens with no sentence punctuation, because the
judge failed replies whose longest sentence was 25 and 19 words: a count belongs to code.

## Amendment 2026-09-19, the gate threshold

The gate and the workflow default to 0.85, not 1.0. A three-grader case with one judge miss in
three runs scores 0.89, and context-first sat there after the first run; a weekly run red on
one judge vote is noise. 0.67, two misses or a whole grader, still fails.

## Amendment 2026-09-19, questions in the sandbox

The eval sandbox runs without the AskUserQuestion tool and never stops for input, and the
docs offer no simulated user. So no grader can see the tool called. What the suite measures
instead is the written form the ask-user-question skill prescribes when the tool is absent:
the reply puts exactly one question to the user, one option marked "(Recommended)" with its
reason, a cost beside each option. Every "asked through the tool" grader became a last-message
grader on that form, with a regex on "(Recommended)" in both arms beside each judge. The tool
call itself stays unmeasured. Peter chose this over dropping the graders or leaving them red.

The same pass moved the build, plan, review, spec and verify prompts to the slash-command
form, the way a user reaches those stages, and cut the build prompt down to the approval:
a prompt that spelled out "each in a clean context, one commit per task" scored the same
with and without the plugin.

## Amendment 2026-10-29, the workspace layout

The workspace module (`SPEC-workspace.md`) moves every spec into `docs/specs/SPEC-NNN-<slug>/`,
and `brain new-doc` creates every numbered file. Three cases follow it:

- `build-clean-context` runs `/build auto` from a spec folder, and its graders read that
  folder's `plan.md` and `todo.md`.
- `plan-three-questions` gets the spec in the chat, so the plan skill makes its spec folder
  with `brain new-doc SPEC`. The prompt names the slug, so the plan grader reads a fixed path.
- `spec-underspecified` meets interview-me's chart first: the map goes into an idea file
  through `brain new-doc IDEA` before the first question. Its two new graders check that file
  and that command.

`plan-three-questions` and `spec-underspecified` now run in a fresh brain repo, git and
setup-brain's `workspace.md`, with Bash for `brain`. Agent stays out of
`spec-underspecified`'s tools: the case measures the chart and the first question, and a
research sub-agent would only add cost.

## Amendment 2026-10-29, the install

setup-brain now writes `docs/agents/workspace.md` and a `docs/STATUS.md` seed beside
`domain.md`, and checks for bun first (`SPEC-setup.md`). The setup cases follow it:

- `setup/fresh-repo` gains `file_exists` graders for `workspace.md` and `STATUS.md`, a
  `tool_order` grader that puts `bun --version` before the writer, a `file_exists` grader
  with `exists: false` on `AGENTS.md`, and a `regex` on `CLAUDE.md` that holds it to the
  scaffold's text. Every grader is computed.
- `setup/second-run`'s scaffold makes all three repo files from the plugin's templates, and
  its judge names each one.
- New: `setup/fresh-repo-resume`. Its scaffold is a committed repo just after setup-brain,
  with the repo's own `AGENTS.md`. The prompt, "Where does the work in this repo stand, and
  what is the next step?", names nothing of brain. `regex` graders on `last_message` look
  for "no active work" and `interview-me`, a `regex` with `match: not_contains` holds
  `AGENTS.md` free of brain text, and one `llm` grader fails a reply that names work that
  does not exist. No grader reads a tool call: whether the plugin's `SessionStart` hook
  runs inside `claude plugin eval` is not verified, and with the hook a session needs no
  call to know its state. Its dry check shows that `brain status` and the hook give the
  same lines. Its scaffold also holds `docs/agents/capabilities.md`, written by setup-brain's
  capabilities script, which the dry check finds in place (T34).

Each setup case has a dry check, `scripts/evals/__tests__/<case>.test.ts`.
