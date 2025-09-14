import { useEffect, useState } from 'react';

export default function EmailValidator() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  function validate(values) {
    const errs = {};
    // name
    if (!values.name.trim()) { // If name 
      errs.name = 'Name is required';
    } else if (values.name.trim().length < 2) {
      errs.name = 'Use at least 2 characters';
    }

    // email
    if (!values.email.trim()) {
      errs.email = 'Email is required';
    } else if (!isValidEmail(values.email.trim())) {
      errs.email = 'Email looks invalid';
    }

    // password
    const pw = values.password;
    if (!pw) {
      errs.password = 'Password is required';
    } else {
      if (pw.length < 8) errs.password = 'Password must be at least 8 characters';
      else {
        const checks = [
          /[a-z]/.test(pw),
          /[A-Z]/.test(pw),
          /[0-9]/.test(pw),
          /[^A-Za-z0-9]/.test(pw),
        ];
        if (checks.filter(Boolean).length < 3) {
          errs.password = 'Use a mix of uppercase, lowercase, numbers and symbols';
        }
      }
    }

    // confirm
    if (!values.confirm) {
      errs.confirm = 'Confirm your password';
    } else if (values.confirm !== values.password) {
      errs.confirm = 'Passwords do not match';
    }

    return errs;
  }

  function isValidEmail(email) {
    // simple, pragmatic regex that rejects most invalid emails while remaining readable
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function passwordScore(pw) {
    let score = 0;
    if (!pw) return score;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score; // 0-5
  }

  function passwordLabel(score) {
    if (score <= 1) return { label: 'Very weak', color: 'bg-red-500' };
    if (score === 2) return { label: 'Weak', color: 'bg-orange-400' };
    if (score === 3) return { label: 'Medium', color: 'bg-yellow-400' };
    if (score === 4) return { label: 'Strong', color: 'bg-green-400' };
    return { label: 'Very strong', color: 'bg-green-600' };
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirm: true });
    const errs = validate(form);
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length === 0) {
      setSuccessMsg('Form submitted successfully — email validated!');
      setTimeout(() => {
        setSuccessMsg('');
        setForm({ name: '', email: '', password: '', confirm: '' });
        setTouched({});
        setSubmitted(false);
      }, 2500);
    } else {
      setSuccessMsg('');
    }
  };

  const pwScore = passwordScore(form.password);
  const pwMeta = passwordLabel(pwScore);

  return (
    <div className="flex flex-center justify-center p-6 bg-black text-green-100 min-h-[80vh]">
      <div className="w-full max-w-2xl bg-gradient-to-b from-black/80 to-green-900/10 border border-green-700 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-green-200">Email Validator & Form Validation</h2>
        <p className="mb-6 text-green-300">A reactive form that validates email, password strength, and confirm password.</p>

        {successMsg && (
          <div role="status" className="mb-6 p-4 rounded-md bg-green-600 text-black font-semibold">
            {successMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-transparent border px-4 py-2 rounded-md placeholder-green-500 text-green-100 focus:outline-none focus:ring-2 ${
                touched.name && errors.name ? 'border-red-500 ring-red-400' : 'border-green-700 ring-green-400'
              }`}
              placeholder="Your name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-400" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-transparent border px-4 py-2 rounded-md placeholder-green-500 text-green-100 focus:outline-none focus:ring-2 ${
                touched.email && errors.email ? 'border-red-500 ring-red-400' : 'border-green-700 ring-green-400'
              }`}
              placeholder="you@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              type="email"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-400" role="alert">
                {errors.email}
              </p>
            )}
            {!errors.email && form.email && touched.email && (
              <p className="mt-1 text-xs text-green-300">Looks good ✅</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPassword ? 'text' : 'password'}
                className={`w-full bg-transparent border px-4 py-2 rounded-md placeholder-green-500 text-green-100 focus:outline-none focus:ring-2 ${
                  touched.password && errors.password ? 'border-red-500 ring-red-400' : 'border-green-700 ring-green-400'
                }`}
                placeholder="Create a strong password"
                aria-invalid={errors.password ? 'true' : 'false'}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-2 text-sm text-green-200 hover:text-green-100"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="mt-1 text-xs text-red-400" role="alert">
                {errors.password}
              </p>
            )}

            {/* Strength */}
            <div className="mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-green-300">Strength: {pwMeta.label}</span>
                <span className="text-xs text-green-400">{pwScore}/5</span>
              </div>
              <div className="w-full h-2 bg-green-900 rounded-md overflow-hidden">
                <div className={`h-full ${pwMeta.color}`} style={{ width: `${(pwScore / 5) * 100}%` }} />
              </div>
              <ul className="mt-2 text-xs text-green-300 space-y-1">
                <li>• Min 8 chars</li>
                <li>• Uppercase, lowercase, number, symbol recommended</li>
              </ul>
            </div>
          </div>

          {/* Confirm */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              id="confirm"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? 'text' : 'password'}
              className={`w-full bg-transparent border px-4 py-2 rounded-md placeholder-green-500 text-green-100 focus:outline-none focus:ring-2 ${
                touched.confirm && errors.confirm ? 'border-red-500 ring-red-400' : 'border-green-700 ring-green-400'
              }`}
              placeholder="Repeat password"
              aria-invalid={errors.confirm ? 'true' : 'false'}
            />
            {touched.confirm && errors.confirm && (
              <p className="mt-1 text-xs text-red-400" role="alert">
                {errors.confirm}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-green-400 focus:ring-2 focus:ring-green-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({ name: '', email: '', password: '', confirm: '' });
                setTouched({});
                setErrors({});
                setSuccessMsg('');
              }}
              className="text-sm text-green-300 hover:text-green-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
