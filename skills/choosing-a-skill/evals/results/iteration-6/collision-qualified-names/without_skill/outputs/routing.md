# Routing decision

## The request

Two sequenced asks in one message:

1. "Review this branch before I merge it" — a review of the changes on the current branch against its merge base.
2. "Once that's done I want the messy bits cleaned up" — apply cleanups to the code the review flagged as messy.

They are ordered and dependent: the second consumes the output of the first. Two skills, run in sequence, not one.

## The complication: colliding names

Both halves land on a name collision. There are three review-ish entries and three simplify-ish entries installed, and the bare names ("review", "simplify") are ambiguous. Routing therefore has to be done on **qualified names**, not on the word the user used.

### Review candidates

| Qualified name | What it declares | Verdict |
|---|---|---|
| `code-review` (personal skill, `~/.claude/skills/code-review`) | Reviews changes since a fixed point (commit, branch, tag, or merge-base) on two axes — Standards (repo's documented coding standards) and Spec (does it match the originating issue/spec). Runs both in parallel sub-agents. Explicitly: "Use when the user wants to review a branch, a PR, work-in-progress changes." | **Chosen.** Its declared trigger is literally "review a branch", and its scope model is merge-base-relative, which is what "before I merge it" means. |
| `code-review:code-review` (plugin) | Multi-axis review over an *explicitly named scope*, returns triaged findings; declares it opens no network connection and has no destination. | Not chosen. Viable, but the user named no scope, and the personal `code-review` skill's declared trigger matches the phrasing exactly. Fall back to this only if the personal one is unavailable. |
| `/review` (command) | Five-axis review — correctness, readability, architecture, security, performance. | Not chosen. Reasonable, but it is the generic diff review; the branch/merge-base framing is the personal skill's declared specialty. |
| `code-review-and-quality` | Multi-axis review, declares "use before merging any change". | Not chosen. It is guidance-shaped (a quality rubric) rather than a runner over a branch diff. |
| `skills:review` | Part of the PLAN/SPEC/build lifecycle; auto-invoked by `/end` as a PR gate. | Not chosen. Presumes that plugin's PLAN/SPEC note structure, which is not in play here. |
| `security-review` | Security review of pending changes on the branch. | Not chosen as the primary. Worth offering as an add-on, not a substitute — the user asked for a general review. |

### Cleanup candidates

| Qualified name | What it declares | Verdict |
|---|---|---|
| `code-simplifier:code-simplifier` (plugin skill) | Deliverable is the **cleaned-up code itself** — reduced nesting, split long functions, removed duplication, renamed unclear locals, dead code deleted — with behaviour identical. Explicitly says do NOT use when the code is broken or tests fail: fix first. | **Chosen.** "I want the messy bits cleaned up" asks for edited code, which is exactly this skill's declared deliverable. Its paired agent verifies behaviour by running tests between changes and reverting anything that breaks. |
| `code-simplification` (personal skill) | Simplifies code for clarity when refactoring. | Not chosen. Overlaps, but the plugin skill states the deliverable boundary (edited code vs. a document about the code) that makes it the right pick here. |
| `/code-simplify` and `/simplify` (commands) | `/code-simplify` reduces complexity without changing behavior; `/simplify` reviews changed code for reuse/simplification/efficiency and applies fixes, quality only. | Not chosen as primary. `/simplify` is a close second and would be the fallback if the plugin skill were unavailable. |

## Order and handoff

1. **`code-review`** first. It defines what counts as "messy" — without it, step 2 is me guessing at the user's taste.
2. **`code-simplifier:code-simplifier`** second, scoped to the findings from step 1.

Two constraints on the handoff, both from what the skills themselves declare:

- The chosen review skill produces **findings only** — the plugin review skill states outright that applying or committing a fix is not its job. So nothing gets edited during step 1. That is correct here, since the user wants to see the review before the cleanup.
- The simplifier declares it must not run on broken code or failing tests, because simplifying wrong behaviour preserves the wrong behaviour. So if the review turns up correctness bugs, those get fixed (or explicitly deferred) before the cleanup pass — otherwise the order inverts into a trap.

## The checkpoint between them

I stop after the review and show the findings. Two reasons, and neither is reflexive caution:

- "Messy bits" is the user's judgement, not mine. The review will separate correctness bugs from style noise, and the user should say which bucket they want touched.
- Behaviour-preserving cleanup still produces a diff they have to merge. Landing it unseen on top of an unreviewed review defeats the point of reviewing before merge.

## Not routed

- `git-workflow-and-versioning` — no branching, commit, or release question was asked.
- `resolving-merge-conflicts` — no conflict is in progress; "before I merge" is pre-merge, not mid-merge.
- `/ship`, `shipping-and-launch` — no deploy or launch was mentioned.
- `test-driven-development` — only if the review finds a bug that needs a regression test, and then only inside the fix step.
