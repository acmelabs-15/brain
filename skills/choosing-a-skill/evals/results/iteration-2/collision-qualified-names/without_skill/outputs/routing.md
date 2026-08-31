# Routing decision

## Skills invoked, in order

1. **`code-review:code-review`** (plugin skill — the qualified name matters, see collisions below)
2. **`code-simplifier:code-simplifier`** (plugin skill — same)

Sequential, not parallel, and gated on user confirmation between the two.

## Why this routing

### The request is two distinct deliverables

"Review this branch before I merge it" and "the messy bits cleaned up" are not one job. The first produces *findings* (a document); the second produces *edited code*. Different artifacts, different skills, and the user themselves sequenced them ("once that's done"). Routing both to a single skill would under-serve one of them.

### Phase 1: why `code-review:code-review`

The trigger is explicit and unambiguous: review a branch before merge. This is the canonical case for a review skill.

The plugin skill is the right one because:
- It handles *scope resolution* — "this branch" needs to become a concrete diff range, and the skill resolves it (merge-base being the natural default for "before I merge").
- It plans review cells before dispatching, then deduplicates, ranks and triages what comes back, and reports coverage gaps. That triage step is what makes the output actionable as input to phase 2.
- Its stated non-goals fit exactly: it doesn't deliver findings to a PR or a tracker, and it doesn't apply fixes. The user asked to review before merging, not to post a review anywhere, and the fixing is explicitly a *separate* second phase. A skill that applied fixes would collapse the user's two phases into one against their stated sequencing.

### Phase 2: why `code-simplifier:code-simplifier`

"The messy bits cleaned up" is the deliverable-is-the-cleaned-code case: nesting, long functions, duplication, unclear local names, dead code — with behaviour held constant. That is precisely this skill's scope.

The agent form of it (`code-simplifier:code-simplifier` subagent) additionally verifies behaviour preservation by running tests between changes and reverting anything that breaks, and proposes rather than edits where there's no test coverage. That's the right safety posture for post-review cleanup on a branch about to merge.

### Why the order, and why a gate between them

- Simplifying before review means reviewing a diff that's just been churned — noise, and the reviewer can't distinguish the original author's intent from the simplifier's edits.
- The review's findings are the *input* that tells us which bits are "the messy bits." Running cleanup first would be guessing at that.
- The simplifier explicitly should not run on broken code: it preserves behaviour, so it would preserve any bug the review finds. Correctness findings must be fixed as bug fixes first, then cleanup on top.
- Hence a user checkpoint between phases: they see the triaged findings and confirm what counts as cleanup versus what's a real fix.

## Collisions resolved

Both phases have a name collision between a local skill and a plugin skill. Both resolve toward the plugin, and in both cases the qualified name is what gets invoked.

**Review — three candidates:**

| Candidate | Verdict |
|---|---|
| `code-review` (local skill) | Close, but narrower: two fixed axes (standards + spec) and it wants an originating issue/spec to check the code against. Nothing here mentions a spec or issue. |
| `code-review-and-quality` (local skill) | Generic "multi-axis review before merge" — topic-matching, no scope resolution, no triage of results. |
| `code-review:code-review` (plugin) | **Chosen.** Explicit scope resolution, planned cells, deduplication and triage, coverage reporting. Best fit for an unqualified "review this branch." |

The `/review` slash command was also considered and rejected: it's a fixed five-axis persona review, less able to adapt to whatever this branch actually contains, and it doesn't triage.

**Cleanup — three candidates:**

| Candidate | Verdict |
|---|---|
| `code-simplification` (local skill) | Generic guidance on simplifying for clarity. Overlaps, but no behaviour-preservation verification. |
| `/simplify` (command) | Reviews changed code for reuse/simplification/efficiency and applies fixes. Plausible, but it's a *quality* pass that overlaps the review — running it after a review duplicates the analysis we just paid for. |
| `code-simplifier:code-simplifier` (plugin) | **Chosen.** Deliverable is the edited code, behaviour must stay identical, test-verified between changes, reverts on breakage. |

## Skills deliberately not invoked

- **`git-workflow-and-versioning`** — the user isn't asking about branching or merge mechanics; they're asking about the *content* of the branch. The merge itself is theirs to do.
- **`security-and-hardening` / `security-auditor` / `/security-review`** — security is already one axis the review skill covers. Adding a standalone security pass on top would duplicate it, and nothing in the request flags security specifically.
- **`resolving-merge-conflicts`** — no conflict is in progress; "before I merge" is pre-merge, not mid-merge.
- **`/ship`** — pre-launch checklist with persona fan-out. This is a branch merge, not a production launch. Wrong altitude.
- **`test-driven-development`** — only becomes relevant if the review surfaces a bug needing a fix, and then only as part of that fix.
- **`ask-user-question` / `interview-me`** — the request is clear enough to act on. The one genuine ambiguity (exact review scope) has a sensible default (merge-base) that I state and offer to override, rather than blocking on a question.
- **`choosing-a-skill`** — this is the routing decision itself, not a question about the skill ecosystem.

## If phase 1 changes the picture

Routing for phase 2 is provisional on the findings:

- Correctness bugs → fix first (`debugging-and-error-recovery` or `diagnosing-bugs` if the cause isn't obvious), then simplify.
- Architectural findings — a module boundary in the wrong place, a leaky interface → `codebase-design`, not the simplifier, since those are behaviour/structure changes.
- Findings that are all trivial → skip the simplifier entirely rather than manufacture cleanup work.
