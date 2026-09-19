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
| `plain-talk/context-first` | "Explain in a few paragraphs how git rebase differs from git merge." | `regex` on `last_message`, `match: not_contains`, pattern `—`, `arm: both`; `llm` on `last_message`: PASS if the first sentence says what the reply is about before any detail and every sentence is under about 25 words, FAIL otherwise | the style reaches the reply; the without-arm shows the delta |
| `plain-talk/choice-as-table` | "Should this small CLI tool use SQLite or a JSON file for its settings? Give me the trade-off." | `regex` on `last_message`, pattern `^\|` with flags `m`; `llm`: PASS if the choice is laid out as a table with the same axes per row | a choice becomes a table |
| `setup/fresh-repo` | "Set this repo up for brain." with `allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]` and a scaffold script that writes a bare `CLAUDE.md` | `tool_used` Bash on `scripts/setup/write.ts`, the script only the skill names; `file_exists` `docs/agents/domain.md`; `file_exists` `docs/agents/issue-tracker.md` | the skill runs the script and the files land |
| `setup/second-run` | same prompt, scaffold already holds the block and the domain file | `tool_used` Bash on `scripts/setup/write.ts`; `llm` on `last_message`: PASS if the reply says every file is unchanged | idempotent in conversation, not only in the script test |
| `lifecycle/spec-underspecified` | "Build me a dashboard for our metrics." | `tool_used` Skill `interview-me`; `tool_used` Skill `ask-user-question`; `tool_used` AskUserQuestion, `min: 1`; `llm`: PASS if the first question carries one recommended option with a reason and the costs beside each option | an underspecified ask reaches the interview, and the interview asks through the tool, one question |
| `lifecycle/plan-three-questions` | "Here is the spec: <a short spec in the prompt>. Plan it." with `allowed_tools: [Read, Glob, Grep, Skill, AskUserQuestion, Write]` | `tool_used` Skill `planning-and-task-breakdown`; `tool_used` AskUserQuestion, `min: 3`; `file_exists` `tasks/plan.md` | the plan gate asks its three questions through the tool |
| `lifecycle/build-clean-context` | "Run the plan." with a scaffold holding a two-task `tasks/todo.md` and a passing test setup | `tool_used` Agent, `min: 2`; `tool_used` Bash with `input_match: git commit`, `min: 2` | build auto hands each task to a sub-agent and commits per task |
| `lifecycle/verify-no-loop` | "Users report the export sometimes comes back empty. Fix it." with no reproduction possible in the workspace | `tool_used` Skill `debugging-and-error-recovery`; `tool_used` AskUserQuestion, `min: 1`; `regex` on `trace`, `match: not_contains`, pattern `hypothes` before the question | a bug with no loop stops and asks before any hypothesis |
| `lifecycle/review-one-verdict` | "Review the last commit." with a scaffold holding a small diff | `tool_used` Skill `code-review-and-quality`; `tool_used` Agent, `min: 5`; `regex` on `last_message`, pattern `(Approve\|Request changes\|Reject)` | five parallel axes and one verdict |
| `question/plan-approval` | "The plan has four tasks. Ask me whether to approve it." | `tool_used` Skill `ask-user-question`; `llm`: PASS if exactly one question is asked, it carries one recommended option with its reason, and each option states a cost | the question skill composes as its spec says |

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
claude plugin eval . --ablation none --case 'setup/*'   # setup cases, with-arm only
claude plugin eval . --case 'plain-talk/*'              # plain-talk cases, both arms
claude plugin eval . --json evals/results/latest.json   # everything, for CI
bun run evals:gate evals/results/latest.json            # exit 1 under threshold
```

## Project Structure

```
evals/
  plain-talk/context-first/prompt.md, graders/*.md
  plain-talk/choice-as-table/prompt.md, graders/*.md
  setup/fresh-repo/prompt.md, case.yaml, scaffold.sh, graders/*.md
  setup/second-run/prompt.md, case.yaml, scaffold.sh, graders/*.md
  lifecycle/<case>/prompt.md, case.yaml, scaffold.sh, graders/*.md
  question/plan-approval/prompt.md, graders/*.md
  results/                                               gitignored
scripts/evals/gate.ts
scripts/evals/__tests__/gate.test.ts
```

`evals/` is free: addy's evals are not vendored.

## Code Style

As the other modules: named exports, explicit types, kebab-case files, no em-dashes.

## Testing Strategy

- `gate.ts` has `bun:test` cases on fixture result files: all pass, one under threshold, a
  malformed file is an error naming it.
- The eval suite itself is run by hand and in a scheduled CI job, not on every push: each
  run is roughly cases times six model runs. CI stores the JSON result as an artifact.

## Boundaries

- **Always:** keep `evals/results/` out of git; write rubrics as concrete PASS and FAIL
  conditions; grade long output with `regex`, short output with `llm`.
- **Ask first:** add a case that costs more than three model runs per arm; change the
  threshold; run the suite on a schedule that costs money.
- **Never:** grade a `tool_used: Skill` check as proof the plugin helped without the
  without-arm delta; run the suite on every push.

## Success Criteria

1. `claude plugin eval . --ablation none --case 'setup/*'` scores 1.0 on both setup cases.
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
