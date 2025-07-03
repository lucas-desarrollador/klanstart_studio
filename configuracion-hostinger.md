# Configuración EmailJS para Hostinger - contacto@klanstart.com

## 🎯 Configuración Específica para tu Email de Hostinger

Ya que tienes `contacto@klanstart.com` configurado en Hostinger, vamos a configurar EmailJS para usar ese email.

### Paso 1: Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. El plan gratuito permite 200 emails por mes

### Paso 2: Configurar Servicio SMTP de Hostinger
1. En EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"SMTP"** (no Gmail ni otros)
4. Configura con los datos de Hostinger:

**Configuración SMTP de Hostinger:**
- **Service Name**: `Klanstart Hostinger`
- **SMTP Host**: `smtp.hostinger.com`
- **SMTP Port**: `587` (o `465` para SSL)
- **Username**: `contacto@klanstart.com`
- **Password**: Tu contraseña del email en Hostinger
- **From Email**: `contacto@klanstart.com`
- **From Name**: `Klanstart Contacto`

5. Haz clic en **"Create Service"**
6. Copia el **Service ID** que te proporciona

### Paso 3: Crear Plantilla de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura:

**Asunto:**
```
Nuevo mensaje de contacto desde Klanstart.com
```

**Contenido HTML:**
```html
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
```

4. Guarda la plantilla y copia el **Template ID**

### Paso 4: Obtener Public Key
1. Ve a **"Account"** → **"API Keys"**
2. Copia tu **Public Key**

### Paso 5: Actualizar el Código en index.html
Reemplaza los valores en tu archivo `index.html`:

```javascript
// Línea 1445 aproximadamente:
emailjs.init("YOUR_PUBLIC_KEY");

// Reemplazar con tu Public Key real:
emailjs.init("user_abc123def456ghi789");

// Línea 1470 aproximadamente:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)

// Reemplazar con tus IDs reales:
emailjs.send("service_klanstart_hostinger", "template_contacto_klanstart", templateParams)
```

## 🔧 Datos SMTP de Hostinger (Referencia)

Si necesitas verificar los datos SMTP en tu panel de Hostinger:

1. Accede a tu panel de Hostinger
2. Ve a **"Email"** → **"Manage"**
3. Selecciona `contacto@klanstart.com`
4. Busca la sección **"Email Client Configuration"** o **"SMTP Settings"**

**Configuración típica:**
- **SMTP Server**: `smtp.hostinger.com`
- **Puerto**: `587` (TLS) o `465` (SSL)
- **Usuario**: `contacto@klanstart.com`
- **Contraseña**: La que configuraste para este email

## 🎯 Ventajas de esta Configuración

✅ **Usa tu email real**: `contacto@klanstart.com`  
✅ **Sin límites de dominio**: Tu propio servidor SMTP  
✅ **Profesional**: Emails llegan desde tu dominio  
✅ **Confiable**: Hostinger es un proveedor establecido  
✅ **Gratis**: EmailJS permite 200 emails/mes gratis  

## 🚀 Prueba Rápida

Una vez configurado:
1. Completa el formulario en tu página
2. Haz clic en "ENVIAR MENSAJE"
3. Verifica que recibas el email en `contacto@klanstart.com`
4. Revisa la consola del navegador (F12) para logs

## 🔒 Seguridad

- Los datos se envían de forma segura por SMTP
- Tu contraseña de email no se expone en el frontend
- EmailJS actúa como intermediario seguro
- Cumple con estándares de seguridad web

---

**¡Con esta configuración, tu formulario enviará emails directamente a tu buzón de Hostinger!** 🎉 