# Configuración del Formulario de Contacto - Klanstart

## 🎮 Formulario de Contacto Funcional

El formulario de contacto de Klanstart ahora está configurado para enviar emails usando **EmailJS**, una solución que no requiere backend y es completamente gratuita.

## 📋 Pasos para Configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- El plan gratuito permite 200 emails por mes

### 2. Configurar Servicio de Email
1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Para `contacto@klanstart.com`, configura el servicio correspondiente
5. Copia el **Service ID** que te proporciona

### 3. Crear Plantilla de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa esta configuración:

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

### 4. Obtener Public Key
1. Ve a **"Account"** → **"API Keys"**
2. Copia tu **Public Key**

### 5. Actualizar el Código
En el archivo `index.html`, reemplaza los siguientes valores:

```javascript
// Línea donde dice:
emailjs.init("YOUR_PUBLIC_KEY");

// Reemplazar con tu Public Key real:
emailjs.init("user_abc123def456ghi789");

// Línea donde dice:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)

// Reemplazar con tus IDs reales:
emailjs.send("service_xyz123", "template_abc456", templateParams)
```

## 🔧 Características del Formulario

### ✅ Validaciones Implementadas
- **Campos requeridos**: Nombre, email y mensaje son obligatorios
- **Validación de email**: Verifica formato válido de email
- **Limpieza de datos**: Elimina espacios en blanco innecesarios

### 🎮 Efectos Visuales
- **Botón de carga**: Muestra spinner mientras envía
- **Mensajes de éxito**: Confirmación con estilo gaming
- **Mensajes de error**: Alertas informativas
- **Animaciones**: Transiciones suaves y efectos neon

### 📧 Configuración del Email
- **Destinatario**: `contacto@klanstart.com`
- **Formato**: HTML con diseño profesional
- **Información incluida**: Nombre, email, mensaje y fecha

## 🚀 Alternativas (Si no quieres usar EmailJS)

### Opción 2: Formspree
```html
<form action="https://formspree.io/f/contacto@klanstart.com" method="POST">
  <!-- mismos campos -->
</form>
```

### Opción 3: Netlify Forms
```html
<form name="contact" netlify>
  <!-- mismos campos -->
</form>
```

### Opción 4: Backend PHP
Crear archivo `send-email.php`:
```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "contacto@klanstart.com";
    $subject = "Nuevo mensaje de contacto desde Klanstart.com";
    $headers = "From: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    
    echo json_encode(['success' => true]);
}
?>
```

## 🎯 Pruebas

Para probar el formulario:
1. Completa todos los campos
2. Haz clic en "ENVIAR MENSAJE"
3. Verifica que recibas el email en `contacto@klanstart.com`
4. Revisa la consola del navegador para logs de depuración

## 🔒 Seguridad

- EmailJS incluye protección contra spam
- Los datos se envían de forma segura
- No se almacenan datos en servidores externos
- Cumple con GDPR y regulaciones de privacidad

## 📞 Soporte

Si tienes problemas con la configuración:
1. Revisa la consola del navegador (F12)
2. Verifica que los IDs de EmailJS sean correctos
3. Asegúrate de que el servicio de email esté activo
4. Contacta al soporte de EmailJS si es necesario

---

**¡Listo! Tu formulario de contacto ahora está completamente funcional y enviará emails a contacto@klanstart.com** 🎉 