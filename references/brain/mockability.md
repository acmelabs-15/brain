Adapted from mattpocock/skills, MIT, commit c55ee46.

# Designing for Mockability

The test-driven-development skill sets the rule: mock only at system boundaries (external APIs, time and randomness, sometimes the database or file system), never your own modules. This reference covers the other half: how to shape a boundary so the mock is small and honest. Both moves are seam design; the codebase-design skill holds the vocabulary (module, interface, seam, adapter).

## 1. Use dependency injection

Pass an external dependency in. Do not create it inside the function. A dependency built inside cannot be swapped in a test without patching the module.

```typescript
// Easy to mock
function processPayment(order, paymentClient) {
  return paymentClient.charge(order.total);
}

// Hard to mock
function processPayment(order) {
  const client = new StripeClient(process.env.STRIPE_KEY);
  return client.charge(order.total);
}
```

## 2. Prefer SDK-style interfaces over generic fetchers

Create one specific function per external operation. Avoid one generic function with conditional logic inside.

```typescript
// GOOD: Each function is independently mockable
const api = {
  getUser: (id) => fetch(`/users/${id}`),
  getOrders: (userId) => fetch(`/users/${userId}/orders`),
  createOrder: (data) => fetch('/orders', { method: 'POST', body: data }),
};

// BAD: Mocking requires conditional logic inside the mock
const api = {
  fetch: (endpoint, options) => fetch(endpoint, options),
};
```

The SDK approach means:

- Each mock returns one specific shape
- No conditional logic in test setup
- Easier to see which endpoints a test exercises
- Type safety per endpoint

## Checklist at a boundary

- [ ] The external dependency arrives as a parameter or a constructor argument
- [ ] Each external operation has its own named function
- [ ] The test double returns one shape and holds no branching
- [ ] The test asserts on the outcome through the seam, not on the call sequence
