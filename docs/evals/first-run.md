# Evals: first run

2026-09-19, Claude Code 2.1.278, brain at the tree after v0.3.0, judge Haiku unless noted.
Every run set `CODEX_HOME` to a directory that does not exist, so no setup run could reach
the machine's Codex file. Results stay under `evals/results/`, which is not committed.

## Scores

| Case | With brain | Without | Delta | Runs |
|---|---|---|---|---|
| setup/fresh-repo | 1.00 | plugin arm only | - | 3 |
| setup/second-run | 1.00 | plugin arm only | - | 3 |
| plain-talk/choice-as-table | 1.00 | 0.33 | +0.67 | 3 per arm |
| plain-talk/context-first | 0.89 | 0.22 | +0.67 | 3 per arm |

Cost of the whole first pass, every re-run included: about 11 USD.

## What the first pass found, and what changed

1. **A user-invoked skill needs the slash form in the prompt.** `setup-brain` carries
   `disable-model-invocation: true`, so "Set this repo up for brain" never reached it and
   the Skill grader never fired: 0.67 and 0.17. The prompts now start with
   `/brain:setup-brain`, confirmed by a print-mode probe, and the fired signal is a Bash
   grader on the script only the skill names.
2. **Case names are folder names unless set.** `--case 'plain-talk/*'` matched nothing on
   the first run. Every case without `case.yaml` now carries `name` in its prompt frontmatter.
3. **The second-run scaffold wrote stubs.** Its fallback ran because the variable it read
   was never set, so the skill rightly reported three updates: 0.5. The scaffold now finds
   the plugin from its own path and fails loudly otherwise: 1.00.
4. **The context line rule was read loosely.** Every plugin reply opened on content,
   "Both commands bring work from one branch into another", and Haiku and Sonnet both
   failed it. Peter chose to sharpen the rule: "Open with one line that names the subject:
   what this reply is about and where things stand, before any detail." After that, every
   plugin reply opened with "This is about the difference between git merge and git rebase".
5. **A bundled rubric fails both clauses at once.** With the opening fixed, the judge still
   failed replies that met both clauses by count. The opening is one judge question now, and
   the sentence length is a regex grader, a run of 31 tokens with no sentence punctuation,
   because the judge failed replies whose longest sentence was 25 and 19 words.

## What stays open

- context-first is 0.89, not 1.00: one plugin run in three opened with a bold content
  sentence, "Both commands combine work from two branches", and the judge failed it. The
  evals gate at threshold 1.0 fails on this case, so the weekly run stays red until the rule
  or the bound moves. Not tuned further.
- The `no-em-dash` grader measures a habit the shipped text never names. It separated the
  arms on every run, so it stays as a proxy, and the text may name it later.
- The lifecycle and question cases have not run yet.
