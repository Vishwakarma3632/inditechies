"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { serviceInterestOptions } from "@/data/contact";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  service: "Not sure yet",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid business email address.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Share a little more context (at least 20 characters).";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          service: values.service,
          message: values.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry.",
        );
      }

      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  } 


  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-cyan-400/25 bg-surface p-8"
        role="status"
      >
        <h2 className="text-2xl font-semibold">Thanks — we have your draft.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-strong">
          This website is not connected to a mailbox yet, so nothing was sent
          to a server. Please email{" "}
          <a className="font-semibold text-cyan-400" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          with the same details. When a backend is added, this form can post
          there without changing the fields.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field
        id="name"
        label="Name"
        error={errors.name}
        value={values.name}
        onChange={(value) => setValues((current) => ({ ...current, name: value }))}
      />
      <Field
        id="email"
        label="Business email"
        type="email"
        error={errors.email}
        value={values.email}
        onChange={(value) => setValues((current) => ({ ...current, email: value }))}
      />
      <Field
        id="company"
        label="Company"
        optional
        value={values.company}
        onChange={(value) => setValues((current) => ({ ...current, company: value }))}
      />
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">
          Service of interest
        </label>
        <select
          id="service"
          className="min-h-12 w-full rounded-xl border border-white/12 bg-navy-900 px-4 text-sm"
          value={values.service}
          onChange={(event) =>
            setValues((current) => ({ ...current, service: event.target.value }))
          }
        >
          {serviceInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={inputClass(Boolean(errors.message))}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-red-300" role="alert">
          Something went wrong locally. Please email {siteConfig.email} instead.
        </p>
      ) : null}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Preparing…" : "Submit enquiry"}
      </Button>
      <p className="text-xs leading-relaxed text-muted">
        Submitting validates the form in your browser only. Connect an API or
        email service later; until then, use {siteConfig.email}.
      </p>
    </form>
  );
}

function inputClass(invalid?: boolean) {
  return cn(
    "min-h-12 w-full rounded-xl border bg-navy-900 px-4 text-sm text-white",
    invalid ? "border-red-400/70" : "border-white/12",
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  optional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {optional ? <span className="text-muted"> (optional)</span> : null}
      </label>
      <input
        id={id}
        type={type}
        className={inputClass(Boolean(error))}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={id === "email" ? "email" : id === "name" ? "name" : "organization"}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
