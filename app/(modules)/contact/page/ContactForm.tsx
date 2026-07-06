"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { ContactContent } from "@/assets/content/contact/ContactContent";

const { fields, submitLabel } = ContactContent.form;

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend in the reference site — surface a success state locally.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-accent-500" />
        <h3 className="mt-4 text-2xl font-bold text-primary-500">Thank you!</h3>
        <p className="mt-2 text-body-text">
          Your message has been received. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => {
            setValues({});
            setSubmitted(false);
          }}
          className="mt-6 rounded-md bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.half ? "" : "sm:col-span-2"}>
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-medium text-primary-500"
            >
              {field.label}
              {field.required && <span className="text-accent-500"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.label}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-body-text outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-primary-500"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message ?? ""}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Your Message"
            className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm text-body-text outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 font-semibold text-primary-500 transition-all duration-300 hover:scale-[1.01] hover:bg-accent-400"
      >
        {submitLabel} <Send className="h-4 w-4" />
      </button>
    </form>
  );
};

export default ContactForm;
