// Configuración específica para Klanstart con Hostinger
// Archivo: configuracion-klanstart.js

// ========================================
// CONFIGURACIÓN EMAILJS PARA KLANSTART
// ========================================

// INSTRUCCIONES:
// 1. Ve a https://www.emailjs.com/ y crea cuenta
// 2. Configura servicio SMTP con datos de Hostinger
// 3. Crea plantilla de email
// 4. Reemplaza los valores abajo con tus IDs reales

const KLANSTART_EMAILJS_CONFIG = {
  // Reemplazar con tu Public Key de EmailJS
  publicKey: "YOUR_PUBLIC_KEY",
  
  // Reemplazar con tu Service ID (servicio SMTP de Hostinger)
  serviceId: "YOUR_SERVICE_ID",
  
  // Reemplazar con tu Template ID (plantilla de email)
  templateId: "YOUR_TEMPLATE_ID",
  
  // Email de destino (ya configurado)
  destinationEmail: "contacto@klanstart.com"
};

// ========================================
// DATOS SMTP DE HOSTINGER
// ========================================

const HOSTINGER_SMTP_CONFIG = {
  server: "smtp.hostinger.com",
  port: 587, // o 465 para SSL
  username: "contacto@klanstart.com",
  secure: true, // TLS
  domain: "klanstart.com"
};

// ========================================
// FUNCIONES DE CONFIGURACIÓN
// ========================================

// Inicializar EmailJS con configuración de Klanstart
function initKlanstartEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(KLANSTART_EMAILJS_CONFIG.publicKey);
    console.log("✅ EmailJS inicializado para Klanstart");
    console.log("📧 Email destino:", KLANSTART_EMAILJS_CONFIG.destinationEmail);
  } else {
    console.error("❌ EmailJS no está cargado");
  }
}

// Enviar email usando configuración de Klanstart
function sendKlanstartEmail(name, email, message) {
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: KLANSTART_EMAILJS_CONFIG.destinationEmail,
    reply_to: email,
    date: new Date().toLocaleString('es-ES')
  };

  return emailjs.send(
    KLANSTART_EMAILJS_CONFIG.serviceId,
    KLANSTART_EMAILJS_CONFIG.templateId,
    templateParams
  );
}

// Validar configuración
function validateKlanstartConfig() {
  const errors = [];
  
  if (KLANSTART_EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
    errors.push("❌ Public Key no configurada");
  }
  
  if (KLANSTART_EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID") {
    errors.push("❌ Service ID no configurado");
  }
  
  if (KLANSTART_EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID") {
    errors.push("❌ Template ID no configurado");
  }
  
  if (errors.length > 0) {
    console.error("🚨 Configuración incompleta:");
    errors.forEach(error => console.error(error));
    return false;
  }
  
  console.log("✅ Configuración de Klanstart válida");
  return true;
}

// ========================================
// PLANTILLA DE EMAIL (para copiar en EmailJS)
// ========================================

const EMAIL_TEMPLATE_HTML = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4b5cc4 0%, #18f2b2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #4b5cc4; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #18f2b2; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎮 Nuevo Mensaje de Contacto</h1>
            <p>Klanstart.com ha recibido un nuevo mensaje</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">👤 Nombre:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de <strong>Klanstart.com</strong></p>
            <p>Fecha: {{date}}</p>
        </div>
    </div>
</body>
</html>
`;

// ========================================
// EXPORTAR CONFIGURACIÓN
// ========================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    KLANSTART_EMAILJS_CONFIG,
    HOSTINGER_SMTP_CONFIG,
    initKlanstartEmailJS,
    sendKlanstartEmail,
    validateKlanstartConfig,
    EMAIL_TEMPLATE_HTML
  };
}

// ========================================
// INSTRUCCIONES RÁPIDAS
// ========================================

/*
PASOS PARA CONFIGURAR:

1. Ve a https://www.emailjs.com/ y crea cuenta
2. En "Email Services" → "Add New Service" → "SMTP"
3. Configura:
   - Service Name: Klanstart Hostinger
   - SMTP Host: smtp.hostinger.com
   - SMTP Port: 587
   - Username: contacto@klanstart.com
   - Password: tu contraseña de Hostinger
   - From Email: contacto@klanstart.com

4. En "Email Templates" → "Create New Template"
5. Copia el contenido de EMAIL_TEMPLATE_HTML
6. Guarda y copia el Template ID

7. En "Account" → "API Keys" copia tu Public Key

8. Reemplaza en este archivo:
   - YOUR_PUBLIC_KEY
   - YOUR_SERVICE_ID  
   - YOUR_TEMPLATE_ID

9. En index.html, reemplaza la función de envío con:
   sendKlanstartEmail(name, email, message)

¡LISTO! Tu formulario enviará emails a contacto@klanstart.com
*/ 