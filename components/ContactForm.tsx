'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name required'),
  industry: z.string().min(1, 'Please select an industry'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }

  if (submitted) {
    return (
      <Card className="border-border/40 bg-card/50 p-8 md:p-12 text-center space-y-6">
        <div className="inline-flex rounded-full bg-accent/10 p-4 text-accent">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">
          Thank You!
        </h3>
        <p className="text-lg text-foreground/70 max-w-md mx-auto">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 bg-card/50 p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
              First Name
            </label>
            <Input
              id="firstName"
              placeholder="John"
              className="bg-background border-border/40"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
              Last Name
            </label>
            <Input
              id="lastName"
              placeholder="Smith"
              className="bg-background border-border/40"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              className="bg-background border-border/40"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Phone Number
            </label>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              className="bg-background border-border/40"
              {...register('phone')}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Company and Industry */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-foreground">
              Company Name
            </label>
            <Input
              id="company"
              placeholder="Acme Corporation"
              className="bg-background border-border/40"
              {...register('company')}
            />
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-sm font-medium text-foreground">
              Industry
            </label>
            <select
              id="industry"
              className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              {...register('industry')}
            >
              <option value="">Select an industry</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="chemical">Chemical & Petrochemical</option>
              <option value="energy">Power & Energy</option>
              <option value="pharmaceutical">Pharmaceutical</option>
              <option value="logistics">Logistics & Distribution</option>
              <option value="renewable">Renewable Energy</option>
              <option value="other">Other</option>
            </select>
            {errors.industry && (
              <p className="text-sm text-red-500">{errors.industry.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your project and automation needs..."
            rows={6}
            className="w-full rounded-lg border border-border/40 bg-background px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            {...register('message')}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          size="lg"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>

        <p className="text-center text-sm text-foreground/60">
          We respect your privacy. Your information will be kept confidential.
        </p>
      </form>
    </Card>
  );
}
