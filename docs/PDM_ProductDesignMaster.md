# Product Design Master (PDM)
> Kraken Air & Electrical - Perth Northern Suburbs

---

## 1. Product Summary

A high-performance, conversion-centric web platform for **Kraken Air & Electrical**. The site serves as a digital storefront for residents in Perth's Northern Suburbs requiring specialized electrical and HVAC services.

---

## 2. Personas & Jobs to Be Done

| Persona | Quote | Job to Be Done |
|---------|-------|----------------|
| **The Emergency Client** | "My AC died and it's 38°C in Joondalup." | Find a local, qualified tech who can arrive today. |
| **The Renovator** | "I need a qualified sparky for a split-system install." | Verify licenses and request a professional quote. |
| **The Technical Researcher** | "I need someone who understands refrigerant fluids, not just a handyman." | Confirm technical certifications. |

---

## 3. Media & Multimodal Asset Baseline

| Asset | Description |
|-------|-------------|
| **Logo** | Kraken badge (Deep Purple/Electric Gold) |
| **High-Res Imagery** | Photos of Gerrad, the branded van, and real-world installs in northern Perth suburbs |

---

## 4. SEO & Technical Metadata Schema

### JSON-LD Schema
- **Type**: `LocalBusiness` (HVAC & Electrician)
- **PostalAddress**: Northern Suburbs, Perth, WA

### Target Keywords
- Air conditioning Joondalup
- Electrician Wanneroo
- Perth HVAC fluids specialist

---

## 5. Fluid Responsive System

**Implementation**: Utilising `clamp(1rem, 5vw, 2.5rem)` for headlines to ensure the "KRAKEN" brand remains legible from mobile to 4K monitors.

```css
/* Example fluid typography */
.brand-headline {
  font-size: clamp(1rem, 5vw, 2.5rem);
}
```

---

## 9. Multi-Variant Theming System

| Theme | Description |
|-------|-------------|
| **Primary** | "Deep Voltage" – Dark Mode by default to match logo aesthetic |
| **Accessibility** | High-contrast Gold-on-Black for critical contact elements |

> [!NOTE]
> Theme implementation can be found in `/assets/theme/theme.css`
