'use client';

import { useState, useEffect } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { googleLogin, appleLogin } from './oauth';
import './login.css';

// Google & Apple Icons
export const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 533.5 544.3">
    <path fill="#4285F4" d="M533.5 278.4c0-18.5-1.5-37.1-4.5-55.3H272v104.7h146.9c-6.3 33.9-25.6 62.8-54.5 82.1v68.2h87.9c51.4-47.4 81.2-116.8 81.2-199.7z"/>
    <path fill="#34A853" d="M272 544.3c73.5 0 135-24.5 180-66.6l-87.9-68.2c-24.5 16.5-56 26-92.1 26-70.7 0-130.5-47.8-152-112.1H30v70.3c45 89 136.2 150.6 242 150.6z"/>
    <path fill="#FBBC05" d="M120 322.6c-10.5-31-10.5-64.4 0-95.4V156.9H30c-37.8 73.1-37.8 160.2 0 233.3l90-67.6z"/>
    <path fill="#EA4335" d="M272 107.1c38.9-0.6 75.7 14 103.8 41.4l77.8-77.8C406.6 25.5 344.1 0 272 0 166.2 0 75 61.6 30 150.6l90 70.3c21.5-64.3 81.3-112 152-112z"/>
  </svg>
);

export const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M16.365 1.43c0 1.14-.46 2.25-1.19 3.03-.8.88-1.97 1.46-3.18 1.46-.08-1.18.48-2.38 1.28-3.17.74-.72 1.9-1.22 3.09-1.32.05.02.09.03.12.04zM20.5 16.03c-.2.45-.47.88-.79 1.29-1.04 1.36-2.3 2.45-3.77 2.45-1.25 0-1.84-.8-3.44-.8-1.6 0-2.08.8-3.44.8-1.5 0-2.8-1.37-3.81-2.74-2.08-2.73-3.66-7.67-1.58-11.08.88-1.46 2.46-2.39 4.1-2.39 1.47 0 2.92.95 3.44.95.51 0 2.24-1.17 3.74-1.12.64.02 2.42.26 3.57 1.95-.08.05-2.14 1.26-2.14 3.76 0 2.51 2.05 3.39 2.12 3.44-.01.05-.14.59-.5 1.25z"/>
  </svg>
);

export default function LoginApp() {
  const [role, setRole] = useState<'user' | 'publisher'>('user');
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // Publisher cannot signup
  useEffect(() => {
    if (role === 'publisher') setMode('login');
  }, [role]);

  // Slider content
  const slides = [
    { title: "Breaking News at Your Fingertips", description: "Stay updated with the latest headlines in real-time." },
    { title: "Join Our Publisher Network", description: "Share your stories and reach a wider audience." },
    { title: "Advanced Dashboard Analytics", description: "Track readership and engagement with ease." }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* LEFT BRAND */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#11827] items-center justify-center p-12">
        <div className="text-center">
          <h1 className="text-[#fafafa] text-5xl font-bold mb-4">NEWSHUB</h1>
          <p className="text-[#a3a3a3] text-lg max-w-md">
            Trusted newsroom platform where stories breathe and truth finds its voice.
          </p>
        </div>
      </div>

      {/* RIGHT AUTH */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#000000] p-8">
        <div className="w-full max-w-md">
          {/* Role Toggle */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-l-lg ${role === 'user' ? 'bg-[#2563eb] text-white' : 'bg-[#1f1f1f] text-[#fafafa]'}`}
              onClick={() => setRole('user')}
            >
              User
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${role === 'publisher' ? 'bg-[#2563eb] text-white' : 'bg-[#1f1f1f] text-[#fafafa]'}`}
              onClick={() => setRole('publisher')}
            >
              Publisher
            </button>
          </div>

          {/* Login Card */}
          <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl p-8">
            {/* Slider */}
            <div className="slider bg-[#11827] rounded-xl p-4 mb-6 text-center">
              <h3 className="text-white font-bold">{slides[currentSlide].title}</h3>
              <p className="text-[#fafafa] text-sm mt-1">{slides[currentSlide].description}</p>
            </div>

            {/* Heading */}
            <h2 className="text-[#ffffff] text-2xl font-bold mb-1">{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
            <p className="text-[#a3a3a3] mb-4">
              {role === 'publisher'
                ? 'Access your publisher dashboard'
                : mode === 'login'
                  ? 'Access your account'
                  : 'Join the NewsHub network'}
            </p>

            {/* Form Fields */}
            <form className="space-y-4">
              {role === 'user' && mode === 'signup' && (
                <div className="field">
                  <label className="block mb-1">Name</label>
                  <div className="flex items-center bg-[#1f293f] rounded-lg p-2">
                    <User size={18} className="mr-2 text-[#e2e2e2]" />
                    <input placeholder="Your full name" className="bg-[#1f293f] flex-1 outline-none text-[#fafafa]" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="field">
                <label className="block mb-1">Email</label>
                <div className="flex items-center bg-[#1f293f] rounded-lg p-2">
                  <Mail size={18} className="mr-2 text-[#e2e2e2]" />
                  <input placeholder="publisher@newshub.com" className="bg-[#1f293f] flex-1 outline-none text-[#fafafa]" />
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <label className="block mb-1">Password</label>
                <div className="flex items-center bg-[#1f293f] rounded-lg p-2">
                  <Lock size={18} className="mr-2 text-[#e2e2e2]" />
                  <input type="password" placeholder="••••••••" className="bg-[#1f293f] flex-1 outline-none text-[#fafafa]" />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full py-2 bg-[#2563eb] rounded-lg text-[#ffffff] font-semibold hover:bg-[#11827] transition">
                {mode === 'login' ? 'Sign In' : 'Sign Up'}
              </button>

              {/* OAuth only for Users */}
              {role === 'user' && (
                <>
                  <div className="text-center text-[#fafafa] my-2">or continue with</div>
                  <button type="button" onClick={googleLogin} className="w-full flex items-center justify-center gap-2 py-2 bg-[#1f293f] rounded-lg hover:bg-[#2563eb] transition">
                    <GoogleIcon />
                    Continue with Google
                  </button>
                  <button type="button" onClick={appleLogin} className="w-full flex items-center justify-center gap-2 py-2 bg-[#1f293f] rounded-lg hover:bg-[#2563eb] transition mt-2">
                    <AppleIcon />
                    Continue with Apple
                  </button>
                </>
              )}
            </form>

            {/* Switch login/signup only for users */}
            {role === 'user' && (
              <div className="mt-4 text-center text-[#fafafa]">
                {mode === 'login' ? (
                  <>New here? <span className="text-[#2563eb] cursor-pointer" onClick={() => setMode('signup')}>Create account</span></>
                ) : (
                  <>Already have an account? <span className="text-[#2563eb] cursor-pointer" onClick={() => setMode('login')}>Sign in</span></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
