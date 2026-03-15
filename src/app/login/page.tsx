"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Mail, Lock, User, Loader2, KeyRound } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    code: "",
  });

  const [verificationStep, setVerificationStep] = useState(false);
  const [forgotPasswordStep, setForgotPasswordStep] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (verificationStep) {
        // Verify OTP
        const res = await fetch("/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, code: formData.code }),
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error);
        }
        
        window.location.href = "/dashboard";
      } else if (forgotPasswordStep) {
        // Forgot password - send reset email
        const res = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error);
        }
        
        setSuccess(data.message);
        setForgotPasswordStep(false);
      } else if (isLogin) {
        // Login
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error);
        }
        
        window.location.href = "/dashboard";
      } else {
        // Register
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password, name: formData.name }),
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error);
        }
        
        setSuccess(data.message);
        setVerificationStep(true);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
    setVerificationStep(false);
    setForgotPasswordStep(false);
    setFormData({ ...formData, code: "" });
  };

  const handleForgotPassword = () => {
    setForgotPasswordStep(true);
    setError("");
    setSuccess("");
  };

  const handleBackToLogin = () => {
    setForgotPasswordStep(false);
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen mesh-gradient grid-pattern flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      
      <div className="relative w-full max-w-md">
        {/* Back to home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-card/80 border-border/50 backdrop-blur-xl">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              {verificationStep 
                ? "Verify Your Email" 
                : forgotPasswordStep
                  ? "Reset Password"
                  : isLogin 
                    ? "Welcome Back" 
                    : "Create Account"
              }
            </CardTitle>
            <CardDescription>
              {verificationStep 
                ? `Enter the 6-digit code sent to ${formData.email}`
                : forgotPasswordStep
                  ? "Enter your email and we'll send you a new password"
                  : isLogin 
                    ? "Sign in to your LeadProspect account"
                    : "Start your 7-day free trial"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!verificationStep && !forgotPasswordStep && !isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 bg-background/50"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-background/50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={verificationStep}
                  />
                </div>
              </div>
              
              {!verificationStep && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 bg-background/50"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              )}
              
              {verificationStep && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="000000"
                    className="text-center text-2xl tracking-[1em] bg-background/50"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value.replace(/\D/g, "").slice(0, 6) })}
                    required
                    maxLength={6}
                  />
                </div>
              )}
              
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}
              
              {success && (
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm text-primary">{success}</p>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {verificationStep 
                  ? "Verify & Continue" 
                  : forgotPasswordStep
                    ? "Send New Password"
                    : isLogin 
                      ? "Sign In" 
                      : "Create Account"
                }
              </Button>
            </form>
            
            {!verificationStep && !forgotPasswordStep && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="ml-1 text-primary hover:underline font-medium"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
                {isLogin && (
                  <p className="mt-2">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </p>
                )}
              </div>
            )}
            
            {verificationStep && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setVerificationStep(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Go back
                </button>
              </div>
            )}

            {forgotPasswordStep && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Back to Login
                </button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <p className="text-center text-xs text-muted-foreground mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
