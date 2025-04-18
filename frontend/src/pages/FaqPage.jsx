import React from 'react';

// A functional component implementing a responsive FAQ section with accessible collapsible panels
const FaqPage = () => (
  <main className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h1>
    <section className="space-y-6">
      {/* Each <details> element provides a native, accessible expand/collapse UI */}
      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How is authentication implemented and secured?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Authentication relies on a two‑token strategy: a short‑lived <code>accessToken</code> and a long‑lived <code>refreshToken</code>. Both tokens are JWTs signed with <code>HS512</code> algorithm using <code>JWT_SECRET</code>. The <code>accessToken</code> resides in memory, while the <code>refreshToken</code> is stored as an <strong>HttpOnly</strong>, <strong>Secure</strong> cookie to mitigate XSS attacks. Token rotations occur on every refresh, with old tokens revoked in the database to prevent replay attacks.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          What database design patterns are used for product queries?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <ul className="list-disc list-inside">
            <li>
              <strong>Schema design:</strong> Products stored in MongoDB with denormalized fields for category and tags to optimize read performance.
            </li>
            <li>
              <strong>Indexing:</strong> Compound indexes on <code>category</code>, <code>price</code>, and <code>rating</code> accelerate filter queries.
            </li>
            <li>
              <strong>Pagination:</strong> Cursor‑based pagination using <code>_id</code> ensures stable ordering and avoids skip/limit performance issues.
            </li>
            <li>
              <strong>Caching:</strong> Redis caches hot product lists and invalidates entries on CRUD operations.
            </li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How does the shopping cart synchronize across sessions?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Cart state is managed client‑side with Redux Toolkit. On login, the frontend dispatches <code>fetchCart()</code> to hydrate the local slice from the backend via a protected <code>GET /api/cart</code> endpoint. All modifications (add/remove/update) are sent with optimistic updates: the UI updates immediately, then reconciles with the server response. Unauthenticated carts persist in <code>localStorage</code> and merge on auth events.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          What is the refund and return workflow under the hood?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Returns are managed via an <code>orders</code> microservice. Upon user request, a <code>POST /api/orders/:id/return</code> call triggers a state transition in the order state machine (&gt;= <code>DELIVERED</code> to <code>RETURN_REQUESTED</code>). Webhooks notify payment gateways to issue refunds, logged in MongoDB with an <code>idempotencyKey</code> to prevent double reimbursement.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How are product images optimized and served?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            We leverage Cloudinary’s CDN and on‑the‑fly transformations. Uploaded via Multer, images are streamed to Cloudinary, which automatically generates responsive variants (webp, progressive JPEG). The frontend uses <code>&lt;img srcSet&gt;</code> and <code>loading="lazy"</code> attributes to deliver the appropriately sized asset per viewport, improving LCP and cumulative layout shift metrics.
          </p>
        </div>
      </details>
    </section>
  </main>
);

export default FaqPage;