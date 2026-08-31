# Routing decision

## Read of the request

"We need password reset. Email a one-time link, let them set a new password, expire the link after an hour. Can you build it?"

This is a **build** request, not an advise request. The user said "can you build it" and supplied three concrete requirements (emailed link, single-use, 1h expiry). The correct response is to move toward implementation — not to hand back an essay about password reset design and stop.

But two facts change what "build" means here:

1. **There is no repository and no existing auth code.** I cannot read a framework, an ORM, a password hasher, a session store, or an email sender. Every implementation decision would be invented rather than grounded. Writing code against guessed stack conventions produces something the user has to throw away.
2. **This is security-critical authentication code.** Password reset is a top-tier account-takeover surface. The gap between "works" and "correct" is entirely in details the user did not mention — token hashing at rest, enumeration-safe responses, session invalidation, replay prevention, rate limiting. A build that satisfies the three stated requirements and misses these is a working vulnerability.

So: commit to building, state the security-critical design decisions up front so they're visible and correctable, and ask only the small number of questions that are genuinely unanswerable without the codebase. Not a refusal to build; a build that starts one step back.

## Skills I would invoke, in order

### 1. `security-and-hardening` — invoke first, before writing any code
Its description names authentication and user sessions explicitly. Password reset is squarely inside it. This is the highest-value skill for this task because the failure modes here are not "does it work" but "does it leak accounts", and those are exactly what this skill exists to catch. Invoking it *before* the design is settled, rather than as a review pass afterward, is the point — retrofitting token-hashing-at-rest and enumeration-safe responses onto finished code is worse than designing them in.

Concretely I would use it to pin: CSPRNG token generation, storing only the token hash, constant-time lookup, single-use redemption inside the password-update transaction, server-side expiry, uniform response regardless of account existence, rate limiting per email and per IP, session invalidation on reset, notification to the old address, and keeping raw tokens out of logs.

### 2. `spec-driven-development` — only if the answers reveal real ambiguity
Its trigger is "a new feature and no specification exists yet." A three-sentence request for security-critical auth is underspecified, and a short spec is cheap insurance. But I would **not** run this reflexively: if the user comes back with "it's a Rails app, Postmark, here's the repo," the requirements are then clear enough that a spec is ceremony rather than value, and I'd skip straight to planning. I'm holding this as conditional, not committed.

### 3. `test-driven-development` — during the build
Password reset has a set of test cases that are effectively mandatory and enumerable up front: expired token rejected, already-used token rejected, wrong token rejected, token for user A cannot reset user B, sessions invalidated after reset, nonexistent-email request returns the same response as a real one. These are precisely the cases where the test is the specification of the security property. Writing them first is how the security decisions from step 1 stay enforced rather than aspirational.

### 4. `incremental-implementation` — during the build
Its trigger is a change touching more than one file, which this certainly is: migration, request endpoint, redemption endpoint, email template, token service, tests. Landing it as migration → token service + tests → request endpoint → redemption endpoint → email keeps each step verifiable.

### 5. `code-review-and-quality` or the `security-auditor` agent — after the build
A second security pass over finished auth code, with fresh eyes on the diff. For code in this risk class the review is not optional polish.

## Skills I deliberately would NOT invoke

- **`interview-me`** — its trigger fires on "build me X" without "for whom or why now," and technically applies. But the user's intent is not ambiguous: they want password reset, and they named the three behaviours they care about. Running a one-question-at-a-time interview to ~95% confidence on a request this clear would be an obstruction dressed as diligence. Three targeted questions in the reply do the same job at a fraction of the cost.
- **`grilling`** — the user asked for a build, not a stress-test of a plan. Adversarially interrogating a request this reasonable would be the wrong register entirely.
- **`doubt-driven-development`** — its stakes criteria (security-sensitive, production) match, but it wraps every non-trivial decision in a fresh-context adversarial review. That overhead is justified for a subtle algorithmic change in unfamiliar code; here, `security-and-hardening` plus a review pass covers the same risk far more cheaply, and the design is well-trodden rather than novel.
- **`source-driven-development`** — worth reconsidering once the framework is known, since framework-specific auth idioms are exactly where stale training data bites. Premature with no stack identified.
- **`research`** — password reset is a solved, standard pattern. There is nothing to investigate.
- **`api-and-interface-design`** — two endpoints with an obvious shape. Doesn't earn a dedicated skill invocation.
- **`frontend-ui-engineering`** — there is a "set a new password" form implied, but the user's ask is the mechanism, not the UI. Would only invoke if they want the frontend built too.

## Summary of the judgement

Build, don't advise — the user asked for a build and it's a build-shaped task. But route through `security-and-hardening` **before** writing code rather than after, because with no repo to read and account-takeover as the failure mode, the cheapest correct move is to surface the security decisions and the three stack questions in the same reply that commits to building. The answer to "can you build it?" is "yes, and here's what I'm going to do" — not a wall of caveats, and not code written against a guessed framework.
