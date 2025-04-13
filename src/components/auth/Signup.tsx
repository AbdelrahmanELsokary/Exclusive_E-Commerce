import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

export function SignUp() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container flex items-center max-lg:pt-10">
          <div className="col1 max-lg:hidden">
            <img src="/assets/images/beatsnoop.webp" alt="Sgn Up Image" />
          </div>
          <div className="col2 md:px-40 mx-auto">
            <h2 className="font-medium text-4xl">{t('Create an account')}</h2>
            <p className="pt-2">{t('Enter your details below')}</p>
            <form className="mt-11">
              <input className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9" placeholder={t('Name')} type="text" />
              <input className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9" placeholder={t('Email or Phone Number')} type="text" />
              <input className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9" placeholder={t('Password')} type="password" />
              <button className="block cursor-pointer text-white font-medium bg-[#DB4444] rounded-[4px] min-w-[433px] py-4 px-28 mx-auto mt-12" type="button">
                {t('Create Account')}
              </button>
              <Link to={'/'} className="flex items-center gap-2.5 cursor-pointer border border-[#00000066] rounded-[4px] py-4 px-28 mx-auto mt-4">
                <FcGoogle className="text-2xl" />
                {t('Sign up with Google')}
              </Link>
              <p className="flex items-center justify-center text-[#030202cf] gap-2.5 py-6 ">
                {t('Already have account?')}
                <Link className="font-medium border-b border-[#00000066]" to={'/src/components/auth/Login.tsx'}>
                  {t('Log in')}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
