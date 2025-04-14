import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaLinkedinIn } from 'react-icons/fa6';
import { CiTwitter } from 'react-icons/ci';
import { VscSend } from 'react-icons/vsc';
import { Link } from 'react-router';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-black text-white">
        <div className="container flex justify-center gap-20 flex-wrap pt-20 px-14">
          <div className="col1">
            <Link to={'/'} className="block font-bold text-2xl pb-4">
              {t('Exclusive')}
            </Link>
            <span className="block font-medium text-[20px] py-2">{t('Subscribe')}</span>
            <p>{t('Get 10% off your first order')}</p>
            <div className="email flex items-center  border-[1.5px] border-[#FAFAFA] rounded-sm py-3 pl-4 mt-5">
              <input className="outline-none max-w-[80%] text-[14px]" placeholder={t('Enter your email')} type="email" />
              <VscSend className="text-[20px]" />
            </div>
          </div>
          <div className="col2">
            <span className="block font-medium text-[20px] pb-4">{t('Support')}</span>
            <address className="not-italic pt-3">
              <span>{t('111 Bijoy sarani, Dhaka,')}</span>
              <br />
              <span>{t('DH 1515, Bangladesh.')}</span>
            </address>
            <span className="block py-3">exclusive@gmail.com</span>
            <span>+88015-88888-9999</span>
          </div>
          <div className="col3">
            <ul>
              <li>
                <span className="block font-medium text-[20px] pb-4">{t('Account')}</span>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('My Account')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/Login'}>
                  {t('Login / Register')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Cart')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Wishlist')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Shop')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col4">
            <ul>
              <li>
                <span className="block font-medium text-[20px] pb-4">{t('Quick Link')}</span>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Privacy Policy')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Terms Of Use')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('FAQ')}
                </Link>
              </li>
              <li>
                <Link className="block pt-3" to={'/'}>
                  {t('Contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col5">
            <span className="block font-medium text-[20px] pb-5">{t('Download App')}</span>
            <p className="text-[12px] text-[#a2a2a2] py-3">{t('Save $3 with App New User Only')}</p>
            <div className="media flex gap-3">
              <img src="assets/images/Qrcode.webp" alt="QrCode" />
              <div className="download">
                <a href="#" target="_blank">
                  <img src="assets/images/google_play.webp" alt="Google Play" />
                </a>
                <a href="#" target="_blank">
                  <img className="mt-3" src="assets/images/app_store.webp" alt="App Store" />
                </a>
              </div>
            </div>
            <div className="social_icon flex items-center gap-8 mt-6">
              <a href="#" target="_blank">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" target="_blank">
                <CiTwitter className="text-2xl" />
              </a>
              <a href="#" target="_blank">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" target="_blank">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="text-[#F9F9F933] mt-14" />
        <p className="text-center text-[#F9F9F933] py-5"> &copy; {t('Copyright Rimel 2022. All right reserved')}</p>
      </footer>
    </>
  );
}
