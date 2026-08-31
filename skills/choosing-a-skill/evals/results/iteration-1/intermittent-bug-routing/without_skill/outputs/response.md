An intermittent "cannot read property 'id' of undefined" at roughly one load in five is almost always a race, not a logic error — the code reads `something.id` before the thing it depends on has arrived. The one-in-five ratio is the tell: it tracks how often a request loses the race, which varies with network latency and cache state.

Rather than guess at a fix, I'll run this through a diagnosis loop: reproduce it reliably first, then bisect down to the exact read that fires early, confirm the root cause with evidence, and only then patch it. Guessing on an intermittent bug is how you end up with a "fix" that just lowers the failure rate to one in fifty.

Here's my plan:

1. **Reproduce deterministically.** Intermittent means I need to control the variable that makes it intermittent. For a login page that usually means throttling the network, clearing session/auth state between loads, and reloading in a loop until it fires. I'll use Chrome DevTools to capture the actual stack trace, the console error, and the network waterfall at the moment of failure — the stack trace alone usually names the culprit.

2. **Find the root cause.** The usual suspects on a login page, in rough order of likelihood:
   - A component rendering `user.id` / `session.user.id` before the auth or session fetch resolves, with no loading guard.
   - An auth check that reads from a context or store that's still `undefined` on first paint (provider mounts after consumer, or hydration order differs from render order).
   - Two requests racing — e.g. a session probe and a profile fetch — where the page assumes the first has landed.
   - A redirect or token refresh that clears state mid-render.
   I'll confirm which one it is from the trace rather than patching all four.

3. **Write a failing test first, then fix.** Once I know the mechanism, I'll write a test that fails on the current code — forcing the losing side of the race — so the fix is provably a fix and the bug can't silently return. Then apply the minimal correct change (a proper loading state or guard, not an optional-chain band-aid that turns a crash into a blank screen).

4. **Verify.** Re-run the reproduction loop many times to confirm the failure rate goes to zero, not just down.

Two things would speed this up a lot if you have them:
- A stack trace or console screenshot from a failing load (even a partial one).
- Whether it's tied to a state — first visit vs. return visit, logged-out vs. expired session, hard reload vs. client-side navigation.

If you don't have those, no problem — point me at the repo and I'll start from the reproduction step.
