import { useLanguage } from '../../LanguageContext/LanguageContext'; // Importa el contexto de idioma

const PrivacyPolicy = () => {
  const { language } = useLanguage(); // Obtiene el idioma del contexto

  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-8 mt-[116px]">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          {language === 'es'
            ? 'Última actualización: Septiembre 2024'
            : 'Last updated: September 2024'}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es' ? '1. Introducción' : '1. Introduction'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'En [Nombre de tu aplicación] ("nosotros", "nuestro" o "la Aplicación"), respetamos y protegemos la privacidad de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos la información personal de nuestros usuarios.'
              : 'At [Your App Name] ("we," "our," or "the App"), we respect and protect the privacy of our users. This Privacy Policy explains how we collect, use, share, and protect users\' personal information.'}
          </p>
          <p className="text-gray-600 mt-4">
            {language === 'es'
              ? 'Al utilizar nuestra aplicación, aceptas las prácticas de recopilación y uso de datos descritas en esta política.'
              : 'By using our app, you agree to the data collection and use practices described in this policy.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '2. Información que Recopilamos'
              : '2. Information We Collect'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Cuando utilizas [Nombre de tu aplicación], podemos recopilar las siguientes categorías de información:'
              : 'When you use [Your App Name], we may collect the following categories of information:'}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>
              {language === 'es' ? (
                <strong>Información Personal:</strong>
              ) : (
                <strong>Personal Information:</strong>
              )}
              {language === 'es'
                ? ' nombre, dirección de correo electrónico, número de teléfono.'
                : ' name, email address, phone number.'}
            </li>
            <li>
              {language === 'es' ? (
                <strong>Datos de Uso:</strong>
              ) : (
                <strong>Usage Data:</strong>
              )}
              {language === 'es'
                ? ' información sobre tu interacción con la aplicación.'
                : ' information about your interaction with the app.'}
            </li>
            <li>
              {language === 'es' ? (
                <strong>Cookies:</strong>
              ) : (
                <strong>Cookies:</strong>
              )}
              {language === 'es'
                ? ' tecnologías para rastrear la actividad en nuestra aplicación.'
                : ' technologies to track activity on our app.'}
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '3. Cómo Usamos tu Información'
              : '3. How We Use Your Information'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Usamos la información recopilada para proporcionar y mantener nuestra aplicación, mejorar tu experiencia y cumplir con las leyes y regulaciones aplicables.'
              : 'We use the information collected to provide and maintain our app, improve your experience, and comply with applicable laws and regulations.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '4. Compartir tu Información'
              : '4. Sharing Your Information'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'No compartimos tu información personal con terceros, excepto con tu consentimiento o para cumplir con obligaciones legales.'
              : 'We do not share your personal information with third parties, except with your consent or to comply with legal obligations.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '5. Seguridad de tus Datos'
              : '5. Data Security'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Implementamos medidas de seguridad razonables para proteger tu información, pero no podemos garantizar una seguridad absoluta.'
              : 'We implement reasonable security measures to protect your information, but we cannot guarantee absolute security.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es' ? '6. Tus Derechos' : '6. Your Rights'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Dependiendo de tu ubicación, puedes tener ciertos derechos sobre la protección de tus datos, como el acceso, actualización o eliminación de tu información.'
              : 'Depending on your location, you may have certain rights regarding your data protection, such as access, updates, or deletion of your information.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '7. Enlaces a Otros Sitios'
              : '7. Links to Other Sites'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Nuestra aplicación puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad o el contenido de estos sitios.'
              : 'Our app may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.'}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es'
              ? '8. Cambios en esta Política de Privacidad'
              : '8. Changes to this Privacy Policy'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Nos reservamos el derecho de actualizar esta Política de Privacidad. Notificaremos cualquier cambio publicando la nueva política en esta página.'
              : 'We reserve the right to update this Privacy Policy. We will notify of any changes by posting the new policy on this page.'}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === 'es' ? '9. Contacto' : '9. Contact'}
          </h2>
          <p className="text-gray-600">
            {language === 'es'
              ? 'Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos a través de [Correo electrónico de contacto].'
              : 'If you have questions or concerns about this Privacy Policy, please contact us at [Contact email].'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
