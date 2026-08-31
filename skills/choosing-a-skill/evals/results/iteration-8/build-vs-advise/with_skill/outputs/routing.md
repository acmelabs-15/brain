# Routing

## The call

"We need password reset… can you build it?" is a **request to build**, and the honest read of it is
**a real feature with an unclear spec**. That is the fourth row of the routing table:

| The job | Route |
| --- | --- |
| A real feature, spec unclear | `grilling` → `to-spec` → `to-tickets` → `implement-spec` |

The user named three requirements (emailed one-time link, set new password, one-hour expiry). That is
enough to sound complete and is not. The unresolved decisions are the ones that make password reset a
security feature rather than a CRUD form: token stored hashed vs. plaintext, user-enumeration
behaviour in the request response, session invalidation on reset, single-use enforcement separate
from expiry, rate limiting, and what the email actually contains. Picking those silently is the
failure this route exists to prevent.

## What I commit to

**One skill: `grilling`.** That is the only commitment. It works the design tree in rounds, asks the
whole frontier at once with a recommended answer per question, finds facts itself via sub-agents
rather than asking the user things it can look up, and is done when the frontier is empty. Expected
cost: one round, possibly two.

Everything after that is **conditional on what the grilling returns**, and is stated to the user as
conditional rather than as a numbered five-step plan. Listing `grilling` → `to-spec` → `to-tickets` →
`implement-spec` as four commitments up front would be ceremony sold as a plan: for a password reset
in a normal web app, the middle two are very likely unnecessary.

## The two branches

- **Boring answers (expected).** Contained change I now understand → `test-driven-development`, then
  commit. Password reset is unusually well suited to this: the security properties *are* test cases
  (expired token rejected, reused token rejected, token bound to the right user, old sessions gone).
  Skipping `to-spec` and `to-tickets` here is a normal decision, not a violation.
- **Answers open it up** (SSO interaction, admin-initiated reset, multi-tenant, migration of an
  existing credential store) → then it genuinely earns `to-spec` → `to-tickets` → `implement-spec`,
  and I say so explicitly before writing code rather than sliding into it.

## Consulted, not run

`security-and-hardening` is Lineage A — a 499-line encyclopedic checklist. The lineage guidance is
explicit that reading it end-to-end before touching an auth handler is a poor trade, while reading
its OWASP section is a good one. So: pull the token-generation and enumeration material, apply it
against the written code, move on. It is reference, not a workflow, and it does not go in the chain.

## Deliberately not routed to

- **`interview-me`** — Lineage A's interview skill, one question at a time to ~95% confidence. Real
  collision with `grilling`, and `grilling` wins: it asks the whole frontier in one pass with
  recommendations attached, and researches its own facts instead of spending user turns on them.
- **`spec-driven-development` / `/spec`** — would produce a specification document for a feature
  whose spec fits in a paragraph once the six open questions are answered. Ceremony ahead of the
  interview that would tell us whether it is needed.
- **`skills:*` plugin lifecycle** (`skills:research` → `skills:decisions` → `skills:spec` →
  `skills:build`) — the heavyweight ACMElabs track, Brain knowledge graph, JIRA sync, formal gates.
  Pick one track per project and stay on it; nothing here says this project is on the plugin track,
  and password reset is not the thing to onboard it with.
- **`doubt-driven-development`** — its triggers (security-sensitive logic, high stakes) do match.
  Held in reserve for the token-handling code specifically if the grilling shows anything unusual;
  running it over the whole feature is a review budget spent before there is anything to review.
- **`/build auto`** — requires a spec at a known path and a clean tree. There is no spec yet, so it
  has nothing to consume.
- **`/ship`, `code-review`, `/review`** — post-implementation. Naming them now would inflate one
  commitment into five.

## Order

1. `grilling` — now, with the user's go-ahead.
2. *Then, conditional:* `test-driven-development` (expected) **or** `to-spec` → `to-tickets` →
   `implement-spec` (if the frontier turns out wider than it looks).
3. Throughout: OWASP section of `security-and-hardening` as a reference read against the diff.

No tracker resolution needed unless branch 2b fires; if `to-tickets` runs, tickets resolve by the
standard order (repo `docs/agents/issue-tracker.md`, then repo convention, then the local-markdown
default under `.scratch/<feature-slug>/issues/`), and I state where I saved them rather than asking.
