// Configuración de EmailJS para Klanstart
// 
// INSTRUCCIONES DE CONFIGURACIÓN:
//
// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. Una vez registrado, ve a "Email Services" y agrega tu servicio de email
//    - Puedes usar Gmail, Outlook, o cualquier proveedor SMTP
//    - Para contacto@klanstart.com, configura el servicio correspondiente
//
// 3. Ve a "Email Templates" y crea una plantilla con este contenido:
/*
Asunto: Nuevo mensaje de contacto desde Klanstart.com

Contenido:
Nuevo mensaje de contacto recibido:

Nombre: {{from_name}}
Email: {{from_email}}
Mensaje: {{message}}

Este mensaje fue enviado desde el formulario de contacto de Klanstart.com
*/
//
// 4. Copia los IDs que te proporciona EmailJS:
//    - Service ID (ejemplo: "service_abc123")
//    - Template ID (ejemplo: "template_xyz789") 
//    - Public Key (ejemplo: "user_def456")
//
// 5. Reemplaza los valores en el archivo index.html:
//    - YOUR_SERVICE_ID por tu Service ID
//    - YOUR_TEMPLATE_ID por tu Template ID  
//    - YOUR_PUBLIC_KEY por tu Public Key

// Configuración actual (reemplazar con tus valores reales):
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",        // Reemplazar con tu Service ID
  templateId: "YOUR_TEMPLATE_ID",      // Reemplazar con tu Template ID
  publicKey: "YOUR_PUBLIC_KEY"         // Reemplazar con tu Public Key
};

// Función para inicializar EmailJS
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("EmailJS inicializado correctamente");
  } else {
    console.error("EmailJS no está cargado");
  }
}

// Función para enviar email
function sendEmail(templateParams) {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId, 
    EMAILJS_CONFIG.templateId, 
    templateParams
  );
}

// Exportar configuración si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EMAILJS_CONFIG, initEmailJS, sendEmail };
} 