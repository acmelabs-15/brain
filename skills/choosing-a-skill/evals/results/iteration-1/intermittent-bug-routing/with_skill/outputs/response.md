Yes — and the "one in five loads" part is the thing to attack first, not the stack trace.

An intermittent failure with no reliable way to reproduce it is exactly the case where reading code to build a theory burns the most time for the least return. So I'm going to run `diagnosing-bugs`, and Phase 1 of that skill is the whole job right now: build a **tight loop** — one command I can run that goes **red** on this specific bug, deterministically and fast. Until that command exists I won't start proposing fixes, because with a 1-in-5 bug any fix I make will look like it worked.

What that looks like here:

1. **Get the real trace.** `cannot read property 'id' of undefined` is the symptom, not the location. I need the failing file and line — from the browser console, a sourcemapped stack, or an error report if you have Sentry or similar. Which object was undefined tells us more than the message does.
2. **Make the intermittency deterministic.** A 1-in-5 rate on page load almost always means a race: two things resolving in an order that isn't guaranteed. Common shapes on a login page are a render reading `user.id` / `session.user.id` before the auth or session fetch settles, a `/me`-style request racing a redirect, or persisted state read from storage before hydration finishes. The loop I want is one that forces the losing order every time — throttling or stubbing the relevant request so the slow path always wins — rather than one that reloads the page twenty times and hopes.
3. **Confirm red, then fix.** Once that command fails reliably on demand, the fix is small and, crucially, provable: the same command goes green, and I can show you it was red first.

I'll also add the guard (optional chaining or an explicit loading state) as part of the fix — but the guard alone would just hide it, so I want the ordering bug named before I paper over it.

To move fast, the two most useful things you can hand me: the full stack trace from a failing load, and whether the login page is talking to an auth provider or your own session endpoint. If neither is to hand I'll start from the trace I can capture myself.
