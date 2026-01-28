# Error Trace Schema (v1.0.0)
> Kraken Air & Electrical - API Response Envelope

---

## Canonical Response Envelope

Every API call (Booking, Contact, Lead) will return the following canonical envelope:

```typescript
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorTrace;
  meta: {
    trace_id: string;
    timestamp: string;
    duration_ms: number;
  };
}

interface ErrorTrace {
  trace_id: string;
  category: ErrorCategory;
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

type ErrorCategory = 
  | 'validation'    // Invalid input (e.g., phone number format)
  | 'rate_limit'    // Bot spam prevention
  | 'authorization' // Permission denied
  | 'not_found'     // Resource doesn't exist
  | 'server_error'; // Internal failure
```

---

## Field Definitions

| Field | Type | Description |
|-------|------|-------------|
| `trace_id` | `string` | UUID for debugging (e.g., Joondalup lead drops) |
| `category` | `ErrorCategory` | Classification of error type |
| `code` | `string` | Machine-readable error code |
| `message` | `string` | Human-readable description |
| `details` | `object` | Additional context (field-level errors) |

---

## Error Categories

### `validation`
Invalid user input that failed server-side validation.

```json
{
  "trace_id": "abc123-def456",
  "category": "validation",
  "code": "INVALID_PHONE",
  "message": "Phone number format is invalid",
  "details": {
    "field": "phone",
    "expected": "Australian mobile format",
    "received": "123"
  }
}
```

### `rate_limit`
Request throttled to prevent bot spam.

```json
{
  "trace_id": "abc123-def456",
  "category": "rate_limit",
  "code": "TOO_MANY_REQUESTS",
  "message": "Too many requests. Please try again in 60 seconds.",
  "details": {
    "retry_after": 60,
    "limit": "5 requests per minute"
  }
}
```

---

## Success Response Example

```json
{
  "success": true,
  "data": {
    "lead_id": "lead_abc123",
    "status": "received",
    "estimated_response": "within 2 hours"
  },
  "meta": {
    "trace_id": "abc123-def456",
    "timestamp": "2026-01-28T21:08:00+08:00",
    "duration_ms": 142
  }
}
```

---

## Debugging Workflow

1. Customer reports issue
2. Support retrieves `trace_id` from error response
3. Search logs: `grep "abc123-def456" /var/log/kraken/api.log`
4. Correlate with downstream services (Postmark, etc.)
