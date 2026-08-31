An intermittent "cannot read property 'id' of undefined" at roughly one load in five is almost always a race, not a logic error — something reads a value before the thing that populates it has resolved. But I don't want to guess at which one; I want the actual stack frame from a real failing load first.

Here's how I'll work it:

1. **Reproduce and capture, before hypothesising.** I'll load the login page repeatedly in a real browser with the console and network panel recording, until I catch a failure. The one-in-five rate means a handful of reloads should do it. What I need off that failing load is the exact stack trace (which file, which line, which property access), and the network waterfall for that load specifically — the ordering of requests is usually the tell.
2. **Compare a failing load against a passing one.** Same page, same code, different outcome — so the difference is in timing or in data. Diffing the two waterfalls and the two console traces normally isolates the variable in a couple of minutes.
3. **Only then form a hypothesis, and prove it.** Once I know the exact line and what's undefined there, I'll trace back to who was supposed to populate it and why they sometimes hadn't yet. I'll confirm the mechanism by making the failure happen on demand — e.g. throttling the network or stubbing the slow response — rather than reloading and hoping.
4. **Fix at the root, and lock it in with a test.** An intermittent bug that's "fixed" by reload-and-shrug isn't fixed. I'll write a test that fails on the pre-fix code (forcing the bad ordering deterministically) before applying the change, so we know the fix actually addresses the cause and the bug can't silently come back.

Two things that would speed this up a lot if you have them to hand — but I can proceed without either:
- the stack trace from any failure you've already seen, or a Sentry/logging link
- whether it's environment-specific (only prod, only cold loads, only logged-out, only a particular browser)

Starting with step 1 now.
