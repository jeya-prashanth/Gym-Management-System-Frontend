import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    profilePicture: null
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      formDataToSend.append('role', 'member');

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Member registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-[#1c1f2a] p-8 rounded-lg w-full max-w-md shadow-xl border border-gray-700'>
        <div className='text-center mb-8'>
          <div className='flex justify-center mb-4'>
            <div className='bg-[#2196f3] p-3 rounded-full'>
              <FaUser className='text-2xl text-white' />
            </div>
          </div>
          <h2 className='text-2xl text-white font-bold'>Member Registration</h2>
          <p className='text-gray-400 mt-2'>Create your member account to get started</p>
        </div>
        
        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className='block text-sm text-white font-medium mb-1'>Full Name</label>
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={'w-full px-4 py-2.5 rounded-lg bg-[#2c2f3a] text-white border focus:outline-none focus:border-[#2196f3] transition-colors'}
                placeholder='Enter your full name'
              />
            </div>
            {/* {errors.name && <p className='mt-1 text-sm text-red-400'>{errors.name}</p>} */}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className='block text-sm text-white font-medium mb-1'>Email</label>
            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={'w-full px-4 py-2.5 rounded-lg bg-[#2c2f3a] text-white border focus:outline-none focus:border-[#2196f3] transition-colors'}
                placeholder='Enter your email'
              />
            </div>
            {/* {errors.email && <p className='mt-1 text-sm text-red-400'>{errors.email}</p>} */}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Password Field */}
            <div>
              <label htmlFor='password' className='block text-sm text-white font-medium mb-1'>Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={'w-full pr-10 px-4 py-2.5 rounded-lg bg-[#2c2f3a] text-white border focus:outline-none focus:border-[#2196f3] transition-colors'}
                  placeholder='Password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#2196f3] transition-colors'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* {errors.password && <p className='mt-1 text-sm text-red-400'>{errors.password}</p>} */}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor='confirmPassword' className='block text-sm text-white font-medium mb-1'>Confirm Password</label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={'w-full pr-10 px-4 py-2.5 rounded-lg bg-[#2c2f3a] text-white border focus:outline-none focus:border-[#2196f3] transition-colors'}
                  placeholder='Confirm password'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#2196f3] transition-colors'
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* {errors.confirmPassword && <p className='mt-1 text-sm text-red-400'>{errors.confirmPassword}</p>} */}
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor='phone' className='block text-sm text-white font-medium mb-1'>Phone Number (Optional)</label>
            <div className='relative'>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className={'w-full px-4 py-2.5 rounded-lg bg-[#2c2f3a] text-white border focus:outline-none focus:border-[#2196f3] transition-colors'}
                placeholder='Enter phone number'
              />
            </div>
            {/* {errors.phone && <p className='mt-1 text-sm text-red-400'>{errors.phone}</p>} */}
            <p className='mt-1 text-xs text-gray-400'>9-15 digits, numbers only</p>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#1c1f2a] border-2 border-[#2196f3] hover:bg-[#2196f3] text-white py-2 px-4 rounded-lg transition-colors h-11'
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className='text-center'>
            <p className='text-sm text-gray-400'>
              Already have an account?{' '}
              <Link to='/login' className='text-[#2196f3] hover:underline font-medium'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;