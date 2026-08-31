# Routing decision

## Skills invoked, in order

1. **`/review`** (the `review` command → `code-review` skill)
2. **`/code-simplify`** (the `code-simplify` command → `code-simplifier` skill)

Strictly sequential, with a checkpoint between them.

## Why this order

The user gave two requests with an explicit ordering marker — "once that's done". That's not
a preference, it's a dependency. The review must run against the code the user actually
intends to merge. If simplification runs first, the review reports on code the user never
wrote and never approved, and the diff under review no longer matches the diff that was
proposed.

## Why these skills and not their neighbours

There are two near-identical candidates on each side. The collisions:

**Review side:**
- `code-review` / `/review` — **chosen.** Scoped to a diff against a fixed point (commit,
  branch, tag, merge-base), fans out to parallel reviewers, returns triaged findings.
  Its description explicitly names "review a branch" and "before I merge it" is exactly
  its stated trigger.
- `code-review-and-quality` — a guidance/reference skill about how to conduct multi-axis
  review, not a runner over a concrete diff. The user wants findings on *their* branch,
  not a methodology.
- `security-review` — narrower axis. `/review` already includes a security axis; running
  the dedicated one is only warranted if the branch touches auth, untrusted input, or
  secrets. Hold in reserve.
- `code-reviewer` agent / `code-review:reviewer` agent — these are dispatch targets *of*
  the skill, not things to invoke directly. Calling them by hand skips the scope
  resolution and triage that make the output usable.

**Simplification side:**
- `code-simplifier` / `/code-simplify` — **chosen.** Deliverable is the edited code,
  behaviour held identical, tests run between changes. "Messy bits cleaned up" is
  precisely this.
- `code-simplification` — the vocabulary/guidance sibling. Doesn't produce edits.
- `simplify` — a nearby command scoped to "changed code" for reuse/efficiency/altitude.
  Viable, but `/code-simplify` is the tighter match for "messy" and carries the
  test-between-changes safety property. If the parent repo's convention favours
  `/simplify`, that substitutes cleanly.

## What is deliberately NOT invoked

- **No clarifying-question skill** (`interview-me`, `ask-user-question`, `grilling`).
  The request is unambiguous in both intent and order. Asking here is friction, not rigour.
- **No `git-workflow-and-versioning`.** The user said "before I merge it" — they're doing
  the merge. No branching or release decision has been delegated.
- **No `debugging-and-error-recovery` / `diagnosing-bugs`** unless the review surfaces an
  actual defect. Then it becomes a third, separately-approved step.

## The checkpoint between the two steps

I pause after the review rather than chaining straight into simplification, for one
substantive reason: if the review finds **bugs**, simplification is the wrong next move.
`code-simplifier` explicitly refuses broken code — simplifying code whose behaviour is
wrong preserves the wrong behaviour. So the review's verdict determines whether step 2 is
`/code-simplify` or a fix cycle first. That's a real branch in the plan, not a courtesy pause.

## Secondary flag raised in the reply

Merge sequencing. If the branch is merged as-is and cleaned up afterwards, the
simplification should land as a follow-up commit rather than being folded back into the
reviewed branch — otherwise the approved diff and the merged diff diverge. Surfaced as a
one-line note, not a blocking question.
