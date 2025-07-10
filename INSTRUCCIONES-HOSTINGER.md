# Instrucciones para Despliegue en Hostinger

## Problema de Cache CSS

Si la página se ve diferente en el navegador después del despliegue en Hostinger, sigue estos pasos:

### 1. Limpiar Cache del Navegador
- **Chrome/Edge**: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)
- **Firefox**: Ctrl + F5 (Windows) o Cmd + F5 (Mac)
- **Safari**: Cmd + Option + R

### 2. Verificar Archivos en Hostinger
1. Accede al panel de control de Hostinger
2. Ve a "File Manager"
3. Verifica que estos archivos estén presentes:
   - `index.html`
   - `css/custom-styles.css`
   - `.htaccess`

### 3. Verificar Rutas de Archivos
Asegúrate de que la estructura de carpetas sea:
```
public_html/
├── index.html
├── .htaccess
├── css/
│   └── custom-styles.css
├── js/
│   └── main.js
└── img/
    └── (todas las imágenes)
```

### 4. Configuración de Hostinger
1. En el panel de control de Hostinger, ve a "Advanced" > "PHP Configuration"
2. Asegúrate de que PHP esté habilitado
3. Verifica que los módulos Apache estén activos

### 5. Forzar Recarga de CSS
Si el problema persiste:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Marca "Disable cache"
4. Recarga la página

### 6. Verificar Consola del Navegador
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Busca errores relacionados con CSS
4. Si hay errores 404, verifica las rutas de los archivos

### 7. Solución de Emergencia
Si nada funciona, puedes:
1. Renombrar el archivo CSS: `custom-styles.css` → `custom-styles-v2.css`
2. Actualizar la referencia en `index.html`
3. Subir ambos archivos

### 8. Contacto con Hostinger
Si el problema persiste:
1. Contacta al soporte de Hostinger
2. Menciona que tienes problemas con archivos CSS estáticos
3. Solicita que verifiquen la configuración del servidor

## Notas Importantes

- Los estilos críticos están incluidos directamente en el HTML como respaldo
- El archivo `.htaccess` está configurado para evitar cache de CSS
- Se agregó un parámetro de versión al CSS (`?v=1.1`)
- Hay un script de verificación que detecta problemas de carga de CSS

## Comandos Útiles

Para verificar que los archivos se subieron correctamente:
```bash
# Verificar estructura de archivos
ls -la
ls -la css/
ls -la js/
ls -la img/
``` 