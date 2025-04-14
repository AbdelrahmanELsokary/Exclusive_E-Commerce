import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import { useState } from 'react';

interface User {
  name: string;
  emailOrphon: string;
  password: string;
}

export function SignUp() {
  const { t } = useTranslation();
  const [formInputs, setFormInputs] = useState<User>({
    name: '',
    emailOrphon: '',
    password: '',
  });
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem('Users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const updatedUsers = [...users, formInputs];
    localStorage.setItem('Users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    toast.success(t('User Created Successfully'));
    setFormInputs({
      name: '',
      emailOrphon: '',
      password: '',
    });
  }

  return (
    <section>
      <div className="container flex items-center max-lg:pt-10">
        <div className="col1 max-lg:hidden">
          <img src="/assets/images/beatsnoop.webp" alt="Sign Up Image" />
        </div>
        <div className="col2 md:px-40 mx-auto">
          <h2 className="font-medium text-4xl">{t('Create an account')}</h2>
          <p className="pt-2">{t('Enter your details below')}</p>
          <form className="mt-11" onSubmit={handleSignUp}>
            <input
              value={formInputs.name}
              onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
              autoFocus
              required
              minLength={4}
              className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9"
              placeholder={t('Name')}
              type="text"
            />
            <input
              value={formInputs.emailOrphon}
              onChange={(e) => setFormInputs({ ...formInputs, emailOrphon: e.target.value })}
              required
              pattern="^(\+?\d{10,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
              className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9"
              placeholder={t('Email or Phone Number')}
              type="email"
            />
            <input
              value={formInputs.password}
              onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
              required
              min={8}
              className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9"
              placeholder={t('Password')}
              type="password"
            />
            <input className="block cursor-pointer text-white font-medium bg-[#DB4444] rounded-[4px] min-w-[433px] py-4 px-28 mx-auto mt-12" type="submit" value={t('Create Account')} />
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer border border-[#00000066] rounded-[4px] py-4 px-28 mx-auto mt-4">
              <FcGoogle className="text-2xl" />
              {t('Sign up with Google')}
            </Link>
            <p className="flex items-center justify-center text-[#030202cf] gap-2.5 py-6">
              {t('Already have account?')}
              <Link className="font-medium border-b border-[#00000066]" to="/Login">
                {t('Log in')}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
