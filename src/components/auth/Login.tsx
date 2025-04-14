import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function Login() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container flex items-center max-lg:pt-10">
        <div className="col1 max-lg:hidden">
          <img src="/assets/images/beatsnoop.webp" alt="Login Image" />
        </div>
        <div className="col2 md:px-40 mx-auto">
          <h2 className="font-medium text-4xl">{t('Log in to Exclusive')}</h2>
          <p className="pt-2">{t('Enter your details below')}</p>
          <form className="mt-11">
            <input
              required
              pattern="^(\+?\d{10,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
              className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9"
              placeholder={t('Email or Phone Number')}
              type="email"
            />
            <input required min={8} className="block w-full outline-none border-b border-[#00000066] pb-2 mt-9" placeholder={t('Password')} type="password" />
            <div className="flex items-center justify-between my-10">
              <input className="cursor-pointer text-white font-medium bg-[#DB4444] rounded-[4px] py-4 px-12" type="submit" value={t('Log In')} />
              <Link className="font-medium text-[#DB4444]" to="/">
                {t('Forget Password?')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
